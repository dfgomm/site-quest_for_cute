import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import BlogNav from '../components/blognav'

import blogStyles from '../components/modules/blog.module.css'

export const query = graphql`
  query($slug: String!) {
    allWordpressPost (filter: {categories: {elemMatch: {slug: { eq: $slug }}}}) {
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
  //const post = data.allWordpressPost.edges[0].node
  return (
    <Layout>
      <div className={blogStyles.blog_container}>
        <div className={blogStyles.blogContent_container}>
          <ol>
            {data.allWordpressPost.edges.map((edge) => {
              return (
                <div className={blogStyles.blogPost_container}>
                  <li className={blogStyles.blog_list}>
                    <h2><Link to={`/blog/${edge.node.slug}`} className={blogStyles.blog_title} dangerouslySetInnerHTML={{ __html: edge.node.title }}></Link></h2>
                    <p className={blogStyles.blog_date}>{edge.node.date}</p>
                    <p className={blogStyles.blog_content} dangerouslySetInnerHTML={{ __html: edge.node.content }} />
                  </li>
                </div>
              )
            })}
          </ol>
        </div>
        <BlogNav />
      </div>

    </Layout>
  )
}