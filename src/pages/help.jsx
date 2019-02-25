import React, { Component } from 'react';
import { graphql, navigate } from "gatsby";
import Img from 'gatsby-image';


import {Grommet, Grid, Box, Button, Heading, Paragraph, ResponsiveContext} from 'grommet';

import theme from "../layout/theme";

const BlogCard = () => (
  <Box background="accent-1" round={{ corner: "right" }} pad={{"horizontal": "small"}} align="center" elevation="large">
    <Heading textAlign="center" level="3" size="large" margin="medium">Blog Card</Heading>
    <Paragraph>Lorem ipsum dolor amet tbh next level polaroid paleo farm-to-table. Lomo adaptogen prism roof party readymade snackwave, +1 live-edge brooklyn slow-carb cred austin tbh cornhole raclette. Direct trade leggings cornhole, tbh vexillologist helvetica fanny pack etsy master cleanse sustainable palo santo. </Paragraph>
  </Box>
)

const ProjectCard = () => (
  <Box background="accent-2" round pad={{"horizontal": "small"}} align="center" elevation="large">
    <Heading textAlign="center" level="3" width="40vw" size="large" margin="medium">Project Card</Heading>
    <Paragraph>Lorem ipsum dolor amet tbh next level polaroid paleo farm-to-table. Lomo adaptogen prism roof party readymade snackwave, +1 live-edge brooklyn slow-carb cred austin tbh cornhole raclette. Direct trade leggings cornhole, tbh vexillologist helvetica fanny pack etsy master cleanse sustainable palo santo. </Paragraph>
  </Box>
)

const ReviewCard = () => { 
  return (
    <Box background="accent-3" round={{ corner: "left" }} pad={{"horizontal": "small"}} align="center" elevation="large">
      <Heading textAlign="center" level="3" size="large" margin="medium">Review Card</Heading>
      <Paragraph>Lorem ipsum dolor amet tbh next level polaroid paleo farm-to-table. Lomo adaptogen prism roof party readymade snackwave, +1 live-edge brooklyn slow-carb cred austin tbh cornhole raclette. Direct trade leggings cornhole, tbh vexillologist helvetica fanny pack etsy master cleanse sustainable palo santo. </Paragraph>
    </Box>
  );
}

export default class Help extends Component {
  
  render() {
    return (
      <Grommet theme={theme}>
          <ResponsiveContext.Consumer>
          { size => (
            <>
              { size === 'small' || size === 'xsmall' ? (
                <Box direction="column" gap="medium">
                  <ProjectCard />
                  <BlogCard />
                  <ReviewCard />
                </Box>
              ) : (
                <Box direction="row" gap="small">
                  <BlogCard />
                  <ProjectCard />
                  <ReviewCard />
                  
                </Box>
              )}
            </>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    )
  }
}

// /* eslint no-undef: "off" */
// export const helpQuery = graphql`
//   query helpQuery {
//     projects: allMarkdownRemark(
//       sort: {order: DESC, fields: [frontmatter___date]}, 
//       filter: {fileAbsolutePath: {regex: "/projects/.*\\index.md$/"}}
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             cover_image {
//               publicURL
//               childImageSharp {
//                 fluid(maxWidth: 600, maxHeight: 600) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     hero: file(relativePath: { eq: "the-lab-space.jpg"}) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           base64
//           tracedSVG
//           aspectRatio
//           src
//           srcSet
//           srcWebp
//           srcSetWebp
//           sizes
//           originalImg
//           originalName
//         }
//       }
//     }
//   }
// `;
