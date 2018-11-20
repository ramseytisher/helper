import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

import AboutContainer from "../containers/about";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <AboutContainer />
      </Layout>
    );
  }
}

export default AboutPage;