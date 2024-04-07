
# FLATADANGO

## SA 03 W03 CODE CHALLENGE

Build date : **6<sup>th</sup> April 2024**

Author : **Keith Owino**

This document was created with Javascript

---

### Description

Here i implement a mini web app that demonstrates my understanding of the three pillars of JavaScript:-
  * Handling Events
  * Manipulating the DOM
  * Communicating with the Server.

I will be building out an application that allows a user to purchase movie tickets from the theater.

### Core Deliverables

As a user, i would like to be able to:-
 * See the first movie's details, including its poster, title, runtime, showtime, and available tickets when the page loads.

    ![Expected layout](https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-flatdango/flatdango-demo.gif)

    ```js

        function codeBlock(){
            // endpoint.
            const endpointA = "http://localhost:3000/films/1";

            // interaction.
            const filmTitle = document.getElementById("title");
            /* SOME MORE CODE HERE... */

            // fetch
            return fetch(endpointA)
                .then(res => res.json())
                .then((data) => {
                filmTitle.textContent = data.title;
                /* SOME MORE CODE HERE... */
                })
                /* SOME MORE CODE HERE... */
        };

    ```

 * See a menu of all movies on the left side of the page.
 * Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should see the number of available tickets decreasing on the frontend. I should not be able to buy a ticket if the showing is sold out.
 * Delete a film from the server. 
 * When a movie is sold out (when there are no available tickets remaining), indicate that the movie is sold out by changing the button text to "Sold Out". 

<br>
 
>Love this project? Buy me a coffee...
---

## Development
> Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

1. Fork the repository

    ```
    https://github.com/keithowino/sa-03-w03-code-challenge/fork
    ```
2. Create a new branch

    ```
    git checkout -b improve-feature
    ```
3. Make the appropriate changes in the files
4. Add changes to reflect the changes made
5. Commit your changes

    ```
    git commit -am 'Improve feature'
    ```
6. Push to the branch

    ```
    git push origin improve-feature
    ```
7. Create a Pull Request 


## Setup/ Installation Requirements
- To clone this repository to your machine do this in the root directory of where you would like to save the project. Before using this be sure which url link you should use, is it for HTTP or shh.

    ```
    git clone https://github.com/keithowino/sa-03-w03-code-challenge.git
    ```

- Open the repository.

    ```
    cd sa-03-w03-code-challenge
    ```

### Installation Medium
1. Steady Network.
2. Web-link
3. Github account.

## Bug / Feature Request

- If you find a bug that gave undesired results, kindly open an issue [here](https://github.com/keithowino/sa-03-w03-code-challenge/issues/new).

---
<br>

<p><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=keithowino&show_icons=true&locale=en&layout=compact" alt="Image showcasing the site author's github status on top languages used" /></p>

## Support and contact details

- Email - designsolutions1629@gmail.com 

## License
>The content of this site is licensed under the MIT license
Copyright (c) 2024.