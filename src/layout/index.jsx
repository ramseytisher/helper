import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import { 
  Box, 
  Button,
  Heading, 
  Grommet, 
  Collapsible, 
  ResponsiveContext,
  Layer,
} from 'grommet';

import { Link } from 'gatsby';
import { Test, FormClose } from 'grommet-icons';

import Navigation from '../components/Navigation';

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '20px',
      height: '50px'
    }
  }
}

const AppBar = (props) => (
  <Box 
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '100'}}
    {...props}
  />
);

export default class MainLayout extends React.Component {
  state = {
    showSidebar: false
  }
  
  render() {
    const { children } = this.props;
    const { showSidebar } = this.state;

    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          { size => (
            <Box fill>
            <Helmet>
              <meta name="description" content={config.siteDescription} />
            </Helmet>
            <AppBar>
              <Heading level='3' margin='none'>
                GrommetApp
              </Heading>
              <Button 
                icon={ showSidebar ? <FormClose /> : <Test />} 
                onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
              />
            </AppBar>
            <Box direction='row' flex>
              <Box flex align='center' justify='center'>
                {children}
              </Box>
            {(!showSidebar || size !=='small') ? (
              <Collapsible direction="horizontal" open={showSidebar}>
                <Box
                  flex
                  width='medium'
                  background='light-2'
                  elevation='small'
                  align='center'
                  justify='center'
                > 
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/projects">Projects</Link>
                </Box>
              </Collapsible>
            ): (
              <Layer>
                <Box
                  fill
                  background='light-2'
                  align='center'
                  justify='center'
                >
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/projects">Projects</Link>
                </Box>
              </Layer>
            )
          }
          </Box>
          </Box>
        )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}
