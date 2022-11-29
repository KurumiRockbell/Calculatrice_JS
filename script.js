/* Fonction pour clear et remettre a 0 */

function forclear() {
    document.getElementById("output").innerHTML = "0";
}


/* Fonction pour ne pas afficher le zero des le debut 0 */
function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}

/* Fonction pour diviser par 100 en cas de division/percentage */
function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

/* Fonction pour afficher le chiffre sur lequel nous avons appuyer */
function fordisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
}

/* Fonction pour calculer et afficher le resultat */
function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}
