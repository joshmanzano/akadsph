import axios from 'axios';
import jwt from 'jwt-decode';

// const api_url = 'https://akadsph-staging.herokuapp.com'
const api_url = 'https://api.akadsph.com'
const username = 'admin'
const password = 'EelBoneyTwitterImperfect'
// const api_url = 'http://127.0.0.1:8000'
const paymongo_public = 'pk_test_LiBiYthx1D36hQYVcPSRB2MJ'
// axios.defaults.withCredentials = true;

const get_token = (_callback) => {
  localStorage.clear()
  const data = {
    'username': username,
    'password': password
  }
  axios.post(api_url+'/'+'api-token-auth'+'/', data)
  .then(res => {
    localStorage.setItem('token',res.data.token)
    _callback(true)
  }).catch(err => {
    _callback(false)
  })
}

export const check_admin_token = (_callback) => {
  const token = localStorage.getItem('token')
  const timestamp = Number(Date.now());
  if(token == null){
    get_token((res) => {
      _callback(res)
    })
  }else{
    const token_data = jwt(token)
    const expiry = Number(token_data['exp']) * 1000
    if(timestamp > expiry){
      get_token((res) => {
        _callback(res)
      })
    }
    _callback(true)
  }
}


export const verify_token = (_callback) => {
  const headers = {
    'Authorization': 'JWT '+localStorage.getItem('token'), 
    'Content-Type': 'application/json'
  }

  var axios = require('axios');
  var token = localStorage.getItem('session_token')
  var data = JSON.stringify({
    'session_token': token
  });
  
  var config = {
    method: 'post',
    url: api_url+'/'+'tokeninfo'+'/',
    headers: headers, 
    data : data
  };
  
  axios(config)
  .then(function (response) {
    _callback(response.data)
  })
  .catch(function (error) {
    _callback({
      'verified': false
    })
  });

}


export const get_api = (url, _callback) => {
  const headers = {
    'Authorization': 'JWT '+localStorage.getItem('token'), 
    'Content-Type': 'application/json'
  }

  axios.get(api_url+'/'+url+'/',{
    headers
  })
  .then(res => {
    _callback(res.data)
  })
}

export const post_api = (url, raw_data, _callback) => {
  const headers = {
    'Authorization': 'JWT '+localStorage.getItem('token'), 
    'Content-Type': 'application/json'
  }

  var axios = require('axios');
  var data = JSON.stringify(raw_data);
  
  var config = {
    method: 'post',
    url: api_url+'/'+url+'/',
    headers, 
    data : data
  };
  
  axios(config)
  .then(function (response) {
    _callback(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
  
}

export const get_user = (_callback) => {
  const data = jwt(localStorage.getItem('session_token'))
  _callback(data)
}

export const api = (url, method, raw_data, _callback) => {
  verify_token()

}

export const checkout = (amount, card_number, exp_date, cvc, _callback) => {
  create_paymentintent(amount, (payment_intent) => {
    const exp_month = exp_date.split('/')[0] 
    const exp_year = exp_date.split('/')[1] 
    create_paymentmethod(card_number, exp_month, exp_year, cvc, (payment_method) =>  {
      console.log(payment_method)
      const payment_method_id = payment_method['data']['id']
      attach_payment(payment_intent, payment_method_id, (res) => {
        _callback(res)
      });
    });
  });
}

export const create_paymentintent = (amount, _callback) => {
  get_user((res) => {
    const id = res['id']
    const data = {
      'parent_id':id,
      'amount':amount
    }
    post_api('paymongo', data, (res) => {
      _callback(res)
    })

  })
}

export const create_paymentmethod = (card_number, exp_month, exp_year, cvc, _callback) => {
  var axios = require('axios');
  var data = JSON.stringify({"data":{"attributes":{"details":{"card_number":"4343434343434345","exp_month":7,"exp_year":2025,"cvc":"545"},"type":"card"}}});
  
  var config = {
    method: 'post',
    url: 'https://api.paymongo.com/v1/payment_methods',
    headers: { 
      'Authorization': 'Basic cGtfdGVzdF9MaUJpWXRoeDFEMzZoUVlWY1BTUkIyTUo6', 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    _callback(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });

}

export const attach_payment = (payment_intent, payment_method, _callback) => {
  var paymentMethodId = payment_method;

  var clientKey = payment_intent;

  // Get the payment intent id from the client key
  var paymentIntentId = payment_intent.split('_client')[0];

  console.log(paymentMethodId)
  console.log(clientKey)
  console.log(paymentIntentId)
  
  axios.post(
    'https://api.paymongo.com/v1/payment_intents/' + paymentIntentId + '/attach/',
    {
      data: {
        attributes: {
          client_key: clientKey,
          payment_method: paymentMethodId,
        }
      }
    },
    {
      headers: { 
        'Authorization': 'Basic cGtfdGVzdF9MaUJpWXRoeDFEMzZoUVlWY1BTUkIyTUo6'
      },
    }
  ).then(function(response) {
    console.log(response)
    var paymentIntent = response.data.data;
    var paymentIntentStatus = paymentIntent.attributes.status;
    
    if (paymentIntentStatus === 'awaiting_next_action') {
      console.log('wait')
      // Render your modal for 3D Secure Authentication since next_action has a value. You can access the next action via paymentIntent.attributes.next_action.
    } else if (paymentIntentStatus === 'succeeded') {
      console.log('success')
      get_user((res) => {
        const id = res['id']
        const data = {
          'parent_id': id,
          'client_key': clientKey,
          'payment_intent': paymentIntentId
        }
        post_api('verify-paymongo', data, (res) => {
          console.log(res)
          _callback(res)
        })
      })

      // You already received your customer's payment. You can show a success message from this condition.
    } else if(paymentIntentStatus === 'awaiting_payment_method') {
      console.log('await')
      // The PaymentIntent encountered a processing error. You can refer to paymentIntent.attributes.last_payment_error to check the error and render the appropriate error message.
    }  else if (paymentIntentStatus === 'processing'){
      console.log('processing')
      // You need to requery the PaymentIntent after a second or two. This is a transitory status and should resolve to `succeeded` or `awaiting_payment_method` quickly.
    }
  }).catch(err => {
    console.log(err)
    console.log(err.response)
    _callback(false)
  })
}