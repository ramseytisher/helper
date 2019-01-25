import React from 'react'
import Img from "gatsby-image";
import styled from 'styled-components';

import { Stack, Box, Button, Heading, Paragraph, Image } from 'grommet';
import { Test } from 'grommet-icons';

const HeroImage = styled(Img)`
  height: 100%;
`;

const NavBar = styled(Box)`
  width: 95vw;
  border-radius: 50px 50px 0px 0px;
`;

const HoverLink = styled(Paragraph)`
  &:hover {
    text-decoration: underline;
  }
`;

export default ({ image }) => (
  <Stack anchor="bottom">
    <Box height="80vh" elevation="medium">
      <HeroImage fluid={image} />
    </Box>
    <NavBar direction="row" fill background={{ "color": "dark-1", "opacity": "strong" }}>
      <Box flex align="center" justify="center" gap="small">
        <Button>
          <Test size="36px" />
          <HoverLink size="xlarge">Projects</HoverLink>
        </Button>
        
      </Box>
      <Box flex>
        <Test />
        <Heading>Blog</Heading>
      </Box>
      <Box flex>
        <Test />
        <Heading>About</Heading>
      </Box>
      <Box flex>
        <Test />
        <Heading>Contact</Heading>
      </Box>
    </NavBar>
  </Stack>
)
