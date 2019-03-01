import React, { Component } from 'react'
import { Grommet, Box, Layer, Heading, Button, Image } from 'grommet';
import { Close, Amazon } from 'grommet-icons';
import styled from 'styled-components';

import image from '../images/ideas.jpg';

const SomeImage = styled(Image)`
    height: 15vh;
`;



export default class ButtonLayer extends Component {
    state = {
        open: true
    }

    toggleLayer = () => {
        this.setState({ open: !this.state.open})
    }
  
    render() {
    return (
      <Grommet full>
        <Box fill align="center" justify="center">
            <Button label="open layer" onClick={this.toggleLayer} />
            <Box>{this.state.open ? "true" : "false"}</Box>
            { this.state.open && (
                <Layer
                    modal
                    position="right"
                    full="vertical"
                    onClickOutside={this.toggleLayer}
                    onEsc={this.toggleLayer}
                >
                    <Box fill>
                        <Box direction="row" justify="between" align="center" as="header" elevation="medium" pad="small">
                            <Heading level={2} margin="none" size="medium">Header</Heading>
                            <Button icon={<Close />} onClick={this.toggleLayer} />
                        </Box>
                        <Box flex overflow="auto" pad={{"vertical": "small"}}>
                            <Box border={{ side: "bottom"}}>
                                <Heading alignSelf="center" margin="none" level={3}>Something</Heading>
                                <Box direction="row" justify="center" align="center" pad="small">
                                    <Box elevation="large">
                                        <SomeImage fit="contain" src={image} margin="none" />
                                    </Box>
                                    <Box gap="small" justify="center" pad="small">
                                        <Button label="review" />
                                        <Button icon={<Amazon />}label="go to a" href="https://www.google.com" target="_blank" rel="nofollow" />
                                        <Button label="go to b" href="https://www.espn.com" target="_blank" />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box as="footer" border={{ side: "top"}} pad="small">
                            <Button label="close layer" onClick={() => this.toggleLayer()} />
                        </Box>
                    </Box>
                </Layer>
            )}
        </Box>
      </Grommet>
    )
  }
}
