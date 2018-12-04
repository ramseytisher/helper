import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
// import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class ProjectTemplate extends React.Component {
  render() {
    const { project } = this.props.pageContext;
    const projectEdges = this.props.data.allFile.edges;
    return (
      <Layout>
        <div>
          <Helmet title={`Project "${project}" | ${config.siteTitle}`} />
          <h2>{project}</h2> 
          <pre>{JSON.stringify(project, 0, null)}</pre>
          <pre>{JSON.stringify(projectEdges, 0, 2)}</pre>
          {
            projectEdges.map( edge => {
              console.log('edge', edge.node.childMarkdownRemark.html);
              return (
                <div>
                  <div dangerouslySetInnerHTML={{ __html: edge.node.childMarkdownRemark.html }} />
                </div>
              )
            })
          }
        </div>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const projectQuery = graphql`
  query ProjectPage($project: String){
    allFile(
      limit: 1000
      sort: {fields: [name], order: ASC }
      filter: { relativeDirectory: { eq: $project } }
    ) {
      edges {
        node {
          relativeDirectory
          absolutePath
          childMarkdownRemark {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  } 
`;
