import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, navigate } from "gatsby";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Img from 'gatsby-image';

class ProjectsPage extends Component {
  
  render() {
    const projects = this.props.data.projects.edges;

    return (
      <>
        <Helmet title={`Projects | ${config.siteTitle}`} />
        <h1>Projects</h1>
        {
          projects.map( project => (
            <Img fluid={project.node.frontmatter.cover_image.childImageSharp.fluid} />
          ))      
        }
      </>
    );
  }
}

export default ProjectsPage;

/* eslint no-undef: "off" */
export const projectsQuery = graphql`
  query projectsQuery {
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