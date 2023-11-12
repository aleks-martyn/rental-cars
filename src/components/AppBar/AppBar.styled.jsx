import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  padding: 20px 35px;
  box-shadow: 0px 4px 4px var(--shadow-color);
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 70px;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  color: var(--secondary-text-color);
  transition: color var(--tra);

  :hover,
  :focus {
    text-decoration: underline;
  }

  &.active {
    color: var(--accent-color);
  }
`;
