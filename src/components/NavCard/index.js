import React, { Component } from "react";

import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  margin: 5px;
  text-align: center;
  line-height: 100px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  @media only screen and (max-width: 567px) {
    background-color: white;
    margin: 10px;
  }
`;

const AboutDescription = styled.p`

`;

class NavCard extends Component {
  render() {
    return (
      <Card>
        <p>this is a card...</p>
      </Card>
    );
  }
}

export default NavCard;
