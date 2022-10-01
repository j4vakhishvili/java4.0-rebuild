const navbar = document.getElementById('menu');

function openNav(){
    navbar.style.transform = "translateX(0)";
    navbar.style.opacity = "1";
}

function closeNav(){
    navbar.style.transform = "translateX(-100%)";
    navbar.style.opacity = "0.6";
}