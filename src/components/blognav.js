
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import blogStyles from '../components/modules/blog.module.css'

const BlogNav = () => {
    const data = useStaticQuery(graphql`
    query {
      allWordpressCategory {
        edges {
          node {
            name
            slug
          }
        }
      }
      allWordpressPost (sort: {fields:date, order:DESC}) {
        edges {
          node {
            title
            slug
            content
            date(formatString: "MMMM YYYY")
          }
        }
      }
    }
    `)
  
  
    return (
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
                        <h3><Link to={`/blog/category/${edge.node.slug}`} className={blogStyles.blogNav_link} dangerouslySetInnerHTML={{ __html: edge.node.name }}></Link></h3>
                      </li>
                    </div>
                  )
                }
              })}
            </ol>
          </div>
    )
  }
  
  export default BlogNav