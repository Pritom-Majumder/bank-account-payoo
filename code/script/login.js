// alert()
//  console.log("hello");

document.getElementById("login-btn").addEventListener("click", 
    function(event){
    event.preventDefault(); //no again reload

    const accountNumber = document.getElementById("Account-number").value;
   const Pin = document.getElementById("pin").value;
   const convertedPin = parseInt(Pin); //converted_from_string_to_number"

   if(accountNumber.length === 11){
    //   console.log("yes, valid Account Number");
      if(convertedPin === 1234){
        // window.location.href="./main.html";//link up the another html file
        window.location.href="./main.html"
      }
      else{
       alert("Pin incorrect");
      }
   }
   else{
    alert("Need Valid Account Number");
    
   }
    
})