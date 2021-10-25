var Bridge = {};

Bridge.login = function(callback){
     //build json string
     var message = {
   request_code: 123,
   action: "LOAD_OFFER_ASYNC",
   data: callback
  }
}

var callback = Bridge.callBack = function(cm){
          alert("login success");
}
