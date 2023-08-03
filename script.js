// I will use the fetch() function to make
//requests from the API.

//This should return a promise that wither
//the request was rejected or completed.

fetch('https://www.freetogame.com/api/games')
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data1 = "";
    completedata.map((values) => {
      data1 += ` <div class="games">
        <h1 class="title">${values.title}</h1>
        <img src=${values.thumbnail} alt="img" class="images">
        <p class="description">${values.short_description}</p>
        <p class="category">Genre: ${values.genre}</p>
        <p class="developer">Dev: ${values.developer}</p>
        <p class="date">Release Date: ${values.release_date}</p>
        <p class="link">${values.freetogame_profile_url}</p>
      </div>`;
    });

    document.getElementById("featured-games").innerHTML = data1;

    // Function to perform the search and display results from the API
    function performSearch(searchTerm) {
      const filteredGames = completedata.filter((game) => {
        return game.title.toLowerCase().includes(searchTerm.toLowerCase());
      });

      let searchData = "";
      filteredGames.map((values) => {
        searchData += ` <div class="games">
          <h1 class="title">${values.title}</h1>
          <img src=${values.thumbnail} alt="img" class="images">
          <p class="description">${values.short_description}</p>
          <p class="category">Genre: ${values.genre}</p>
          <p class="developer">Dev: ${values.developer}</p>
          <p class="date">Release Date: ${values.release_date}</p>
          <p class="link">${values.freetogame_profile_url}</p>
        </div>`;
      });

      if (searchData === "") {
        searchData = "<p>No results found.</p>";
      }

      document.getElementById("featured-games").innerHTML = searchData;
    }

    // Event listener for the search button click
    document.getElementById("searchButton").addEventListener("click", function () {
      const searchTerm = document.getElementById("searchInput").value;
      performSearch(searchTerm);
    });

    // Event listener for the enter key press in the search input field
    document.getElementById("searchInput").addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        const searchTerm = document.getElementById("searchInput").value;
        performSearch(searchTerm);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });








