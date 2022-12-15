let header = document.querySelector('header');

const date = new Date();
let year = date.getFullYear();
document.getElementById("date").innerHTML = "2019 - " + year;
document.getElementById("dateFooter").innerHTML = "2019 - " + year;

let calendar = date.getMonth();

console.log({calendar});


let snowflakes = document.getElementById("winterCSS");
let snowflakesHTML = document.getElementById("snowflakes");

snowflakes.disabled = true;
snowflakesHTML.style.display = "none";

if(calendar == "11" || calendar == "0"){
    header.style.background = "url(https://cdn4.vectorstock.com/i/1000x1000/62/58/winter-night-vector-4226258.jpg)";
    snowflakes.disabled = false;
    snowflakesHTML.style.display = "block";
}
//header-background
// var imgCount = 4;
//     var dir = 'assets/media/decoration/covers/';
//     var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
//     var images = new Array
//             images[1] = "wineweb.jpg",
//             images[2] = "wineweb.jpg",
//             images[3] = "wineweb.jpg",
//             images[4] = "wineweb.jpg",
//             // header.style.background = "url(" + dir + images[randomCount] + "), #fb2477";
//             header.style.background = "url(https://russiannobility.org/wp-content/uploads/2022/03/Flag_of_Ukraine.svg.png), #fb2477";
