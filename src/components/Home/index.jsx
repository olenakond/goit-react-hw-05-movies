import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from 'api/movies';
import { Title, Section } from './Home.styled';

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
    <Section>
      <Title>Trending today</Title>
      {error && <p>Sorry, something went wrong, try again.</p>}
      {popularMovies && <MoviesList movies={popularMovies} />}
      {popularMovies && popularMovies.length === 0 && (
        <p>We are sorry. There are no matches to your request.</p>
      )}
    </Section>
  );
};

export default Home;
