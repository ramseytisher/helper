import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, navigate } from "gatsby";
import MainLayout from "../layout/MainLayout";
import config from "../../data/SiteConfig";
import Img from 'gatsby-image';

class ProjectsPage extends Component {
  
  render() {
    const projects = this.props.data.projects.edges;

    return (
      <MainLayout>
        <Helmet title={`Projects | ${config.siteTitle}`} />
        <h1>Projects</h1>
        {
          projects.map( project => (
            <Img key={project.node.frontmatter.title} fluid={project.node.frontmatter.cover_image.childImageSharp.fluid} />
          ))      
        }
      </MainLayout>
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