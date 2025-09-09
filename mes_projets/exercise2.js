
function calculerRacine() {
        let nombre = document.getElementById("saisieNbre").value; //Récuperer le input
        let value = parseFloat(nombre); //conversion en Float

        if(isNaN(value)){
            document.getElementById("sqrt").innerHTML = `Saisir un nbre valide`;
            return;
        } 
         if (value<0) {
            document.getElementById("sqrt").innerHTML = `Impossible de calculer une racine négative`;
            return;
        }

        document.getElementById("sqrt").innerHTML = `La racine carrée de ${value} est : ${Math.sqrt(value).toFixed(2)}`;
    }

function decimalProche() {
    let nbre = document.getElementById("saisieNbre").value; //Récuperer le input
    let val = parseFloat(nbre); //conversion en Float
    let dec = Math.round(val);
    document.getElementById("dec").innerHTML = `Décimal le plus proche : ${dec}`;   
}
    
function Aleatoire() {
    let aleatoire = Math.random().toFixed(2)*100;
    document.getElementById('aleatoire').innerHTML = `Nombre aléatoire : ${aleatoire}`;
}

// function Aleatoiree() {
//     let aleatoire = Math.random()*100;
//     document.getElementById('aleatoire').innerHTML = `Nombre aléatoire : ${aleatoire}`;
// }

