import { NavLink, Outlet, useLocation } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails';
import { Suspense, useRef } from 'react';

const MovieDetailsPage = () => {
  const location = useLocation();
  const locationBackRef = useRef(location.state?.from ?? '/');

  return (
    <main>
      <section>
        <NavLink to={locationBackRef.current}>Go back</NavLink>
        <MovieDetails />
      </section>
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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};

export default MovieDetailsPage;
