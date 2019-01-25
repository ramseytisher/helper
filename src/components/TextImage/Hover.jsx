import React, { Component } from 'react';
import Img from "gatsby-image";
import { Stack, Box, Button, Heading, Paragraph } from 'grommet';

const Text = () => (
  <Paragraph>some kind of text</Paragraph>
)

export default class TextImageHover extends Component {
  state = {
    text: true
  }

  toggle = () => {
    console.log('here');
    this.setState({ text: !this.state.text })
  }
  
  render() {
    return (
        <Button 
          onClick={() => this.toggle()} 
          onMouseEnter={() => this.toggle()} 
          onMouseLeave={() => this.toggle()}
        >
         { this.state.text ? <Text /> : <Img fluid={this.props.image} /> }
        </Button>
    )
  }
}
