import { NavLink, Outlet } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails';

const MovieDetailsPage = () => {
  return (
    <main>
      <MovieDetails />
      <section>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </section>
    </main>
  );
};

export default MovieDetailsPage;
