
//Checkbox nestajanje

function checkme() {
    var cb = document.getElementById("chk");
    var text = document.getElementById("kup");
    

    if (cb.checked == true) {
        text.style.display = "block";


    } else {
        text.style.display = "none";
    }
}
function checkme1() {
    var cb = document.getElementById("chk");
    var text = document.getElementById("B");


    if (cb.checked == true) {
        text.style.display = "block";


    } else {
        text.style.display = "none";
    }
}

function popust() {
    var b = document.getElementById("B");
    
    const h2 = document.querySelector("#header2");

  
    h2.innerText = "7.600,00 RSD";
  

}


function popust1() {
    var b = document.getElementById("B");

    const h2 = document.querySelector("#header2");


    h2.innerText = "7.200,00 RSD";
}