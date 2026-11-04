// ==================================
// DIG TRADING
// PREMIUM ACCOUNT PORTAL
// ==================================


// INITIALISATION DES ICÔNES

lucide.createIcons();


// ==================================
// PAYMENT MODAL
// ==================================

const paymentButton = document.getElementById("paymentButton");

const paymentModal = document.getElementById("paymentModal");

const closeModal = document.getElementById("closeModal");

const understandButton = document.getElementById("understandButton");


// OUVRIR LA FENÊTRE

paymentButton.addEventListener("click", function() {

    paymentModal.classList.add("active");

});


// FERMER LA FENÊTRE

closeModal.addEventListener("click", function() {

    paymentModal.classList.remove("active");

});


// BOUTON DE CONFIRMATION

understandButton.addEventListener("click", function() {

    paymentModal.classList.remove("active");

});


// FERMER EN CLIQUANT À L'EXTÉRIEUR

paymentModal.addEventListener("click", function(event) {

    if (event.target === paymentModal) {

        paymentModal.classList.remove("active");

    }

});


// FERMER AVEC LA TOUCHE ESCAPE

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        paymentModal.classList.remove("active");

    }

});


// ==================================
// PAYMENT CALCULATION
// ==================================

const totalAmount = 410;

const amountPaid = 300;

const remainingAmount = totalAmount - amountPaid;

const paymentPercentage = (amountPaid / totalAmount) * 100;


// VÉRIFICATION DES VALEURS

console.log("DIG TRADING - PAYMENT SUMMARY");

console.log("Total amount: $" + totalAmount);

console.log("Amount paid: $" + amountPaid);

console.log("Remaining balance: $" + remainingAmount);

console.log("Payment progress: " + paymentPercentage.toFixed(2) + "%");


// ==================================
// END OF SCRIPT
// ==================================