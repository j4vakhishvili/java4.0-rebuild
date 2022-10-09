const all = document.getElementById('all');
const brand = document.getElementById('brand');
const webdev = document.getElementById('webdev');
const illustration = document.getElementById('illustration');
const photoshop = document.getElementById('photoshop');
const others = document.getElementById('others');

const itemsNamedBrand = document.querySelectorAll(".brand");
const itemsNamedWebdev = document.querySelectorAll(".webdev");
const itemsNamedIllustration = document.querySelectorAll(".illustration");
const itemsNamedPhotoshop = document.querySelectorAll(".photoshop");
const itemsNamedOthers = document.querySelectorAll(".others");

function allClick(){
    all.classList.add('on');
    brand.classList.remove('on');
    webdev.classList.remove('on');
    illustration.classList.remove('on');
    photoshop.classList.remove('on');
    others.classList.remove('on');

    for (let i = 0; i < itemsNamedBrand.length; i++) {
        itemsNamedBrand[i].style.display = "block";
    }
    for (let i = 0; i < itemsNamedWebdev.length; i++) {
        itemsNamedWebdev[i].style.display = "block";
    }
    for (let i = 0; i < itemsNamedIllustration.length; i++) {
        itemsNamedIllustration[i].style.display = "block";
    }
    for (let i = 0; i < itemsNamedPhotoshop.length; i++) {
        itemsNamedPhotoshop[i].style.display = "block";
    }
    for (let i = 0; i < itemsNamedOthers.length; i++) {
        itemsNamedOthers[i].style.display = "block";
    }
}

function brandClick(){
    all.classList.remove('on');
    brand.classList.add('on');
    webdev.classList.remove('on');
    illustration.classList.remove('on');
    photoshop.classList.remove('on');
    others.classList.remove('on');

    for (let i = 0; i < itemsNamedBrand.length; i++) {
        itemsNamedBrand[i].style.display = "block";
    }
    for (let i = 0; i < itemsNamedWebdev.length; i++) {
        itemsNamedWebdev[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedIllustration.length; i++) {
        itemsNamedIllustration[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedPhotoshop.length; i++) {
        itemsNamedPhotoshop[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedOthers.length; i++) {
        itemsNamedOthers[i].style.display = "none";
    }
}

function webdevClick(){
    all.classList.remove('on');
    brand.classList.remove('on');
    webdev.classList.add('on');
    illustration.classList.remove('on');
    photoshop.classList.remove('on');
    others.classList.remove('on');

    for (let i = 0; i < itemsNamedBrand.length; i++) {
        itemsNamedBrand[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedWebdev.length; i++) {
        itemsNamedWebdev[i].style.display = "block";
    }
    for (let i = 0; i < itemsNamedIllustration.length; i++) {
        itemsNamedIllustration[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedPhotoshop.length; i++) {
        itemsNamedPhotoshop[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedOthers.length; i++) {
        itemsNamedOthers[i].style.display = "none";
    }
}

function illustrationClick(){
    all.classList.remove('on');
    brand.classList.remove('on');
    webdev.classList.remove('on');
    illustration.classList.add('on');
    photoshop.classList.remove('on');
    others.classList.remove('on');

    for (let i = 0; i < itemsNamedBrand.length; i++) {
        itemsNamedBrand[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedWebdev.length; i++) {
        itemsNamedWebdev[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedIllustration.length; i++) {
        itemsNamedIllustration[i].style.display = "block";
    }
    for (let i = 0; i < itemsNamedPhotoshop.length; i++) {
        itemsNamedPhotoshop[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedOthers.length; i++) {
        itemsNamedOthers[i].style.display = "none";
    }
}

function photoshopClick(){
    all.classList.remove('on');
    brand.classList.remove('on');
    webdev.classList.remove('on');
    illustration.classList.remove('on');
    photoshop.classList.add('on');
    others.classList.remove('on');

    for (let i = 0; i < itemsNamedBrand.length; i++) {
        itemsNamedBrand[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedWebdev.length; i++) {
        itemsNamedWebdev[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedIllustration.length; i++) {
        itemsNamedIllustration[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedPhotoshop.length; i++) {
        itemsNamedPhotoshop[i].style.display = "block";
    }
    for (let i = 0; i < itemsNamedOthers.length; i++) {
        itemsNamedOthers[i].style.display = "none";
    }
}

function othersClick(){
    all.classList.remove('on');
    brand.classList.remove('on');
    webdev.classList.remove('on');
    illustration.classList.remove('on');
    photoshop.classList.remove('on');
    others.classList.add('on');

    for (let i = 0; i < itemsNamedBrand.length; i++) {
        itemsNamedBrand[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedWebdev.length; i++) {
        itemsNamedWebdev[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedIllustration.length; i++) {
        itemsNamedIllustration[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedPhotoshop.length; i++) {
        itemsNamedPhotoshop[i].style.display = "none";
    }
    for (let i = 0; i < itemsNamedOthers.length; i++) {
        itemsNamedOthers[i].style.display = "block";
    }
}