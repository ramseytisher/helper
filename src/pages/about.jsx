import React, { Component } from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { Grommet, Stack, Box, Button } from 'grommet';

import config from "../../data/SiteConfig";
import Menu from "../components/Menu";

class AboutPage extends Component {
  state = {
    menuOpen: false
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen})
  }
  
  render() {
    const { menuOpen } = this.state;

    return (
      <Grommet>
        <Helmet title={`About | ${config.siteTitle}`} />
        <Stack anchor="top">
          <Stack anchor="bottom">
            <Img fluid={this.props.data.hero.childImageSharp.fluid} />
            <h2>some big title</h2>
          </Stack>
          { menuOpen ?
            (
              <Box background="neutral-2">
                <Menu />
                <Button onClick={() => this.toggleMenu()}>close menu</Button>
              </Box>
            ) :
            <Button onClick={() => this.toggleMenu()}>asdf</Button>
          }
        </Stack>
      </Grommet>
    );
  }
}

export default AboutPage;

/* eslint no-undef: "off" */
export const imageQuery = graphql`
  query {
    hero: file(relativePath: { eq: "the-lab-space.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`;