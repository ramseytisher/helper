import React from 'react'
import { Box, Grid, Heading, Paragraph ,ResponsiveContext } from 'grommet';
import Img from "gatsby-image";
import styled from 'styled-components';

const RoundedImageLeft = styled(Img)`
  border-radius: 50px 0px 0px 50px;
`;

const RoundedImageRight = styled(Img)`
  border-radius: 0px 50px 50px 0px;
`;

export default ({text, image, textSize, flip, dark}) => (
  <ResponsiveContext.Consumer>
    { size => (
      <Box background={dark && "dark-1"}>
        <Grid
          fill
          columns={{ 
            count: (size === 'small') ? 1 : 2 ,
            size: "auto"
          }}
        >
        { flip ? (
          <>
            <Box justify="center">
              {(size === 'small') ? <Img fluid={image} /> : <RoundedImageRight fluid={image} /> }
            </Box>
            <Box align="center" justify="center" pad={size}>
              <Paragraph textAlign="center" size={textSize ? textSize : size}>{text}</Paragraph>
            </Box>
          </>
        ) : (
          <>
            <Box align="center" justify="center" pad={size}>
              <Paragraph textAlign="center" size={textSize ? textSize : size}>{text}</Paragraph>
            </Box>
            <Box justify="center">
              {(size === 'small') ? <Img fluid={image} /> : <RoundedImageLeft fluid={image} /> }
            </Box>
          </>
        )}  
        </Grid>
        </Box>
    )}
  </ResponsiveContext.Consumer>
)