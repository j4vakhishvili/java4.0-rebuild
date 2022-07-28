const navbar = document.querySelector('nav');

function openNav(){
    navbar.style.transform = "scale(1)";
    navbar.style.top = "0";
}

function closeNav(){
    navbar.style.transform = "scale(0)";
    navbar.style.top = "-100%";
}