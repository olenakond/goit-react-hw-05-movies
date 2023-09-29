import { Outlet, useLocation } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails';
import { Suspense, useRef } from 'react';
import {
  SectionContainer,
  Title,
  StyledLink,
  LinkBack,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const location = useLocation();
  const locationBackRef = useRef(location.state?.from ?? '/');

  return (
    <main>
      <SectionContainer>
        <LinkBack to={locationBackRef.current}>Go back</LinkBack>
        <MovieDetails />
      </SectionContainer>
      <SectionContainer>
        <Title>Additional information</Title>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </SectionContainer>
    </main>
  );
};

export default MovieDetailsPage;
