import { NavLink } from 'react-router-dom';

const Movies = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <NavLink to={`${id}`} key={id}>
              <p>{title}</p>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
