import React, { Component } from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { Grommet, Stack, Box, Button, Heading, Paragraph } from 'grommet';

import config from "../../data/SiteConfig";
import Menu from "../components/Menu";
import Typer from "../components/Typer";

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
          {/* <Stack anchor="bottom">
            <Img fluid={this.props.data.hero.childImageSharp.fluid} />
            <h2>some big title</h2>
          </Stack> */}
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
        <Box align="center">
          <Heading level="2">some header</Heading>
        </Box>
        <Box animation={["fadeIn"]} align="center">
          <Paragraph margin="xsmall" textAlign="center">something to start</Paragraph>
          <Heading level="3" margin="xsmall" justify="center">
            <Typer rotate={['thing', 'object', 'something', 'value', 'again']}/>
          </Heading>
          <Paragraph textAlign="center">Lorem ipsum dolor amet ugh humblebrag pinterest vaporware, everyday carry hell of godard DIY before they sold out craft beer sriracha four dollar toast next level. Williamsburg stumptown gentrify photo booth occupy man bun. Cornhole gochujang whatever, la croix hella hoodie green juice hammock health goth migas ennui normcore austin. Freegan etsy roof party tattooed fixie.</Paragraph>
        </Box>
        <Box>
          <Img fluid={this.props.data.hero.childImageSharp.fluid} />
        </Box>
        <Box align="center" margin="xlarge" pad="xxsmall">
          <Paragraph textAlign="center">Lorem ipsum dolor amet ugh humblebrag pinterest vaporware, everyday carry hell of godard DIY before they sold out craft beer sriracha four dollar toast next level. Williamsburg stumptown gentrify photo booth occupy man bun. Cornhole gochujang whatever, la croix hella hoodie green juice hammock health goth migas ennui normcore austin. Freegan etsy roof party tattooed fixie.</Paragraph>
        </Box>
        <Box direction="row" width="small" fill>
          <Box direction="column" background="dark-1" height="medium" flex align="center" justify="center"><Heading>Left</Heading></Box>
          <Box direction="column" background="dark-1" height="medium" flex align="center" justify="center"><Heading>Right</Heading></Box>
        </Box>
        <Box align="center" margin="xlarge">
          <Paragraph textAlign="center">Lorem ipsum dolor amet ugh humblebrag pinterest vaporware, everyday carry hell of godard DIY before they sold out craft beer sriracha four dollar toast next level. Williamsburg stumptown gentrify photo booth occupy man bun. Cornhole gochujang whatever, la croix hella hoodie green juice hammock health goth migas ennui normcore austin. Freegan etsy roof party tattooed fixie.</Paragraph>
        </Box>
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