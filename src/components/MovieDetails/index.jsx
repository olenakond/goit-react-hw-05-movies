import { useEffect, useState } from 'react';
import { fetchMoviesById } from 'api/movies';
import { useParams } from 'react-router-dom';
import {
  FlexContainer,
  Title,
  Score,
  SubTitle,
  GenresList,
} from './MovieDetails.styled';
import defaultImg from 'img/not_found.jpg';

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
        <FlexContainer>
          <div>
            <img
              src={
                movieInfo.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
                  : defaultImg
              }
              alt={movieInfo.title}
              width="200"
            />
          </div>
          <div>
            <Title>{`${movieInfo.title} (${movieInfo.release_date.slice(
              0,
              4
            )})`}</Title>
            <Score>User score: {`${Math.round(movieInfo.popularity)} %`}</Score>
            <SubTitle>Overview</SubTitle>
            <p>{movieInfo.overview}</p>
            <SubTitle>Genres</SubTitle>
            <GenresList>
              {movieInfo.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </GenresList>
            <p></p>
          </div>
        </FlexContainer>
      )}
    </section>
  );
};

export default MovieDetails;
