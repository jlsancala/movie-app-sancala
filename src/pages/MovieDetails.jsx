import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = `${import.meta.env.VITE_OMDB_API_URL}/?apikey=${
  import.meta.env.VITE_OMDB_API_KEY
}`;

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${API_URL}&i=${id}&plot=full`);
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p className="p-6">Loading...</p>;

  const imdbTrailerLink = `https://www.imdb.com/title/${movie.imdbID}/videogallery/`;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        ⬅ Back
      </button>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/200"
            }
            alt={movie.Title}
            className="w-64 h-auto rounded-md mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
            <p className="text-gray-700 mb-1">
              <strong>Year:</strong> {movie.Year}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Director:</strong> {movie.Director}
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Plot:</strong> {movie.Plot}
            </p>

            <a
              href={imdbTrailerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-all"
            >
              🎬 Watch Trailer on IMDb
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
