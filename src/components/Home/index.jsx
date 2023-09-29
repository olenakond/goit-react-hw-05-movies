import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from 'api/movies';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        setError('');
        const { results } = await fetchPopularMovies();
        setPopularMovies(results);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    getPopularMovies();
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      {error && <p>Sorry, something went wrong, try again.</p>}
      {popularMovies && <MoviesList movies={popularMovies} />}
      {popularMovies && popularMovies.length === 0 && (
        <p>We are sorry. There are no matches to your request.</p>
      )}
    </section>
  );
};

export default Home;
