import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from 'api/movies';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const { results } = await fetchPopularMovies();
        setPopularMovies(results);
      } catch (error) {
        setError(error.message);
      }
    };
    getPopularMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {error && <p>{error}</p>}
      <MoviesList movies={popularMovies} />
    </main>
  );
};

export default Home;
