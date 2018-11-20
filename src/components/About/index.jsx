import React, { Component } from "react";

import styled from 'styled-components';

const AboutCard = styled.div`
  background-color: white;
  height: 100%;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const AboutHeader = styled.h1`
  margin-top: 0px;
`;


class About extends Component {
  render() {
    return (
      <AboutCard>
        <AboutHeader>
          the help
        </AboutHeader>
        <p>
          Help Description
        </p>
      </AboutCard>
    );
  }
}

export default About;
