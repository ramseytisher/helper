import React from "react";

import { Link } from "gatsby";

import styled from "styled-components";

const Card = styled(Link)`
  background-color: white;
  grid-column: 3 / -1;
  margin: 5px;
  text-align: center;
  line-height: 100px;
  font-family: sans-serif;
  background-image: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  
  &:hover {
    box-shadow: 0 5px 14px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  @media only screen and (max-width: 500px) {
    background-color: white;
    margin: 10px;
    grid-column: 1 / -1;
  }
`;

const NavCard = ({ title, link }) => (
  <Card to={link}>
    <p>{title}</p>
  </Card>
);

export default NavCard;
