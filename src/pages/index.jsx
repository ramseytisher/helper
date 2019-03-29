import React from 'react';

import { Grommet, Box, Heading, Stack, Button } from 'grommet';

import Login from '../components/Login';

import RotatorCard from '../components/Rotator/RotatorCard';
import Rotator from '../components/Rotator/Rotator';


export default () => {

  return (
    <Grommet>
      <Box>
        <Box direction="row" justify="end" background="dark-1" gap="small">
          <Login />
        </Box>
        <Box background="accent-1">
          <Stack anchor="bottom">
            <Box background="accent-4" height="large">
              <Heading>make it simple</Heading>
            </Box>

            <Box width="75vw">
              <Rotator duration={5000}>
                <RotatorCard heading="Thing 1" text="some other kind of text ..." />
                <RotatorCard heading="Thing 2" text="some other kind of text ..." />
                <RotatorCard heading="Thing 3" text="some other kind of text ..." />
                <RotatorCard heading="Thing 4" text="some other kind of text ..." />
                <RotatorCard heading="Thing 5" text="some other kind of text ..." />
              </Rotator>
              <Box width="50vw" alignSelf="center" margin="small" >
                <Button label="See All Projects" primary />
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box height="medium" background="dark-1" />
      </Box>
    </Grommet>
  )
}
