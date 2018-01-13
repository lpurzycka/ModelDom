'use strict';
var istniejacyWezel = document.getElementById("parFirst").children[2];

//console.log( istniejacyWezel);
//
//var nowyElement = document.createElement("p");
//
//var nowyTekst = document.createTextNode("To jest nowy akapit, który dodalismy na strone");
//
//nowyElement.appendChild( nowyTekst);
//
////tekst widonczy na stronie
//    
//istniejacyWezel.appendChild(nowyElement);
//
////element widoczny na stronie ale jeszcze bez tekstu, wymaga uzupełnienia
//
//
//istniejacyWezel.removeChild( nowyElement);

//usuwa element ze strony


////wstawianie element  (paragrafu)przed linkiem:
//var nowyElement = document.createElement("p");
//var link = document.querySelectorAll('.link')[2];
////console.log(link);
//
////pobieranie rodzica linka, wywolujemy metodę wstaw przed linkiem nasz nowy element
//link.parentElement.insertBefore(nowyElement, link);



//Dodaj znacznik <br> po każdym linku i usuń z nich atrybut klasy

var wszystkieLinki = document.querySelectorAll("a");
//albo: var wszystkieLinki =document.getElementsByTagName("a");

for (var i =0; i< wszystkieLinki.length; i++){
    var br = document.createElement("br");
    wszystkieLinki[i].parentElement.insertBefore(br, wszystkieLinki[i].nextElementSibling );
    wszystkieLinki[i].removeAttribute("class");
}































