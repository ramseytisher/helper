import React from 'react';

import { Box, Heading, ResponsiveContext, Text } from 'grommet';

export default ({heading, text, image}) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box 
        background="accent-3" 
        direction={ size === 'small' ? "column" : "row"} 
        height="medium"
      >
        <Box background="dark-1" basis="1/2">
          Image here
        </Box>
        <Box basis="1/2">
          <Heading margin="none" level={4}>{heading}</Heading>
          <Text>{text}</Text>
          {size}
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
)