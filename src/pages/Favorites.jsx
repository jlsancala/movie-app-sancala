import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavs);
  }, []);

  const removeFavorite = (movie) => {
    const updated = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mt-6 mb-4">⭐ Your Favorite Movies</h2>
      {favorites.length > 0 ? (
        <MovieList
          movies={favorites}
          favorites={favorites}
          onToggleFavorite={removeFavorite}
          x
        />
      ) : (
        <p className="text-gray-600">You haven’t added any favorites yet.</p>
      )}
    </div>
  );
}

export default Favorites;
