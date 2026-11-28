
var menuButton = document.getElementById("menu-button");
var navbar = document.getElementById("navbar");

if (menuButton) {
  menuButton.onclick = function () {
    navbar.classList.toggle("show");
  };
}

// shop now button goes down to products
var shopButton = document.querySelector("#hero button");

shopButton.onclick = function () {
  document.getElementById("product1").scrollIntoView();
};

