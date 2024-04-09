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

  fetch(endpointA)
    .then(response => response.json())
    .then(data => {
      currentMovie(data);
      console.log(data);
    })
    .catch(error => alert(error.message));

  function currentMovie(movie){
    filmTitle.textContent = movie.title;
    filmRuntime.textContent = movie.runtime + " minutes";
    filmBio.textContent = movie.description;
    filmShowtime.textContent = movie.showtime;
    filmTicketNum.textContent = (movie.capacity - movie.tickets_sold);

      purchaseTicket.addEventListener("click", (e) => {
        buyTicket(movie);
      })
  };

  function buyTicket(movie){
    if(movie.capacity > movie.tickets_sold){
      movie.tickets_sold++;
      filmTicketNum.textContent = (movie.capacity - movie.tickets_sold);
      updateMovieDetails(movie);
    };
  };

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

function updateMovieDetails(movieObj){
  fetch(`http://localhost:3000/films/${movieObj.id}`, {
    method : "PATCH", 
    header : {
      "content-type" : "application/json"
    }, 
    body : JSON.stringify(movieObj)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => alert(error.message));
};

function facilitateInt(){
  firstMovieDetails()
  movieMenu()
};

document.addEventListener("DOMContentLoaded", facilitateInt);