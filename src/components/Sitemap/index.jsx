import React from 'react'
import { Box, ResponsiveContext, Grid, Button } from 'grommet';
import { Twitter, Mail } from 'grommet-icons';

export default () => (
  <ResponsiveContext.Consumer>
    { size => (
      <Grid 
        areas={[
          { name: 'left', start: [0, 0], end: [0, 0] },
          { name: 'middle', start: [1, 0], end: [1, 0] },
          { name: 'right', start: [2, 0], end: [2, 0] },
        ]}
        columns={['small', 'flex', 'small']}
        rows={['xsmall']}
        gap='xsmall'
      >
        <Box gridArea='left' align='center' justify='center'>Logo {size}</Box>
        {(size !== 'small') && (
          <Box direction="row" gridArea='middle' justify='center' gap={size}>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            <Button>Four</Button>
          </Box>
        ) }
        
        <Box gridArea='right' align='center' justify='center'>
          <Box direction='row' gap={size}>
            <Button><Twitter /></Button>
            <Button><Mail /></Button></Box>
          <Box>Privacy</Box>
        </Box>
      </Grid>
    )}
  </ResponsiveContext.Consumer>
)
