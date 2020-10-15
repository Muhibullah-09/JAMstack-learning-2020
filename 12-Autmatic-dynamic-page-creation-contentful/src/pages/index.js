import React from 'react';
import { graphql, Link } from 'gatsby';

export default ({data}) => {
    console.log(data);
    const posts = data.allContentfulBlogPost.edges.map((post) =>
      <li><Link to={post.node.title}>{post.node.title}</Link></li>
    );
    return (
        <ul>
            {posts}
        </ul>
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