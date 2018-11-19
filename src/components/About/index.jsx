import React, { Component } from "react";

import styled from 'styled-components';

const AboutCard = styled.div`
  height: 50vh;
  background-color: blue;
`;


class About extends Component {
  render() {
    return (
      <AboutCard>
        <h1>
          the help
        </h1>
        <p>
          Help Description
        </p>
      </AboutCard>
    );
  }
}

export default About;
