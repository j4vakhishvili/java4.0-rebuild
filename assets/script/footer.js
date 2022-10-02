//You can CHANGE thoose
let nameOne = "YouTube";
let nameTwo = "Dribbble";
let nameThree = "Facebook";

var openUrlOne = 'https://www.youtube.com/j4vakhishvili';
var openUrlTwo = 'https://dribbble.com/J4vakhishvili';
var openUrlThree = 'https://www.facebook.com/J4vakhishvili/';


//Do not tuch them!!!
const socialNameOne = document.getElementById("socialNameOne");
const socialNameTwo = document.getElementById("socialNameTwo");
const socialNameThree = document.getElementById("socialNameThree");

const socialLinkOne = document.getElementById("socialLinkOne");
const socialLinkTwo = document.getElementById("socialLinkTwo");
const socialLinkThree = document.getElementById("socialLinkThree");

socialNameOne.innerHTML = nameOne; 
socialLinkOne.innerHTML = nameOne;
socialNameTwo.innerHTML = nameTwo; 
socialLinkTwo.innerHTML = nameTwo;
socialNameThree.innerHTML = nameThree; 
socialLinkThree.innerHTML = nameThree;

function urlOne(){
    window.open(openUrlOne, '_blank');
}
function urlTwo(){
    window.open(openUrlTwo, '_blank');
}
function urlThree(){
    window.open(openUrlThree, '_blank');
}