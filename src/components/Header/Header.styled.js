import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled('header')`
  padding: 12px 24px;
  background-color: #fcf9fa;
  border-bottom: 1px solid #b6b2b2;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const List = styled('ul')`
  padding: 8px 16px;
  display: flex;
  gap: 20px;
  justify-content: start;
`;

export const StyledLink = styled(NavLink)`
  color: #170805;
  font-size: 20px;
  text-decoration: none;
  &.active {
    color: #d33620;
  }
`;
