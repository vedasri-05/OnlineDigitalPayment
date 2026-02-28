function bookTicket(movie) {
  document.getElementById("movies").style.display = "none";
  document.getElementById("booking").style.display = "block";
  document.getElementById("selectedMovie").innerHTML = `<h3>Selected Movie: ${movie}</h3>`;
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const seats = document.getElementById("seats").value;
  alert(`Booking confirmed for ${name} for ${seats} seats`);
  location.reload();
});
