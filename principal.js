/*
Type : fonction
Nom : nombre_plus_ou_moins
Entrées : monNombre entier (nombre dont on veut connaitre si il est plus grand ou plus petit que le chiffre généré aléatoirement)
Sortie : iresultat (si le chiffre tapé est plus petit ou plus grand)
*/

function generer_mon_nombre_aleatoire() {
    var iNombre = Math.floor(Math.random());
    return iNombre;
}
function compare() {
    var MonNombre = parseInt(document.getElementById("MonNombre").value);
    if (iNombre > MonNombre) {
    document.getElementById("resultat").innerText += MonNombre +" est trop petit" +"\n"; 
    }
}

var action_au_click = function () {
    var inombre_aleatoire_entre_0_et_1 = Math.random(); //entre 0 et 1
    var inombre_aleatoire_entre_0_et_99_avec_virgule = inombre_aleatoire_entre_0_et_1 * 100; // entre 0 et 99
    var inombre_aleatoire_entre_0_et_99_sans_virgule = Math.floor(inombre_aleatoire_entre_0_et_99_avec_virgule); // idem sans la virgule
    document.getElementById("resul").innerText += "Nombre généré :  "+ inombre_aleatoire_entre_0_et_99_sans_virgule+ "\n";
};

var btnDOM = document.getElementById('btnDOM');
btnDOM.addEventListener("click", action_au_click, false);