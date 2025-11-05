import { Link } from "react-router-dom";

function FavoriteCard({ movie, onRemove }) {
  const poster =
    movie?.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden mb-4 md:mb-6">
      <div className="flex flex-col md:flex-row items-start">
        <img
          src={poster}
          alt={movie.Title}
          className="w-full md:w-48 lg:w-56 h-auto object-cover"
        />

        <div className="p-4 flex-1">
          <h3 className="text-xl font-bold mb-1">{movie.Title}</h3>
          <p className="text-sm text-gray-600 mb-2">
            {movie.Year} • {movie.Type}
          </p>
          <p className="text-gray-700 mb-4 truncate">
            {movie.Plot || movie.Title}
          </p>

          <div className="flex items-center space-x-3">
            <Link
              to={`/movie/${movie.imdbID}`}
              className="text-sm bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
            >
              Details
            </Link>

            <button
              onClick={() => onRemove && onRemove(movie)}
              className="text-sm bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
