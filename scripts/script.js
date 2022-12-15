// JavaScript Document
console.log("hi");

var shopButtons = document.querySelectorAll("main section:nth-of-type(2) ul li button:last-of-type");
const body = document.querySelector("body");
shopButtons.forEach(shopButton => {
    shopButton.addEventListener("click", addToShoppingCart);
});


var html = document.querySelector("html");
var themaButton = document.querySelector("main>button");
themaButton.addEventListener("click", kerstThema);

function kerstThema() {
    body.classList.toggle("custometheme");
    html.classList.toggle("custometheme");
}


function addToShoppingCart() {
    var shoppingCartAmount = document.querySelector("body > a span:first-of-type");
    var currentAmount = shoppingCartAmount.innerHTML;
    /* dat is een string - dus even omzetten naar een getal */
    currentAmount = parseInt(currentAmount);
    var newAmount = currentAmount + 1;
    shoppingCartAmount.innerHTML = newAmount;


    var shoppingbutton = document.querySelector("body > a");
    shoppingbutton.classList.add("moving");

    shoppingbutton.addEventListener("animationend", ikKanOpnieuw);

    function ikKanOpnieuw() {
        shoppingbutton.classList.remove("moving");
    }

    if (newAmount == 10) {
        var duration = 15 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
        // code voor confetti afkomstig van: https://www.kirilv.com/canvas-confetti/
    }
};

var favorietenKnoppen = document.querySelectorAll("main section:nth-of-type(2) ul li button:first-of-type");
favorietenKnoppen.forEach(favorietenKnop => {
    favorietenKnop.addEventListener("click", addFavorite);
});


function addFavorite() {
   
    var favoriteAmount = document.querySelector("body > a span:last-of-type");
    var currentCount = favoriteAmount.innerHTML;
    /* dat is een string - dus even omzetten naar een getal */
    currentCount = parseInt(currentCount);
    var newCount = currentCount + 1;
    favoriteAmount.innerHTML = newCount;


   
};