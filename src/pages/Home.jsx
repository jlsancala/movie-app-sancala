import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const API_URL = "https://www.omdbapi.com/?apikey=4ecf9aa";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Avengers");
  const [favorites, setFavorites] = useState([]);

  const fetchMovies = async () => {
    try {
      if (!searchTerm || searchTerm.trim() === "") {
        setMovies([]);
        return;
      }
      const response = await fetch(
        `${API_URL}&s=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      if (data && data.Response === "True") {
        setMovies(data.Search || []);
      } else {
        setMovies([]);
        // optionally: console.warn(data?.Error || 'No results');
      }
    } catch (err) {
      console.error("Failed to fetch movies:", err);
      setMovies([]);
    }
  };

  useEffect(() => {
    fetchMovies();
    const savedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavs);
  }, []);

  const toggleFavorite = (movie) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      updatedFavorites = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    } else {
      updatedFavorites = [...favorites, movie];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="flex flex-col items-center w-full">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={fetchMovies}
      />
      <MovieList
        movies={movies}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default Home;
