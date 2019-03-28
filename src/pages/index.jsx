import React from 'react';

import { Grommet, Box, Heading, Stack, Text, Button, Carousel} from 'grommet';
import { InProgress, DocumentTest, Bug, Workshop, Deploy, ChatOption, Trophy } from 'grommet-icons';

import Login from '../components/Login';
import Social from '../components/Social';
import IconText from '../components/IconText';
import CarouselCard from '../components/CarouselCard';

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
            <Box width="80vw" overflow="hidden">
              <Carousel>
                <CarouselCard heading="Thing 1" text="some other kind of text ..." />
                <CarouselCard heading="Thing 2" text="some other kind of text ..." />
                <CarouselCard heading="Thing 3" text="some other kind of text ..." />
                <CarouselCard heading="Thing 4" text="some other kind of text ..." />
                <CarouselCard heading="Thing 5" text="some other kind of text ..." />
              </Carousel>
              <Box width="50vw" alignSelf="center" margin="small" >
                <Button label="See All Projects" primary />
              </Box>
            </Box>
          </Stack>
        </Box>
        
        
        <Box pad={{"vertical": "xlarge"}} background="accent-3" justify="center" align="center">
          <Box gap="medium">
            <IconText icon={<InProgress/>} text="Coming from comp" /> 
            <IconText icon={<DocumentTest/>} text="Coming from comp" />
            <IconText icon={<Bug/>} text="Coming from comp" />
            <IconText icon={<Workshop/>} text="Coming from comp" />
            <IconText icon={<Deploy/>} text="Coming from comp" />
            <IconText icon={<ChatOption/>} text="Coming from comp" />
            <IconText icon={<Trophy/>} text="Coming from comp" />
          </Box>
        </Box>
        <Box height="xsmall" justify="center" align="center">
          <Social text="find us here | " />
        </Box>
        
        <Box height="medium" background="dark-1" />
      </Box>
    </Grommet>
  )
}
