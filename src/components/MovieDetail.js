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

  if (!movie) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
    </div>
  );
};

export default MovieDetail;
