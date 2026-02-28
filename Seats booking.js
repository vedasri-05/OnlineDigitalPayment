let seats = document.querySelector(".all-seats");
for (var i = 0; i < 59;i++){
    let randint = Math.floor(Math.random() * 2);
    let booked = randint === 1 ? "booked" : "";
    seats.insertAdjacentHTML(
    "beforeend",
    '<input type="checkbox" name="tickets" id="s' +
      (i+2) + 
      '" /><label for="s' +
      (i+2) +
      '" class="seat ' +
      booked +
      '"></label>'
    );
}
let tickets = seats.querySelectorAll("input");
tickets.forEach((ticket)=>{
    ticket.addEventListener("change", ()=>{
        let amountText = document.querySelector(".amount").innerHTML;
        let amount = parseInt(amountText.replace("₹", "") || 0);
        let count = Number(document.querySelector(".count").innerHTML);

        if(ticket.checked){
            count+=1;
            amount+=250;
        }
        else{
            count-=1;
            amount-=250;
        }
        document.querySelector(".amount").innerHTML = "₹" + amount;
        document.querySelector(".count").innerHTML = count;
    });
});
function proceed() {
    window.location.href = "payment.html";
  }