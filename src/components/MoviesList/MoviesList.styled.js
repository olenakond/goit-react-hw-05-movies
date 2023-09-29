import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #4a4cea;
  font-size: 16px;
  &.active {
    color: #d33620;
  }
`;
