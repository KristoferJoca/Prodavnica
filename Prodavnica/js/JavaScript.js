
//Dugme email
function text() {
    alert('Hvala vam na prijavi, Obavestićemo vas o našim novim proizvodima');
}
//dugme naruci
function text11() {
    alert('Igra uspešno naručena');
}



//Dugme za kupon
function text1() {
    alert('Šifra vašeg kupona je ASDASF');
}

//Dugme za Kontakt
function text2() {
    alert('Vaša poruka je uspesno poslata');
}
//Pretraga
function myFunction() {
    // Deklarisanje promenljivih
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-item');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop kroz sve na listi, i sakri ono sto se ne poklapa u pretrazi
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h2")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


