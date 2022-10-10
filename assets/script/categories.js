const all = document.getElementById('all');
const brand = document.getElementById('brand');
const webdev = document.getElementById('webdev');
const illustration = document.getElementById('illustration');
const photoshop = document.getElementById('photoshop');
const others = document.getElementById('others');
const all2 = document.getElementById('all2');
const brand2 = document.getElementById('brand2');
const webdev2 = document.getElementById('webdev2');
const illustration2 = document.getElementById('illustration2');
const photoshop2 = document.getElementById('photoshop2');
const others2 = document.getElementById('others2');

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
    
    all2.classList.add('on');
    brand2.classList.remove('on');
    webdev2.classList.remove('on');
    illustration2.classList.remove('on');
    photoshop2.classList.remove('on');
    others2.classList.remove('on');

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

    all2.classList.remove('on');
    brand2.classList.add('on');
    webdev2.classList.remove('on');
    illustration2.classList.remove('on');
    photoshop2.classList.remove('on');
    others2.classList.remove('on');

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
    
    all2.classList.remove('on');
    brand2.classList.remove('on');
    webdev2.classList.add('on');
    illustration2.classList.remove('on');
    photoshop2.classList.remove('on');
    others2.classList.remove('on');

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

    all2.classList.remove('on');
    brand2.classList.remove('on');
    webdev2.classList.remove('on');
    illustration2.classList.add('on');
    photoshop2.classList.remove('on');
    others2.classList.remove('on');

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

    all2.classList.remove('on');
    brand2.classList.remove('on');
    webdev2.classList.remove('on');
    illustration2.classList.remove('on');
    photoshop2.classList.add('on');
    others2.classList.remove('on');

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

    all2.classList.remove('on');
    brand2.classList.remove('on');
    webdev2.classList.remove('on');
    illustration2.classList.remove('on');
    photoshop2.classList.remove('on');
    others2.classList.add('on');

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