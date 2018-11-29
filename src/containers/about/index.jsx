import React from "react";
import { StaticQuery, graphql } from "gatsby";

import styled from 'styled-components';

import NavCard from "../../components/NavCard";

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const DescriptionBlock = styled.div`
  grid-column: 1 / 3;
  grid-row: span 2;

  @media only screen and (max-width: 500px) {
    grid-column: span 4;
  }
`;

const AboutCard = styled.div`
  background-color: white;
  height: 100%;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const AboutHeader = styled.h1`
  margin-top: 0px;
`;

const AboutDrawer = styled.div`
  position: absolute;
  height: 100%;
  background-color: blue;
  width: 50%
`;

export default () => (
  <StaticQuery 
    query = {
      graphql`
        query AboutQuery {
          allMarkdownRemark(
            filter: {
              fileAbsolutePath: {regex: "/site/"}}
          ) {
            edges {
              node {
                id
                excerpt
                html
                frontmatter {
                  title
                }
              }
            }
          }
        }        
      `
    }
    render={data => (
      <>
        <AboutContainer>
          <DescriptionBlock>
            <AboutCard>
              <AboutHeader>
                {data.allMarkdownRemark.edges[0].node.frontmatter.title}
              </AboutHeader>
              <p>{data.allMarkdownRemark.edges[0].node.excerpt} </p>

            </AboutCard>
          </DescriptionBlock>
          <NavCard title="projects" link="/projects" />
          <NavCard title="blog" link="/blog" />
        </AboutContainer>
      </>
    )}  

  />
)
