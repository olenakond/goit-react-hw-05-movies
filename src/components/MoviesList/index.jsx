import { useLocation } from 'react-router-dom';
import { StyledLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
