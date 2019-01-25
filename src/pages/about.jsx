import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Grommet, Stack, Box, Button, Heading, Paragraph } from 'grommet';

import config from "../../data/SiteConfig";
import Menu from "../components/Menu";
import Typer from "../components/Typer";
import Emoji from "../components/Emoji";
import Sitemap from "../components/Sitemap";
import Split from "../components/TextImage/Split";
import Hover from "../components/TextImage/Hover";
import HeroNav from "../components/HeroNav";

class AboutPage extends Component {
  render() {
    const projects = this.props.data.projects.edges;

    return (
      <Grommet>
        <Helmet title={`About | ${config.siteTitle}`} />
        <HeroNav image={this.props.data.hero.childImageSharp.fluid} />
        <Split 
          text="Lorem ipsum dolor amet ugh humblebrag pinterest vaporware, everyday carry hell of godard DIY before they sold out craft beer sriracha four dollar toast next level. Williamsburg stumptown gentrify photo booth occupy man bun. Cornhole gochujang whatever, la croix hella hoodie green juice hammock health goth migas ennui normcore austin. Freegan etsy roof party tattooed fixie."
          image={this.props.data.hero.childImageSharp.fluid}
          dark
        />
        <Box>
          <Heading>Blog</Heading>
          <Box direction="row">
            <Hover />
            <Box width="small">
              <Img fluid={this.props.data.ideas.childImageSharp.fluid} />
            </Box>
            
            { projects.map(project => (
              <Button label={project.node.frontmatter.title} />
            ))}
          </Box>
        </Box>

        <Box align="center" margin="xlarge" pad="xxsmall">
          <Paragraph textAlign="center">Lorem ipsum dolor amet ugh humblebrag pinterest vaporware, everyday carry hell of godard DIY before they sold out craft beer sriracha four dollar toast next level. Williamsburg stumptown gentrify photo booth occupy man bun. Cornhole gochujang whatever, la croix hella hoodie green juice hammock health goth migas ennui normcore austin. Freegan etsy roof party tattooed fixie.</Paragraph>
        </Box>
        <Box direction="row" fill>
          <Box direction="column" background="dark-1" height="medium" flex align="center" justify="center"><Heading>Left</Heading></Box>
          <Box direction="column" background="dark-1" height="medium" flex align="center" justify="center"><Heading>Right</Heading></Box>
        </Box>
        <Box align="center" margin="xlarge">
          <Paragraph textAlign="center">Lorem ipsum dolor amet ugh humblebrag pinterest vaporware, everyday carry hell of godard DIY before they sold out craft beer sriracha four dollar toast next level. Williamsburg stumptown gentrify photo booth occupy man bun. Cornhole gochujang whatever, la croix hella hoodie green juice hammock health goth migas ennui normcore austin. Freegan etsy roof party tattooed fixie.</Paragraph>
        </Box>
        <Emoji label="happy" symbol="😀" />
        <Sitemap />
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
    ideas: file(relativePath: { eq: "ideas.jpg"}) {
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
    projects: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}, 
      filter: {fileAbsolutePath: {regex: "/projects/.*\\index.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            title
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;