const navbar = document.getElementById('menu');
const about = document.getElementById('aboutMe');
const resume = document.getElementById('resume');

function openNav(){
    navbar.style.transform = "translateY(0)";
    navbar.style.opacity = "1";
}

function closeNav(){
    navbar.style.transform = "translateY(-100%)";
    navbar.style.opacity = "0.6";
}

function openAbout(){
    about.style.transform = "translateY(0)";
    about.style.opacity = "1";
}

function closeAbout(){
    about.style.transform = "translateY(-100%)";
    about.style.opacity = "0.6";
}

function openResume(){
    resume.style.transform = "translateY(0)";
    resume.style.opacity = "1";
}

function closeResume(){
    resume.style.transform = "translateY(-100%)";
    resume.style.opacity = "0.6";
}