import { fetchMoviesBySearch } from 'api/movies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.search.value });
  };

  useEffect(() => {
    const getMoviesBySearch = async () => {
      try {
        if (!query) {
          return;
        }
        const data = await fetchMoviesBySearch(query);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    getMoviesBySearch();
  }, [query]);

  return (
    <section>
      {error && <p>Sorry, something went wrong, try again.</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="search" />
        </label>
        <button type="submit">Search</button>
      </form>

      {movies && <MoviesList movies={movies} />}
      {movies && movies.length === 0 && (
        <p>We are sorry. There are no matches to your request.</p>
      )}
    </section>
  );
};

export default Movies;
