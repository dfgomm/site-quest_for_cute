import React from "react"
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

import BlogNav from '../components/blognav'

import blogStyles from '../components/modules/blog.module.css'



const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allWordpressCategory {
      edges {
        node {
          name
        }
      }
    }
    allWordpressPost (sort: {fields:date, order:DESC}) {
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
  `)


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

export default BlogPage