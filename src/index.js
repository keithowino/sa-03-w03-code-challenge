// Your code here

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