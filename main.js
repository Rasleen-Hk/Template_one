

let btnUp = document.getElementById("up");
let CV = document.getElementById("download");
let home = document.getElementById("home");
function erreur() {
    window.location.replace("cv.html");
}
function scrollUp(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
};

function homePage(){
    window.location.replace("index.html");
}
