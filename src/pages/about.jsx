import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

import About from "../components/About/index";
import NavCard from "../components/NavCard";

import styled from 'styled-components';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: yellow;
  height: 50vh;

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const DescriptionColumn = styled.div`
  grid-column: 1 / 3;

  @media only screen and (max-width: 500px) {
    grid-column: 1 / 4;
  }
`;

const NavigationColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;


class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <AboutContainer>
          <Helmet title={`About | ${config.siteTitle}`} />
          <DescriptionColumn>
            <About />
          </DescriptionColumn>
          <NavigationColumn>
            <NavCard />
            <NavCard />
          </NavigationColumn>
        </AboutContainer>
      </Layout>
    );
  }
}

export default AboutPage;
