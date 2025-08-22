document.getElementById("addmoney").style.display ="block"; // by default firstly one thing is show
 document.getElementById("cashOut").style.display = "none"; // by default firstly another thing isn't show



document.getElementById('add-money-box').addEventListener("click", function(){
    document.getElementById("addmoney").style.display ="block";
    document.getElementById("cashOut").style.display = "none";
})

document.getElementById('cash-out-box').addEventListener("click", function(){
    document.getElementById("cashOut").style.display ="block";
    document.getElementById("addmoney").style.display = "none";
})