

var btn = document.getElementById("btn")
var ShopBtn1 = document.getElementById("shopbtn1");

var ShopBtn2 = document.getElementById("shopbtn2");
var ShopBtn3 = document.getElementById("shopbtn3");

var SHOP = document.getElementById("shoph2")
var Bdisplay = document.getElementById("balance")

var balance = 10000;
var pps = 0;
var rate = 1;
var bool = false;

btn.addEventListener("click", function () {
    Bdisplay.innerHTML = '$' + (balance += rate);

    if (balance >= 30) {
        SHOP.innerHTML = "------SHOP-------"
        ShopBtn1.innerHTML = "Double Click! (this stacks)"

        ShopBtn1.addEventListener("click", function () {
            if (balance < 30) {
                alert("You Don't Have Enough");
                location.reload();
            } else if (balance >= 30) {

                rate = rate + 1;
                balance = balance - 30;
            }

        })

    }
    if (balance >= 100) {
        ShopBtn2.innerHTML = "Passive Income"


    }

    ShopBtn2.addEventListener("click", function(){
        balance -= 100;
        pps += 5;
    
        
    })



})

setInterval(function () {
    balance += pps;
}, 1000);




