import { Link } from "react-router-dom";

function MovieCard({ movie, isFavorite = false, onToggleFavorite }) {
  const poster =
    movie?.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

  const handleFavClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (typeof onToggleFavorite === "function") onToggleFavorite(movie);
  };

  return (
    <div className="relative">
      <Link to={`/movie/${movie.imdbID}`} className="block">
        <div className="bg-[#1f1f1f] hover:bg-[#2a2a2a] transition-all duration-300 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-red-600/40 transform hover:-translate-y-1">
          <img
            src={poster}
            alt={movie.Title}
            className="w-full h-64 object-cover"
          />
          <div className="p-3 text-center">
            <h2 className="font-bold text-lg text-white">{movie.Title}</h2>
            <p className="text-sm text-gray-400">{movie.Year}</p>
          </div>
        </div>
      </Link>

      <button
        onClick={handleFavClick}
        aria-label={isFavorite ? "Remove favorite" : "Add favorite"}
        className={`absolute top-2 right-2 p-2 rounded-full text-white shadow-md transition-colors ${
          isFavorite ? "bg-red-600" : "bg-gray-700/70 hover:bg-red-600"
        }`}
      >
        {isFavorite ? "♥" : "♡"}
      </button>
    </div>
  );
}

export default MovieCard;
