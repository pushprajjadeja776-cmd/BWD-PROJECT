
var menuButton = document.getElementById("menu-button");
var navbar = document.getElementById("navbar");

if (menuButton) {
  menuButton.onclick = function () {
    navbar.classList.toggle("show");
  };
}

