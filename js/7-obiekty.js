'use strict';


class Ogloszenie {
     constructor(tytul, opis, kategoria, status, cena){
      this.tytul = tytul;
        this.opis = opis;
        this.kategoria = kategoria;
        this.status = status;
        this.cena = cena;
    }
    pobierzTytul() {
        return this.tytul;
    }
}

var ogloszenie1 = new Ogloszenie("Sprzedam Opla", "kombi 2009r w dobrym stanie", "motoryzacja", "aktywne", 15000);

var ogloszenie2 = new Ogloszenie("Sprzedam Passata", "Igła, nie bity od Niemca", "motoryzacja", "nieaktywne", 5000);

var ogloszenie3 = new Ogloszenie("Mieszkanie M4", "Super lokalizacja", "Nieruchomości", "aktywne", 500000);

//console.log(ogloszenie1);
//console.log(ogloszenie2);
//console.log(ogloszenie3);


console.log(ogloszenie2.tytul);  //albo:
console.log(ogloszenie2.pobierzTytul);  //przygotowalismy metodę wiec za jej pomocą mozemy sie do niej odwolac




//--------



var arr = [
    {tytul: "W pustyni i w puszczy", stan : true},
    {tytul: "Rura", stan : false},
];

for (var i =0; i< arr.length; i++ ){
//    console.log(arr[i].tytul);
    
    if (arr[i].stan == true ) {
        console.log("huraa");
    }
    else {
        console.log("nie huraa");
    }
}























