import React from 'react'
import { navigate } from 'gatsby';

import { ResponsiveContext, Box, Button } from 'grommet';

const SmallMenu = () => (
  <Box background="neutral-1">
    <Button onClick={() => navigate("/")}>Home</Button>
    <Button onClick={() => navigate("/about")}>About 1</Button>
    <Button onClick={() => navigate("/about")}>About 2</Button>
    <Button onClick={() => navigate("/about")}>About 3</Button>
  </Box>
);

const Menu = () => (
  <Box>this is not small menu</Box>
)

export default () => (
  <ResponsiveContext.Consumer>
    { size => (
      (size === 'small') ? 
      <SmallMenu />:
      <Menu />
    )}
  </ResponsiveContext.Consumer>
)
