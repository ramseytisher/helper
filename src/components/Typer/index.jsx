import React, { useState, useEffect } from 'react';
import { Box, Text } from 'grommet';
import styled from 'styled-components';

const Bar = styled(Text)`
  color: lightgreen;
`

export default ({text, duration, delay}) => {
  const [end, setEnd] = useState(0);

  useEffect(() => {
    if (end === text.length) {
      setTimeout(() => setEnd(0), delay);
    } else {
      setTimeout(() => setEnd(end + 1), duration);
    }
  })
  
  return (
    <Box direction="row" align="center" gap="2px">
      <Box>
        {text && (
          <Text size="large">
            {text.substring(0,end)}
          </Text>
        )}
      </Box>
      <Box 
        width="4px" 
        height="30px" 
        background="accent-1" 
        animation={end === text.length && "fadeOut"} 
      />
    </Box>
  );
}
