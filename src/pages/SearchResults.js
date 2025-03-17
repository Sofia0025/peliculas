import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import './SearchResults.css';

const SearchResults = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://www.omdbapi.com/?apikey=81706b66&s=${query}`)
      .then(response => {
        setMovies(response.data.Search || []);
        setLoading(false);
      })
      .catch(() => {
        setMovies([]);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="search-results-container">
      <h2>Resultados para: "{query}"</h2>
      {loading ? <p>Cargando...</p> : (
        <div className="movies-list">
          {movies.length > 0 ? movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />) : <p>No se encontraron resultados.</p>}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
    