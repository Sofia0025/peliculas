import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
      </Link>
    </div>
  );
};

export default MovieCard;

