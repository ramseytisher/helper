import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class ProjectsPage extends Component {
  render() {
    return (
      <>
        <Layout>
          <div>
            <Helmet title={`Projects | ${config.siteTitle}`} />
            <h1>this is the projects page ... </h1>
          </div>
        </Layout>
      </>
    );
  }
}

export default ProjectsPage;