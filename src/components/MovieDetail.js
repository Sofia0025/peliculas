import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=81706b66&i=${id}`)
      .then(response => setMovie(response.data))
      .catch(() => setMovie(null));
  }, [id]);

  if (!movie) return <div className="text-center">Cargando...</div>;

  return (
    <div className="movie-detail">
      <div className="card">
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Title}</h2>
        <p><strong>Sinopsis:</strong> {movie.Plot}</p>
        <div className="movie-info">
          <div>
            <p><strong>Año:</strong> {movie.Year}</p>
            <p><strong>Clasificación:</strong> {movie.Rated}</p>
            <p><strong>Estreno:</strong> {movie.Released}</p>
            <p><strong>Duración:</strong> {movie.Runtime}</p>
            <p><strong>Género:</strong> {movie.Genre}</p>
          </div>
          <div>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Guionistas:</strong> {movie.Writer}</p>
            <p><strong>Actores:</strong> {movie.Actors}</p>
            <p><strong>Idioma:</strong> {movie.Language}</p>
            <p><strong>País:</strong> {movie.Country}</p>
          </div>
        </div>
        <div>
          <p><strong>Premios:</strong> {movie.Awards}</p>
          <p><strong>Rating IMDb:</strong> {movie.imdbRating} ({movie.imdbVotes} votos)</p>
          <p><strong>Metascore:</strong> {movie.Metascore}</p>
          <p><strong>Temporadas:</strong> {movie.totalSeasons}</p>
          <p><strong>Calificación IMDb:</strong> {movie.Ratings[0]?.Value}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
