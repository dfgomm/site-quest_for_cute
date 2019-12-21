import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import BlogNav from '../components/blognav'

import blogStyles from '../components/modules/blog.module.css'

export const query = graphql`
  query($slug: String!, $limit: Int!, $skip: Int!) {
    allWordpressPost (filter: {categories: {elemMatch: {slug: { eq: $slug }}}} limit: $limit skip: $skip) {
      edges {
        node {
          title
          slug
          content
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressCategory (filter: {slug: {eq: $slug}}) {
      edges {
        node {
          slug
        }
      }
    }
  }
`


export default ({ data }) => {


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
          <p><Link to={`/blog/category/${data.allWordpressCategory.edges[0].node.slug}/2`}>Older Posts</Link></p>
          <p><Link to={`/blog/category/${data.allWordpressCategory.edges[0].node.slug}/4`}>Newer Posts</Link></p>
        </div>
        <BlogNav />
      </div>
    </Layout>
  )
}
/*
<p><Link to={`/blog/category/${data.allWordpressCategory.edges.node.slug}`}>TEST</Link></p>
<p><Link to={`/blog/category/${data.allWordpressCategory.edges.node.slug}`}>TEST</Link></p>
*/