// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Create a variable to hold the list of movies for the selected genre
  let movieList = [];

  // Add movie titles directly to movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    // Comedy movies
    movieList.push("The Mask");
    movieList.push("Superbad");
    movieList.push("Dumb and Dumber");
    movieList.push("Home Alone");
  } else if (selectedGenre === "Action") {
    // Action movies
    movieList.push("Die Hard");
    movieList.push("Mad Max: Fury Road");
    movieList.push("John Wick");
    movieList.push("The Avengers");
  } else if (selectedGenre === "Drama") {
    // Drama movies
    movieList.push("Forrest Gump");
    movieList.push("The Shawshank Redemption");
    movieList.push("The Godfather");
    movieList.push("A Beautiful Mind");
  } else if (selectedGenre === "Sci-Fi") {
    // Sci-Fi movies
    movieList.push("Inception");
    movieList.push("The Matrix");
    movieList.push("Interstellar");
    movieList.push("Blade Runner");
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}`;
});
