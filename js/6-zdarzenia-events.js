 'use strict';
var secondLink = document.getElementsByTagName("a")[1];

function alarm(e){
   
    e.preventDefault();
    console.log("Kliknięto link, hyc");
    console.log(e.type);
}

//secondLink.onclick = alarm;

//secondLink.addEventListener('click', alarm);
////przekierowuje na linka
//
//secondLink.removeEventListener('click', alarm);

//usuwa zdarzenie

var mainHeader = document.getElementById("main-header");

function zmianaRozmiaru(e) {
    if (e.type == "mouseover") {
        mainHeader.style.fontSize = "70px";
    }
    else {
        mainHeader.style.fontSize = "inherit";
    }
}

mainHeader.addEventListener("mouseover", zmianaRozmiaru);
mainHeader.addEventListener("mouseout", zmianaRozmiaru);