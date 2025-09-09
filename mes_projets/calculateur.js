document.getElementById("formPret").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Récupération des valeurs
    let P = parseFloat(document.getElementById("montant").value);
    let tauxAnnuel = parseFloat(document.getElementById("taux").value);
    let années = parseInt(document.getElementById("années").value);

    // Validation basique
    if (isNaN(P) || P <= 0) {
        alert("Veuillez entrer un montant de prêt valide.");
        return;
    }
    if (isNaN(tauxAnnuel) || tauxAnnuel <= 0) {
        alert("Veuillez entrer un taux d'intérêt valide.");
        return;
    }
    if (isNaN(années) || années <= 0) {
        alert("Veuillez entrer une durée valide.");
        return;
    }

    // Calculs
    let r = tauxAnnuel / 100 / 12; // taux mensuel
    let n = années * 12;            // nombre total de paiements

    // Formule de calcul
    let M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    // Affichage du résultat
    document.getElementById("result").textContent = 
        "Votre paiement mensuel est : " + M.toFixed(2) + " unités monétaires.";
});
