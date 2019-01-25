import React from "react";
import Helmet from "react-helmet";
import { graphql, navigate } from "gatsby";
import Img from "gatsby-image"
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import { Box, Stack, Paragraph, Button, Grommet, ResponsiveContext, Heading} from 'grommet';
import theme from '../layout/theme';
import Menu from '../components/Menu';

import styled from "styled-components";

const StyledGrommet = styled(Grommet)`
  overflow-x: hidden;
  overflow-y: auto;
`;

const HeroImage = styled(Img)`
  height: 100vh;
`;

const Divider = styled.hr`
  width: 60%;
  margin: auto;
  height: .3rem;
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
          primary={true}
        /> :
        <Button 
          label={`${label} ${size}`} 
          onClick={() => navigate(`/${path}`)} 
          margin="medium"
          primary={true}
        />
    )}
  </ResponsiveContext.Consumer>
)

const ContentBlock = ({children}) => (
  <ResponsiveContext.Consumer>
    { size => (
      <Box 
        pad="medium"
        direction={(size === 'small') ? "column" : "row"}
        gap="small"
      >
        {children}
      </Box>
    )}
  </ResponsiveContext.Consumer>
)

const ContentBox = () => (
  <Box
    elevation="xlarge"
    margin="small"
  >
    <Heading
      color="neutral-2"
      textAlign="center"
      level="2"
      margin="small"
    >
      our goal
    </Heading>
    <Divider />
    <Paragraph
      textAlign="center"
      margin="small"
    >
      Lorem ipsum dolor amet four loko flannel irony, chambray before they sold out fashion axe DIY. Ramps stumptown actually, farm-to-table art party yr cred hell of freegan 8-bit. Knausgaard offal sriracha wayfarers, portland listicle semiotics vaporware. 
    </Paragraph>
  </Box>
)

class Index extends React.Component {
  render() {
    return (
      <StyledGrommet theme={theme} full>
        <Helmet title={config.siteTitle} />
        <SEO />
          <Stack anchor='center'>
            <HeroImage fluid={this.props.data.hero.childImageSharp.fluid} />
            <Box>
              <Box width="100vw">
                <Heading 
                  color='white'
                  level='3'
                  margin='xsmall'
                  textAlign='center'
                >
                  this is the
                </Heading>
                <Heading 
                    color='white'
                    level='1'
                    margin='xsmall'
                    textAlign='center'
                >
                  whereWeWould putThat
                </Heading>
              </Box>
              <HeroButtonBox>
                <HeroButton label="location1" path="projects"/>
                <HeroButton label="reports" path="projects" />
              </HeroButtonBox>
              <Menu />
            </Box>
          </Stack>
          <Box>
            <ContentBlock>
              <ContentBox />
              <ContentBox />
              <ContentBox />
            </ContentBlock>
            <HeroButton label="about" path="about" />
          </Box>
          
          <Box>Contact</Box>  
      </StyledGrommet>
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
