// mobile menu open and close
var menuButton = document.getElementById("menu-button");
var navbar = document.getElementById("navbar");

if (menuButton) {
  menuButton.onclick = function () {
    navbar.classList.toggle("show");
  };
}

// shop now 
var shopButton = document.querySelector("#hero button");

shopButton.onclick = function () {
  document.getElementById("product1").scrollIntoView();
};

// add to cart
var cartButtons = document.querySelectorAll(".pro .cart");
var cartCount = 0;

for (var i = 0; i < cartButtons.length; i++) {
  cartButtons[i].onclick = function (event) {
    event.preventDefault();
    cartCount = cartCount + 1;
    alert("Added to cart! Items in cart: " + cartCount);
  };
}


