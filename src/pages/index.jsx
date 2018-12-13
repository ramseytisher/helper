import React from "react";
import Helmet from "react-helmet";
import { graphql, navigate } from "gatsby";
import Img from "gatsby-image"
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import { Box, Stack, Text, Button, Grommet, ResponsiveContext } from 'grommet';
import theme from '../layout/theme';

import styled from "styled-components";

const HeroImage = styled(Img)`
  height: 100vh;
`;

const HeroButtonBox = ({children}) => (
  <ResponsiveContext.Consumer>
    { size => (
      (size === 'xsmall' || size === 'small') ? 
        <Box
          direction="column"
          width="100vw"
          justify="center"
          pad="medium"
        >
          {children}
        </Box>
        :
        <Box
          direction="row"
          width="100vw"
          justify="center"
          pad="medium"
        >
          {children}
        </Box>
    )}
  </ResponsiveContext.Consumer>
)

const HeroButton = ({label, path}) => (
  <ResponsiveContext.Consumer>
    { size => (
      (size === 'xsmall' || size === 'small') ? 
        <Button 
          label={`${label} ${size}`} 
          onClick={() => navigate(`/${path}`)} 
          margin="small"
        /> :
        <Button 
          label={`${label} ${size}`} 
          onClick={() => navigate(`/${path}`)} 
          margin="medium"
        />
    )}
  </ResponsiveContext.Consumer>
)

class Index extends React.Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <Helmet title={config.siteTitle} />
        <SEO />
          <Stack anchor='center'>
            <HeroImage fluid={this.props.data.hero.childImageSharp.fluid} />
            <Box>
              <Text size='xlarge'><strong>hey!</strong></Text>
              <HeroButtonBox>
                <HeroButton label="location1" path="projects"/>
                <HeroButton label="reports" path="projects" />
              </HeroButtonBox>
            </Box>
          </Stack>        
      </Grommet>
    );
  }
}

export default Index;

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
