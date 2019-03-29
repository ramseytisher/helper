import React, { useState } from 'react';

import { Box, Heading, ResponsiveContext, Button, Paragraph, Text } from 'grommet';
import { Next } from 'grommet-icons';

export default ({ heading, text, image }) => {
  const [hover, setHover] = useState(false);

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          direction={size === 'small' ? "column" : "row"}
          height={size === "small" ? "medium" : "small"}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          elevation="xlarge"
        >
          <Box
            background="dark-1"
            basis="1/2"
          >
            Image here
            </Box>
          <Box basis="1/2" background="light-1">
            <Box pad="medium" flex>
              <Heading margin="none" level={4}>{heading}</Heading>
              <Paragraph>{text}</Paragraph>
            </Box>
            {(size === 'small' || hover) && (
              <Box animation="fadeIn" margin="medium" justify="end">
                <Button label="see this thing" alignSelf="end" icon={<Next />} reverse primary />
              </Box>
            )}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}
