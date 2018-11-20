import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

import styled from 'styled-components';

class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Helmet title={`Blog | ${config.siteTitle}`} />
          <h1>this is the blog ... </h1>
        </div>
      </Layout>
    );
  }
}

export default BlogPage;
