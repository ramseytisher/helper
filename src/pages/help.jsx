import React, { Component } from 'react';
import { graphql, navigate } from "gatsby";
import Img from 'gatsby-image';

import {Grommet, Grid, Box, Button, Heading, Paragraph, ResponsiveContext} from 'grommet';

import theme from "../layout/theme";

const Card = ({title, image}) => (
  <Box background="light-2" round elevation="medium">
    <Heading margin="small" size="small">{title}</Heading>
    <Box direction="column" justify="center">
      <Box>
        <Img fluid={image} />
      </Box>
      <Paragraph>asdfasdfasdfasd asdf asdf asdf asfd asdf asdf asf asdf sadf dddasdf</Paragraph>
    </Box>
  </Box>
)

export default class Help extends Component {
  resizeGrid = (size) => {
    switch(size) {
      case 'medium': return {count: 2, size: "auto"}
      case 'large': return {count: 3, size: "auto"}
      case 'xlarge': return {count: 4, size: "auto"}
      default: return "auto"
    }
  }
  
  render() {
    return (
      <Grommet theme={theme}>
          <ResponsiveContext.Consumer>
          { size => (
            <Box pad={size}>
              <Grid
                columns={this.resizeGrid(size)}
                gap="medium"
              >
                <Card title="some title." image={this.props.data.hero.childImageSharp.fluid} />
                <Card title="some form of longer title." image={this.props.data.hero.childImageSharp.fluid} />
                <Card title="some title." image={this.props.data.hero.childImageSharp.fluid} />
                <Card title="some title." image={this.props.data.hero.childImageSharp.fluid} />
                <Card title="some title." image={this.props.data.hero.childImageSharp.fluid} />
                <Card title="some title." image={this.props.data.hero.childImageSharp.fluid} />
                <Card title="some title." image={this.props.data.hero.childImageSharp.fluid} />
                <Card title="some title." image={this.props.data.hero.childImageSharp.fluid} />
                <Card title="some title." image={this.props.data.hero.childImageSharp.fluid} />
                <Card title="some title." image={this.props.data.hero.childImageSharp.fluid} />
              </Grid>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    )
  }
}

/* eslint no-undef: "off" */
export const helpQuery = graphql`
  query helpQuery {
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
