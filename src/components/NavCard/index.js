import React, { Component } from "react";

import styled from 'styled-components';

const Card = styled.div`
  background-color: green;
  @media only screen and (max-width: 567px) {
    background-color: pink;
  }
`;

const AboutDescription = styled.p`

`;

class NavCard extends Component {
  render() {
    return (
      <Card>
        <h1>this is a card...</h1>
      </Card>
    );
  }
}

export default NavCard;
