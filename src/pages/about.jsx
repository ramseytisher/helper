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
  height: 50vh;

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const DescriptionBlock = styled.div`
  grid-column: 1 / 3;
  grid-row: span 2;

  @media only screen and (max-width: 500px) {
    grid-column: span 4;
  }
`;


class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <AboutContainer>
          <Helmet title={`About | ${config.siteTitle}`} />
          <DescriptionBlock>
            <About />
          </DescriptionBlock>
          <NavCard title="projects" link="/projects" />
          <NavCard title="blog" link="/blog" />
        </AboutContainer>
      </Layout>
    );
  }
}

export default AboutPage;
