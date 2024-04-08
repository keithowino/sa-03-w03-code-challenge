// Your code here

/*

Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should see the number of available tickets decreasing on the frontend. I should not be able to buy a ticket if the showing is sold out (if there are 0 tickets available). A persistence mechanism is needed for this feature. Read the following paragraph for more details.

When a ticket is purchased, you need to do the following

Persist the updated number of tickets_sold on the server. Remember, the frontend shows the number of available tickets based on the tickets_sold and the capacity, so only the tickets_sold should be updated on the backend when a ticket is purchased. You will need to make a request that follows this structure:

POST the new ticket to the tickets endpoint in the database

*/

function firstMovieDetails(){
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
  fetch(endpointA)
    .then(res => res.json())
    .then((data) => {
      filmTitle.textContent = data.title;
      filmRuntime.textContent = data.runtime + " minutes";
      filmBio.textContent = data.description;
      filmShowtime.textContent = data.showtime;
      filmTicketNum.textContent = (data.capacity - data.tickets_sold);
    })
    .catch(error => alert(error.message));

  purchaseTicket.addEventListener("click", (e) => {
    if(parseInt(filmTicketNum.innerHTML) >= 1){
      filmTicketNum.innerHTML = parseInt(filmTicketNum.innerHTML) - 1;
    };

    // let ticketNum = parseInt(filmTicketNum.innerHTML);
    // if(ticketNum >= 1){
    //   filmTicketNum.innerHTML = (ticketNum - 1);
    // }else if(ticketNum < 1){
    //   purchaseTicket.innerHTML = "Sold Out";
    // };
  })
};

function movieMenu(){
  const endpointB = "http://localhost:3000/films";

  const folder = document.getElementById("films")

  return fetch(endpointB)
    .then(res => res.json())
    .then((data) => {
      let pickTitles = (value) => {
        let li = document.createElement("li");
        li.classList.add("film", "item");
        li.textContent = value.title;

        folder.appendChild(li);
      };

      data.forEach(pickTitles);

    })
    .catch(error => alert(error.message))
};

function facilitateInt(){
  firstMovieDetails()
  movieMenu()
};

document.addEventListener("DOMContentLoaded", facilitateInt);