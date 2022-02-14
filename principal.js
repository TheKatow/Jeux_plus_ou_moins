let inombre;
let iCpt = 0;

document.getElementById('resultat').style.display = 'none'; // au début la zone Resultat est cachée
document.getElementById('btnJouer').style.display = 'block'; // montre le bouton Jouer
document.getElementById('btnValidez').style.display = 'none'; // cache le bouton Jouer

function generation_nombre_aleatoire() {
    inombre = Math.floor(Math.random() * 99) + 1;
    document.getElementById('resultat').style.display = 'block'; // affiche la div resultat
    document.getElementById('btnJouer').style.display = 'none'; // cache le bouton Jouer
    document.getElementById('btnValidez').style.display = 'block'; // cache le bouton Jouer
    document.getElementById('resultat').innerHTML = "";
    document.getElementById('MonNombre').value = "";
    console.log(inombre);
    return inombre
};

function comparaison() {
    let iNombreSaisie = parseInt(document.getElementById('MonNombre').value);
    document.getElementById('MonNombre').value = "";
    iCpt++; // on a joué un tour de plus
    if (iNombreSaisie == inombre) {
        document.getElementById("resultat").innerText += "Bravo c'était bien : " + inombre + " Vous avez trouvé en " + iCpt + " coup(s)" + "\n";
        document.getElementById('btnJouer').style.display = 'block'; // affiche le bouton Jouer pour rejouer
        document.getElementById('btnValidez').style.display = 'none';
    } else if (iNombreSaisie > inombre) {
        document.getElementById("resultat").innerText += "C'est plus petit que : " + iNombreSaisie + "\n";
    }
    else {
        document.getElementById("resultat").innerText += "C'est plus grand que : " + iNombreSaisie + "\n";
    }
}

var btnJouer = document.getElementById('btnJouer');
btnJouer.addEventListener("click", generation_nombre_aleatoire, false);

var btnValidez = document.getElementById('btnValidez');
btnValidez.addEventListener("click", comparaison, false);