var racun = {
    datum: new Date(),
    kupac: null,
    stavke: [

    ]
};

var ukupnoZaPlacanje = 0;

function popuniProizvode() {
    document.getElementById("datum").innerHTML = racun.datum;
    proizvodi.forEach(p => {
        document.getElementById("proizvodi").innerHTML +=
            `<option value="${p.naziv}">${p.naziv}</option>`;
    });
}

function dodajStavku() {
    var forma = document.forms[0].elements;
    var proizvod = forma.proizvodi.value;
    var kolicina = forma.kolicina.value;
    var cijena = 0;
    proizvodi.forEach(p => {
        if (p.naziv == proizvod) {
            cijena = p.cijena;
        }
    });
    var ukupno = parseFloat((kolicina * cijena).toFixed(2));
    racun.stavke.push({
        "proizvod": proizvod,
        "kolicina": kolicina,
        "cijena": cijena,
        "iznos": ukupno
    });
    document.getElementById("stavke").innerHTML +=
        `<p>Proizvod ${proizvod} Cijena ${cijena} 
            Kolicina ${kolicina} Iznos ${ukupno}</p>`;
    document.forms[0].reset();
    ukupnoZaPlacanje += ukupno;
    document.getElementById("ukupno").innerHTML = ukupnoZaPlacanje;
}

function sacuvajRacun() {
    racun.kupac = document.getElementById("kupac").value;
    localStorage.setItem("racun", JSON.stringify(racun));
    alert("Racun sacuvan");
    //ponistavamo sve prethodno sacuvane podatke
    document.getElementById("kupac").value = "";
    document.getElementById("stavke").innerHTML = "";
    document.getElementById("ukupno").innerHTML = "";
    ukupnoZaPlacanje = 0;
    racun = {
        kupac: 0,
        datum: new Date(),
        stavke: []
    };
}