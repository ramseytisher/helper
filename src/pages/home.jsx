import React from 'react'
import Helmet from "react-helmet";
import { graphql, navigate } from "gatsby";
import Img from "gatsby-image";

import { Grommet, Stack, Box } from 'grommet';

import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import theme from "../layout/theme";

export default () => (
  <Grommet theme={theme}>
    <Helmet title={config.siteTitle} />
    <SEO />
    
  </Grommet>
)
