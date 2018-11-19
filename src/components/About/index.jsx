import React, { Component } from "react";

import styled from 'styled-components';

const AboutCard = styled.div`
  height: 50vh;
  background-color: white;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 5px 14px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

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
