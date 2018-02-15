var axios = require('axios');
var qs = require('qs');
var config = {headers: {
        'content-type': 'application/x-www-form-urlencoded'}
}
module.exports = {

deviceLevel: function(id){
  var URI = window.encodeURI(`https://api.myjson.com/bins/${id}`);
  return axios.get(URI)
  .then(function(response){
      return response.data
  })
},
browserLevel: function(id){
  var encodedURI = window.encodeURI(`https://api.myjson.com/bins/${id}`);
  return axios.get(encodedURI) // Format yyyy-mm-dd
  .then(function(response){
      return response.data
  })
},

location: function(){
  var URI = window.encodeURI('https://api.myjson.com/bins/178nst');
  return axios.get(URI)
  .then(function(response){
      return response.data;
  })
},
geo: function(){
  var URI = window.encodeURI('https://api.myjson.com/bins/178nst');
  return axios.get(URI)
  .then(function(res){
    return res.data;
  })
},

dayOfWeek: function(id){
  var URI = window.encodeURI(`https://api.myjson.com/bins/${id}`);
  return axios.get(URI)
  .then(function(response){
      return response.data
  })
},

hourOfDay: function(id){
  var URI = window.encodeURI(`https://api.myjson.com/bins/${id}`);
  return axios.get(URI)
  .then(function(response){
      return response.data
  })
},

topProduct: function(usertype){
  var URI = window.encodeURI(`https://api.myjson.com/bins/${usertype}`);
  return axios.get(URI)
  .then(function(response){
      return response.data
  })
},

channels: function(id){
  var URI = window.encodeURI(`https://api.myjson.com/bins/${id}`);
  return axios.get(URI)
  .then(function(response){
    return response.data
  })
},


aggregatedInfo: function(usertype){
  var URI = window.encodeURI(`https://api.myjson.com/bins/${usertype}`);
  return axios.get(URI)
  .then(function(response){
    return response.data
  })
}
}
