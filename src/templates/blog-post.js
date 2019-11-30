import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

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
        <div className={blogStyles.blogContent_container}>
          <div className={blogStyles.blogPost_container}>
            <h1 className={blogStyles.blog_title} dangerouslySetInnerHTML={{ __html: post.title }} />
            <p className={blogStyles.blog_date}>{post.date}</p>
            <p><Link to="/blog" className={blogStyles.blog_link}>Go Back</Link></p>
            <p className={blogStyles.blog_content} dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
        <div className={blogStyles.blogNav_container}>
          <h2>Recent Posts</h2>
          <ol>
            {data.allWordpressPost.edges.map((edge, i) => {
              if (i < 5) {
                return (
                  <div className={blogStyles.blogNavList_container}>
                    <li className={blogStyles.blogNav_list}>
                      <h3><Link to={`/blog/${edge.node.slug}`} className={blogStyles.blogNav_link} dangerouslySetInnerHTML={{ __html: edge.node.title }}></Link></h3>
                    </li>
                  </div>
                )
              }
            })}
          </ol>
          <h2>Archive</h2>
          <ol>
            {data.allWordpressPost.edges.map((edge, i) => {
              if (i < 12) {
                return (
                  <div className={blogStyles.blogNavList_container}>
                    <li className={blogStyles.blogNav_list}>
                      <h3><Link to={`/blog/${edge.node.slug}`} className={blogStyles.blogNav_link} dangerouslySetInnerHTML={{ __html: edge.node.date }}></Link></h3>
                    </li>
                  </div>
                )
              }
            })}
          </ol>
          <h2>Categories</h2>
          <ol>
            {data.allWordpressCategory.edges.map((edge, i) => {
              if (i < 5) {
                return (
                  <div className={blogStyles.blogNavList_container}>
                    <li className={blogStyles.blogNav_list}>
                      <h3><Link to={`/blog/${edge.node.slug}`} className={blogStyles.blogNav_link} dangerouslySetInnerHTML={{ __html: edge.node.name }}></Link></h3>
                    </li>
                  </div>
                )
              }
            })}
          </ol>
        </div>
      </div>
    </Layout >
  )
}