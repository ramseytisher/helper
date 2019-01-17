import React from 'react'
import { Box, ResponsiveContext, Grid, Button } from 'grommet';
import { Twitter, Pinterest, Slack, Mail } from 'grommet-icons';

import SitemapButton from './SitemapButton';

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
            <SitemapButton label='One' />
            <SitemapButton label='Two' />
            <SitemapButton label='Three' />
            <SitemapButton label='Four' />
          </Box>
        ) }
        
        <Box gridArea='right' align='center' justify='center' gap="small">
          <Box direction='row' gap={size}>
            <Button href="http://www.twitter.com" target="_blank"><Twitter /></Button>
            <Button href="http://www.pinterest.com" target="_blank"><Pinterest /></Button>
            <Button><Slack /></Button>
            <Button><Mail /></Button>
          </Box>
          <Box>Privacy</Box>
        </Box>
      </Grid>
    )}
  </ResponsiveContext.Consumer>
)
