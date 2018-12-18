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

import Links from './Links';

import { Java, Close } from 'grommet-icons';

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

class MainLayout extends React.Component {
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
            <Box flex>
              <Helmet>
                <meta name="description" content={config.siteDescription} />
              </Helmet>
              <AppBar>
                { 
                  (size === 'small' || size ==='xsmall') ?
                  <Button 
                    icon={ showSidebar ? <Close /> : <Java />} 
                    onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
                  /> :
                  null
                }
                <Heading level='3' margin='none'>
                  Help
                </Heading>
              </AppBar>
              <Box>
                <Box flex>
                  {children}
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default MainLayout;