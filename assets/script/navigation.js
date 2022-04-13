const navbar = document.querySelector('nav');
const logo = document.getElementById('logo');

function openNav(){
    navbar.style.transform = "scale(1)";
    logo.style.opacity = "0";
}

function closeNav(){
    navbar.style.transform = "scale(0)";
    logo.style.opacity = "1";
}