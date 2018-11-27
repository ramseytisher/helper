import React, { Component } from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1em;
  margin: 0px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  text-shadow: none;
  margin: 5px;
  border: 4px solid greenyellow;
  border-radius: 4px;
  padding: 2px;
  background-color: none;
  background-image: none;
  text-transform: uppercase;

  &:hover {
    background-color: lightgreen;
  }
`;

// const NavButton = styled.button`
//   border: 1px;
// `;

const Logo = styled.div`
  text-align: center;
`;

export default class ProjectNav extends Component {
  render() {
    return (
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <Logo>logo</Logo>
        <StyledLink to="/">Logout</StyledLink>
      </NavBar>
    )
  }
}
