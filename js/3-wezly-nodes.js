'use strict';
var pierwszyDiv = document.getElementById("parFirst");

//albo:
//var pierwszyDiv = document.querySelector("#parFirst");

//var rodzicDiva = pierwszyDiv.parentElement;
//console.log(rodzicDiva);

//var dzieciDiva = pierwszyDiv.childNodes;
//console.log(dzieciDiva);


//childNodes-pobiera również przestrzeń czli białe znaki, czli spacje miedz wierszami


//zwraca nam białe znaki:
//var dzieciDiva = pierwszyDiv.childNodes[0];
//console.log(dzieciDiva); 

//zwraca wszsystkie element,bez tekstu-bez białch znaków, 
//nie można przechodzić po tablicy w pętli ForEach 
//var dzieciDiva = pierwszyDiv.children;
//console.log(dzieciDiva); 


//zwróci pierwszy element (czyli tekst-biały znak):
//var dzieciDiva = pierwszyDiv.firstChild;
//console.log(dzieciDiva); 

//zwróci ostatni element w divie parFirst, w tym  przypadku tekst białe znaki
//var dzieciDiva = pierwszyDiv.lastChild;
//console.log(dzieciDiva); 



//Rodzeństwo:

//var rodzenstwoNastepne = pierwszyDiv.nextSibling;
//console.log(rodzenstwoNastepne);

//zwróci tekst:
//var rodzenstwoPoprzednie = pierwszyDiv.previousSibling;
//console.log(rodzenstwoPoprzednie);


//zwróci poprzednie rodzeńtwo jakie jest w htmlu
//var rodzenstwoPoprzednie = pierwszyDiv.previousElementSiblingSibling;
//console.log(rodzenstwoPoprzednie);


//Dzieci:

//var dzieciElementu = pierwszyDiv.childNodes;
//dzieciElementu.forEach(  function( element) {
// console.log( element);
//    });
//
//
//var dzieciElementu2 = pierwszyDiv.children;
//
//for (var i=0; i < dzieciElementu2.length; i++) {
//    console.log(dzieciElementu2[i]);
//}

//typ danych wezlow:
var dzieciElementu = pierwszyDiv.childNodes;
dzieciElementu.forEach(  function( element) {
 console.log( "nodeType = " + element.nodeType );
    });

































