// script.js
document.addEventListener("DOMContentLoaded", function() {
  const prixItems = {
    biere: 2.10,
    coca: 2.00,
    eau: 2.00,
    choucroute: 5.00
  };

  // Sélection des éléments de l'interface
  const quantiteBiere = document.getElementById("biere");
  const quantiteCoca = document.getElementById("coca");
  const quantiteEau = document.getElementById("eau");
  const quantiteChoucroute = document.getElementById("choucroute");

  const totalBiere = document.getElementById("total-biere");
  const totalCoca = document.getElementById("total-coca");
  const totalEau = document.getElementById("total-eau");
  const totalChoucroute = document.getElementById("total-choucroute");

  const totalGeneral = document.getElementById("total-general");

  // Fonction pour recalculer le total par élément
  function recalculerTotal() {
    const biereTotal = parseInt(quantiteBiere.value) * prixItems.biere;
    const cocaTotal = parseInt(quantiteCoca.value) * prixItems.coca;
    const eauTotal = parseInt(quantiteEau.value) * prixItems.eau;
    const choucrouteTotal = parseInt(quantiteChoucroute.value) * prixItems.choucroute;

    // Mise à jour des totaux individuels
    totalBiere.textContent = `${biereTotal.toFixed(2)}€`;
    totalCoca.textContent = `${cocaTotal.toFixed(2)}€`;
    totalEau.textContent = `${eauTotal.toFixed(2)}€`;
    totalChoucroute.textContent = `${choucrouteTotal.toFixed(2)}€`;

    // Calcul du total général
    const total = biereTotal + cocaTotal + eauTotal + choucrouteTotal;
    totalGeneral.textContent = `${total.toFixed(2)}€`;
  }

  // Écouter les changements dans les quantités
  quantiteBiere.addEventListener("input", recalculerTotal);
  quantiteCoca.addEventListener("input", recalculerTotal);
  quantiteEau.addEventListener("input", recalculerTotal);
  quantiteChoucroute.addEventListener("input", recalculerTotal);

  // Initialisation
  recalculerTotal();
});
