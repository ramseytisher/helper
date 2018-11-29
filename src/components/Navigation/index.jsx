import React, { Component } from 'react'
import { Link } from 'gatsby';
import { FaBeer } from 'react-icons/fa'

import { NavigationBar, MenuButton, NavigationDrawer, NavigationMask} from './styles';
import NavigationList from './NavigationList';

export default class Navigation extends Component {
  state = {
    showDrawer: false,
  }

  toggleDrawer = () => {
    this.setState({ showDrawer: !this.state.showDrawer})
  }
  
  renderDrawer() {
    return (
      <>
        <NavigationDrawer>
          <NavigationList />
        </NavigationDrawer>
        <NavigationMask onClick={this.toggleDrawer} />
      </>
    )
  }
  
  render() {
    return (
      <>
        <NavigationBar>
          { this.state.showDrawer && this.renderDrawer() }
          <MenuButton onClick={this.toggleDrawer}><FaBeer /></MenuButton>
          <Link to="/">Home</Link> {" | "}
          <Link to="/about">About</Link>
        </NavigationBar>
      </>
    )
  }
}
