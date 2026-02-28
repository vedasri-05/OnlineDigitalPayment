function toggleCardDetails() {
    var paymentMethod = document.getElementById("payment_method").value;
    var cardFields = document.querySelectorAll('.hide-card-details'); 
    var cardFields1 = document.querySelectorAll('.hide-card-details1'); 

    // Hide all fields by default
    cardFields.forEach(element => element.style.display = "none");
    cardFields1.forEach(element => element.style.display = "none");

    if (paymentMethod === "credit_card" || paymentMethod === "debit_card") {
        cardFields.forEach(element => element.style.display = "block");
    } else if (paymentMethod === "phonepe_upi" || paymentMethod === "google_pay" || paymentMethod === "digital_wallet") {
        cardFields1.forEach(element => element.style.display = "block");
    }
}
