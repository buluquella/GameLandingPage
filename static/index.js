let topButton = document.getElementById("scrollTop");
let navBar = document.getElementById("nav-bar");
let coffee = document.getElementById("coffee");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var bodyH = document.getElementById("landing-page");
    var bodyW = document.getElementById("landing-page");

    var sclientHeight = bodyH.clientHeight;
    var sclientWidth = bodyW.clientWidth;

    if (document.body.scrollTop > (sclientHeight-2) || document.documentElement.scrollTop > (sclientHeight-2)) {
        topButton.style.display = "block";
        navBar.style.top = "-10%"
    } else {
        topButton.style.display = "none";
        navBar.style.top = "0%"
    }
    if (document.body.scrollTop > (sclientHeight*2)-10 || document.documentElement.scrollTop > (sclientHeight*2)-10) {
        coffee.style.bottom = "0"
    } else {
        coffee.style.bottom = "-10%"
    }
}


var widthForty = (sclientWidth*(40/100));
console.log(widthForty+"px")

bigSwiper = document.getElementsByClassName("swiper-slide")
bigSwiper.style.width = (widthForty+"px");
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}