import React, { useState } from 'react';

import { Box, Heading, ResponsiveContext, Button, Paragraph } from 'grommet';

export default ({heading, text, image}) => {
  const [hover, setHover] = useState(false);
  
  return (
    <ResponsiveContext.Consumer>
      {size => (
          <Box 
            background="accent-3" 
            direction={ size === 'small' ? "column" : "row"} 
            height="medium"
          >
            <Box 
              background="dark-1" 
              basis="1/2"
              onMouseEnter={() => console.log('hoverenter', event)}
              onMouseLeave={() => console.log('hoverexit')}
            >
              Image here
            </Box>
            <Box basis="1/2">
              <Heading margin="none" level={4}>{heading}</Heading>
              <Paragraph>{text}</Paragraph>
              {size}
              <br/>
              {hover ? "true" : "false"}
            </Box>
            <div style={{ background: 'blue'}} onMouseEnter={()=>console.log('div-hover')}>something</div>
          </Box>   
      )}
    </ResponsiveContext.Consumer>
  )
}
