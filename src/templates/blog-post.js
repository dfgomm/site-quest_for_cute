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
      <div className={blogStyles.blog_container}>
        <h1 className={blogStyles.blog_title} dangerouslySetInnerHTML={{ __html: post.title }} />
        <p className={blogStyles.blog_date}>{post.date}</p>
        <p><Link to="/blog"  className={blogStyles.blog_link}>Go Back</Link></p>
        <p className={blogStyles.blog_content} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}