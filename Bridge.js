var Bridge = {};
    
function myFunction() {
    
  let x = document.getElementById("demo");
  x.style.fontSize = "25px"; 
  x.style.color = "red"; 
    
   alert("Hello! I am an alert box!!");
     //build json string
     var message = {
   request_code: 123,
   action: "LOAD_OFFER_ASYNC",
   data: callback
}

var callback = Bridge.callBack = function(cm){
          alert("login success");
}
