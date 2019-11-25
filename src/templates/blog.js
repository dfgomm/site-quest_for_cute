import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

import blogStyles from '../components/modules/blog.module.css'

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`    




      

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  return (
    <Layout>
      <h1 className={blogStyles.title} dangerouslySetInnerHTML={{ __html: post.title}} />
      <p>{post.date}</p>
      <p><Link to="/blog">Go Back</Link></p>
      <p className={blogStyles.body} dangerouslySetInnerHTML={{ __html: post.content}} />
    </Layout>
  )
}