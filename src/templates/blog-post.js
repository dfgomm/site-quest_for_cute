import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogNav from '../components/blognav'

import blogStyles from '../components/modules/blog.module.css'

export const query = graphql`
  query($slug: String!) {
    allWordpressCategory {
      edges {
        node {
          name
        }
      }
    }
    allWordpressPost (filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          slug
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
        <div className={blogStyles.blogContent_container}>
          <div className={blogStyles.blogPost_container}>
            <h1 className={blogStyles.blog_title} dangerouslySetInnerHTML={{ __html: post.title }} />
            <p className={blogStyles.blog_date}>{post.date}</p>
            <p className={blogStyles.blog_content} dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
        <BlogNav />
      </div>
    </Layout >
  )
}