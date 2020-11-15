import axios from 'axios';

const api_url = 'https://akadsph-staging.herokuapp.com' /*'http://127.0.0.1:8000'*/
axios.defaults.withCredentials = true;

const token = localStorage.getItem('token')
if(token == null){
  const data = {
    'username':'admin',
    'password':'password'
  }
  axios.post(api_url+'/'+'api-token-auth'+'/', data)
  .then(res => {
    localStorage.setItem('token',res.data.token)
  })
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
    console.log(error);
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

export const api = (url, method, raw_data, _callback) => {
  verify_token()

}