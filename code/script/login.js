// alert()
//  console.log("hello");

document.getElementById("login-btn").addEventListener("click", 
    function(event){
    event.preventDefault(); //no again reload

    const accountNumber = document.getElementById("Account-number").value;
   const Pin = document.getElementById("pin").value;
   console.log(accountNumber, Pin);
   
    
})