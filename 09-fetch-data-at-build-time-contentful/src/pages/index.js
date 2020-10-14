import React from "react"
import { graphql } from "gatsby"
import moment from 'moment'; 

export default ( {data} ) =>{
  console.log(data);
  return(
    <div>
      <div>{data.allContentfulBlogPost.edges[0].node.title}</div>
      <div>{moment(data.allContentfulBlogPost.edges[0].node.publicationDate).format('LLL')}</div>
      <div>{data.allContentfulBlogPost.edges[0].node.content.content}</div>

      <hr/>
      <div>{data.allContentfulBlogPost.edges[1].node.title}</div>
      <div>{moment(data.allContentfulBlogPost.edges[1].node.publicationDate).format('LLL')}</div>
      <div>{data.allContentfulBlogPost.edges[1].node.content.content}</div>
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          publicationDate
          updatedAt
          content {
            content
          }
        }
      }
    }
  }
`