import axios from 'axios';
import jwt from 'jwt-decode';


// const api_url = 'https://akadsph-staging.herokuapp.com'
const api_url = process.env.REACT_APP_API_URL
// const api_url = 'http://api.akadsph.com:8000'
const username = process.env.REACT_APP_USERNAME
const password = process.env.REACT_APP_KEY
// const api_url = 'http://127.0.0.1:8000'
const paymongo_key = process.env.REACT_APP_PAYMONGO_KEY
// REACT_APP_PAYMONGO_LIVE=Basic cGtfbGl2ZV8zRWY4VkoyM2dOVFU2SllDR0VjeFp6aGI6
// axios.defaults.withCredentials = true;

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const get_token = (_callback) => {
          localStorage.removeItem('token')
        localStorage.removeItem('session_token')
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

export const delete_api = (url, id, _callback) => {
  const headers = {
    'Authorization': 'JWT '+localStorage.getItem('token'), 
    'Content-Type': 'application/json'
  }

  axios.delete(api_url+'/'+url+'/'+id+'/',{
    headers
  })
  .then(res => {
    _callback(res.data)
  })
}



export const get_user = (_callback) => {
  const data = jwt(localStorage.getItem('session_token'))
  _callback(data)
}

export const api = (url, method, raw_data, _callback) => {
  verify_token()
}

export const gcashcheckout = (_callback) => {
  var axios = require('axios');

  const successUrl = 'http://localhost:3000/process-transaction?method=gcash'
  const failUrl = 'http://localhost:3000/transaction-fail'
  const amount = 10000
  var data = JSON.stringify({"data":{"attributes":{"amount":amount,"redirect":{"success":successUrl,"failed":failUrl},"type":"gcash","currency":"PHP"}}});
  console.log(data)
  
  var config = {
    method: 'post',
    url: 'https://api.paymongo.com/v1/sources',
    headers: { 
      'Authorization': paymongo_key, 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(response);
    _callback(response)
  })
  .catch(function (error) {
    console.log(error.response);
    _callback(error.response)
  });
}

export const grabpaycheckout = (_callback) => {
}

export const checkout = (shopItem, promoCode, card_number, exp_date, cvc, _callback) => {
  create_paymentintent(shopItem, promoCode, (payment_intent) => {
    const exp_month = exp_date.split('/')[0] 
    const exp_year = exp_date.split('/')[1] 
    console.log(payment_intent)
    create_paymentmethod(card_number, exp_month, exp_year, cvc, (payment_method) =>  {
      console.log(payment_method)
      if(payment_method.status != 400){
        const payment_method_id = payment_method['data']['data']['id']
        attach_payment(payment_intent, payment_method_id, (res) => {
          res['error'] = false
          _callback(res)
        });
      }else{
        payment_method['error'] = true
        _callback(payment_method)
      }
    });
  });
}

export const create_paymentintent = (shopItem, promoCode, _callback) => {
  get_user((res) => {
    const id = res['id']
    const data = {
      'parent_id':id,
      'shop_item':shopItem,
      'promo_code':promoCode
    }
    post_api('paymongo', data, (res) => {
      _callback(res)
    })

  })
}

export const create_paymentmethod = (card_number, exp_month, exp_year, cvc, _callback) => {
  var axios = require('axios');
  console.log(exp_month)
  console.log(exp_year)
  console.log(cvc)
  if(Number(exp_year) < 100){
    exp_year = Number(exp_year) + 2000
  }
  var data = JSON.stringify({"data":{"attributes":{"details":{"card_number":card_number,"exp_month":Number(exp_month),"exp_year":exp_year,"cvc":cvc},"type":"card"}}});
  console.log(data)
  
  var config = {
    method: 'post',
    url: 'https://api.paymongo.com/v1/payment_methods',
    headers: { 
      'Authorization': paymongo_key, 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(response);
    _callback(response)
  })
  .catch(function (error) {
    console.log(error.response);
    _callback(error.response)
  });

}

export const attach_payment = (payment_intent, payment_method, _callback) => {
  var paymentMethodId = payment_method;

  var clientKey = payment_intent;

  console.log(payment_intent)

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
        'Authorization': paymongo_key,
        'Content-Type': 'application/json'
      },
    }
  ).then(function(response) {
    console.log(response)
    var paymentIntent = response.data.data;
    var paymentIntentStatus = paymentIntent.attributes.status;
      
      if (paymentIntentStatus === 'awaiting_next_action') {
        console.log('wait')
        const url = paymentIntent.attributes.next_action.redirect.url
        const status = {
          'state':paymentIntentStatus,
          'url':url,
          'payment_intent':paymentIntentId,
          'payment_method':payment_method,
          'client_key': clientKey
        }
        // Render your modal for 3D Secure Authentication since next_action has a value. You can access the next action via paymentIntent.attributes.next_action.
        _callback(status)
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
            const status = {
              'state':'success',
            }
            if(res){
              _callback(status)
            }else{
              status['state'] = 'fail'
              _callback(status)
            }
          })
        })

        // You already received your customer's payment. You can show a success message from this condition.
      } else if(paymentIntentStatus === 'awaiting_payment_method') {
        console.log('await')
        const status = {
        'state':'fail',
        }
        _callback(status)
        // The PaymentIntent encountered a processing error. You can refer to paymentIntent.attributes.last_payment_error to check the error and render the appropriate error message.
      }  else if (paymentIntentStatus === 'processing'){
        console.log('processing')
        // You need to requery the PaymentIntent after a second or two. This is a transitory status and should resolve to `succeeded` or `awaiting_payment_method` quickly.
        const status = {
        'state':paymentIntentStatus,
        'payment_intent':paymentIntent.id,
        'payment_method':payment_method,
        }
        _callback(status)
      }

  }).catch(err => {
    console.log(err)
    console.log(err.response)
    const status = {
    'state':'fail',
    }
    _callback(status)
  })
}

