import { Container, List, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <List>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </List>
    </Container>
  );
};

export default Header;
