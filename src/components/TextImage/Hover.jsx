import React, { Component } from 'react';
import Img from "gatsby-image";
import { Stack, Box, Button, Heading, Paragraph } from 'grommet';

export default class TextImageHover extends Component {
  state = {
    text: true
  }

  toggle = () => {
    this.setState({ text: !this.state.text })
  }
  
  render() {
    return (
        <Button label={`Current: ${this.state.text}`} onClick={() => this.toggle()} />
    )
  }
}
