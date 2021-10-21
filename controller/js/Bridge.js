var Bridge = {};

Bridge.login = function(callback){
     //build json string
     var message = {
   request_code: 123,
   action: "LOAD_OFFER_ASYNC",
   data: callback
  }
}
     prompt("bridge_key", JSON.stringify(message));
}


var callback = Bridge.callBack = function(cm){
          alert("login success");
}
