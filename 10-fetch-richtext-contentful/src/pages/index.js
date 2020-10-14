import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import moment from 'moment'

export default ({data}) => {
    console.log(data);
    return (
        <div>
            <div>{data.allContentfulBlogPost.edges[0].node.title}</div>
            <div>{documentToReactComponents(data.allContentfulBlogPost.edges[0].node.content.json)}</div>
            <div>{moment(data.allContentfulBlogPost.edges[0].node.publicationDate).format('LLL')}</div>
            <hr/>
            <div>{data.allContentfulBlogPost.edges[1].node.title}</div>
            <div>{documentToReactComponents(data.allContentfulBlogPost.edges[1].node.content.json)}</div>
            <div>{moment(data.allContentfulBlogPost.edges[1].node.publicationDate).format('LLL')}</div>
        </div>
    );
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          content {
            json
          }
          publicationDate
        }
      }
    }
  }
`