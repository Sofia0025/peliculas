import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://www.omdbapi.com/?apikey=81706b66&s=popular')
      .then(response => setMovies(response.data.Search || []))
      .catch(() => setMovies([]));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      navigate(`/search/${search}`);
    }
  };

  return (
    <div className="home-container">
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar película..."
        />
        <button type="submit">🔍</button>
      </form>
      <div className="movies-list">
        {movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
