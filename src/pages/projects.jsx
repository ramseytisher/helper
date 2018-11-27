import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

import ProjectNav from '../components/ProjectNav';

class ProjectsPage extends Component {
  render() {
    return (
      <>
       <ProjectNav />
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