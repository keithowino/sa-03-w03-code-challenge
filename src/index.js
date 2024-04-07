// Your code here

function facilitateInt(){
  // First movie endpoint url.
  const endpointA = "http://localhost:3000/films/1";

  // The first film DOM interactions.
  const filmTitle = document.getElementById("title");
  const filmRuntime = document.getElementById("runtime");
  const filmBio = document.getElementById("film-info");
  const filmShowtime = document.getElementById("showtime");
  const filmTicketNum = document.getElementById("ticket-num");
  const purchaseTicket = document.getElementById("buy-ticket");

  // init fetch
  return fetch(endpointA)
    .then(res => res.json())
    .then((data) => {
      filmTitle.textContent = data.title;
      filmRuntime.textContent = data.runtime + " minutes";
      filmBio.textContent = data.description;
      filmShowtime.textContent = data.showtime;
      filmTicketNum.textContent = (data.capacity - data.tickets_sold);
    })
    .catch(error => alert(error.message));
};

document.addEventListener("DOMContentLoaded", facilitateInt);