document.getElementById('add-money').addEventListener('click', function(event){
  event.preventDefault();
  const amount = document.getElementById("amount").value;
  const convertAmount = parseFloat(amount);
  const pin = document.getElementById("pin").value;
  const convertPin = parseInt(pin);
  const mainBalance = document.getElementById("main-balance").innerText;
  const convertMainbalance = parseFloat(mainBalance);
  

  if (convertPin === 1234) {
     const sum = convertMainbalance + convertAmount;
      document.getElementById("main-balance").innerText = sum;
  }
  else{
    console.log();
    
  }
}) 