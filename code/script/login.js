// alert()
//  console.log("hello");

document.getElementById("login-btn").addEventListener("click", 
    function(event){
    event.preventDefault(); //no again reload

    const accountNumber = document.getElementById("Account-number").value;
   const Pin = document.getElementById("pin").value;
   const convertedPin = parseInt(Pin);

   if(accountNumber.length===11){
    //   console.log("yes, valid Account Number");
      if(convertedPin===1234){
        console.log("Okay, pin is good");
      }
      else{
        console.log("Pin incorrect");
        
      }
   }
   else{
    console.log("Need Valid Account Number");
    
   }

   
    
})