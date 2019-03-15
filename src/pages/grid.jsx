// this uses grommet: https://www.hpe.com/us/en/home.html

import React, { useState } from 'react';
import styled from 'styled-components';
import { Grommet, Anchor, Layer, Box, Button, Text, Heading, ResponsiveContext} from 'grommet';
import { Close, Menu, CaretNext, EmptyCircle } from 'grommet-icons';

import TextBlob from '../components/textBlob';

const FixedButton = styled(Button)`
  position: fixed;
  top: 5vh;
  left: 10px;
`;

const StyledAnchor = styled(Anchor)`
  background-image: none;
`;

export default () => {

  const [menu, setMenu] = useState(false)

  return (
    <Grommet full>
      <ResponsiveContext.Consumer>
      { size => (
        <Box animation="fadeIn">
          { menu ? (
            <Layer full="vertical" position="left" margin="10px"
              onClickOutside={() => setMenu(false)} onEsc={() => setMenu(false)}
            > 
              <Box direction="row" elevation="medium" align="center" justify="center">
                <Heading textAlign="center" level={3} margin="small">Layer here: size = {size}</Heading>
                <Button icon={<Close />} onClick={() => setMenu(false)} />
              </Box>
              <Box margin="small" gap="small">
                <StyledAnchor label={<Box direction="row" gap="small"><EmptyCircle/>Section 3</Box>} href="#section-3" size="large" onClick={() => setMenu(false)} />
                <StyledAnchor label={<Box direction="row" gap="small"><EmptyCircle/>Section 4</Box>} href="#section-4" size="large" onClick={() => setMenu(false)} />
                <StyledAnchor label={<Box direction="row" gap="small"><EmptyCircle/>Section 7</Box>} href="#section-7" size="large" onClick={() => setMenu(false)} />
              </Box>
              
            </Layer>
          ) : (
            <Box animation="slideRight" >
              <FixedButton icon={<Menu />} primary color="accent-4" onClick={() => setMenu(true)} />
            </Box>
          )}
          <Box align="center" flex pad="medium" overflow={{ horizontal: "hidden" }} background="light-2" >
            <Heading>Some Title 1</Heading>
            <TextBlob />
            <Heading>Some Title 2</Heading>
            <TextBlob />
            <Heading id="section-3">Some Title 3</Heading>
            <TextBlob />
            <Heading id="section-4">Some Title 4</Heading>
            <TextBlob />
            <Heading>Some Title 5</Heading>
            <TextBlob />
            <Heading>Some Title 6</Heading>
            <TextBlob />
            <Heading id="section-7">Some Title 7</Heading>
            <TextBlob />
          </Box>
        </Box>
      )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}