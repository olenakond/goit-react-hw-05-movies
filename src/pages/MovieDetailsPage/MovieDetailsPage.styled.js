import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SectionContainer = styled('section')`
  border-top: 1px solid #b6b2b2;
  padding: 24px 18px;
`;

export const Title = styled('h2')`
  margin-bottom: 16px;
`;

export const StyledLink = styled(NavLink)`
  color: #4a4cea;
  font-size: 16px;
  &.active {
    color: #d33620;
  }
`;

export const LinkBack = styled(NavLink)`
  display: block;
  margin-bottom: 18px;
  padding: 4px 8px;
  width: 80px;
  height: 20px;
  background-color: #f7a697;
  border: 1px solid #b6b2b2;
  border-radius: 3px;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  &.active {
    color: #a11414;
  }
`;
