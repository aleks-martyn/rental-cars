import { StyledHeader, StyledNav, StyledNavLink } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </StyledNav>
    </StyledHeader>
  );
};
