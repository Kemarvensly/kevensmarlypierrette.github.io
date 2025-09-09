function afficherHeure() {
  const maintenant = new Date();

  // Récupère heures, minutes, secondes
  let heures = maintenant.getHours();
  let minutes = maintenant.getMinutes();
  let secondes = maintenant.getSeconds();

  // Formater avec 2 chiffres (ex: 08 au lieu de 8)
  heures = heures.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  secondes = secondes.toString().padStart(2, "0");

  // Construire l'heure HH:MM:SS
  const heureFormat = `${heures}:${minutes}:${secondes}`;

  // Afficher dans l'input
  document.getElementById("heure").value = heureFormat;

  // Relancer la fonction après 1 seconde
  setTimeout(afficherHeure, 1000);
}

// Lancer la fonction au chargement
afficherHeure();
