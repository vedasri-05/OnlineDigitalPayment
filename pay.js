function toggleCardDetails() {
    var paymentMethod = document.getElementById("payment_method").value;
    var cardDetails = document.getElementById("card_details");
    var walletDetails = document.getElementById("wallet_details");

    if (paymentMethod === "credit_card" || paymentMethod === "debit_card") {
        cardDetails.style.display = "block";
        walletDetails.style.display = "none";
    } else if (paymentMethod === "digital_wallet" || paymentMethod === "phonepe_upi" || paymentMethod === "google_pay") {
        cardDetails.style.display = "none";
        walletDetails.style.display = "block";
    } else {
        cardDetails.style.display = "none";
        walletDetails.style.display = "none";
    }
}