export const get_payment_intent = (payment_method, payment_intent, client_key, _callback) => {
  // Get the payment intent id from the client key
  var paymentIntentId = payment_intent
  var clientKey = client_key 
  
  axios.get(
    'https://api.paymongo.com/v1/payment_intents/' + paymentIntentId + '?client_key=' + client_key,
    {
      headers: { 
        'Authorization': paymongo_key,
        'Content-Type': 'application/json'
      },
    }
  ).then(function(response) {
    console.log(response)
    var paymentIntent = response.data.data;
    var paymentIntentStatus = paymentIntent.attributes.status;
      
      if (paymentIntentStatus === 'awaiting_next_action') {
        console.log('wait')
        const url = paymentIntent.attributes.next_action.redirect.url
        const status = {
          'state':paymentIntentStatus,
          'url':url,
          'payment_intent':paymentIntent.id,
          'client_key': clientKey
        }
        // Render your modal for 3D Secure Authentication since next_action has a value. You can access the next action via paymentIntent.attributes.next_action.
        _callback(status)
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
            const status = {
              'state':'success',
            }
            if(res){
              _callback(status)
            }else{
              status['state'] = 'fail'
              _callback(status)
            }
          })
        })

        // You already received your customer's payment. You can show a success message from this condition.
      } else if(paymentIntentStatus === 'awaiting_payment_method') {
        console.log(paymentIntent.attributes.last_payment_error)
        const status = {
        'state':'fail',
        'error': paymentIntent.attributes.last_payment_error
        }
        _callback(status)
        // The PaymentIntent encountered a processing error. You can refer to paymentIntent.attributes.last_payment_error to check the error and render the appropriate error message.
      }  else if (paymentIntentStatus === 'processing'){
        console.log('processing')
        // You need to requery the PaymentIntent after a second or two. This is a transitory status and should resolve to `succeeded` or `awaiting_payment_method` quickly.
        const status = {
        'state':paymentIntentStatus,
        'payment_intent':paymentIntent.id
        }
        _callback(status)
      }

  }).catch(err => {
    console.log(err)
    console.log(err.response)
    const status = {
    'state':'fail',
    }
    _callback(status)
  })
}