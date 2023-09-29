import { useEffect, useState } from 'react';
import { fetchMoviesById } from 'api/movies';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesById = async () => {
      try {
        setError('');
        const data = await fetchMoviesById(movieId);
        setMovieInfo(data);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    getMoviesById();
  }, [movieId]);

  return (
    <section>
      {error && <p>Sorry, something went wrong, try again.</p>}
      {movieInfo && (
        <div>
          <button type="button">Go back</button>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
              alt={movieInfo.title}
              width="200"
            />
          </div>
          <div>
            <h1>{`${movieInfo.title} (${movieInfo.release_date.slice(
              0,
              4
            )})`}</h1>
            <p>User score: {`${Math.round(movieInfo.vote_average)} %`}</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h2>Genres</h2>
            <ul>
              {movieInfo.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <p></p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieDetails;
