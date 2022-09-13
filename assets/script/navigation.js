const navbar = document.getElementById('menu');

function openNav(){
    navbar.style.transform = "translateX(0)";
    navbar.style.opacity = "1";
}

function closeNav(){
    navbar.style.transform = "scale(0)";
    navbar.style.top = "-100%";
}