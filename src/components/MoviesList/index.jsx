import { NavLink } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`}>{title}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
