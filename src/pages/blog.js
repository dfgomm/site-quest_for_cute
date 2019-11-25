import React from "react"
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

import blogStyles from '../components/modules/blog.module.css'



const BlogPage = () => {
    const data = useStaticQuery(graphql`
  query {
    allWordpressPost (sort: {fields:date, order:DESC}) {
      edges {
        node {
          title
          slug
          excerpt
          date(formatString:"MMMM DD, YYYY")
        }
      }
    }
  }
  `)


  return (
    <Layout>
        <ol>
            {data.allWordpressPost.edges.map((edge) => {
                return (
                    <li>
                        <h2><Link to={`/blog/${edge.node.slug}`} className={blogStyles.title} dangerouslySetInnerHTML={{ __html: edge.node.title }}></Link></h2>
                        <p className={blogStyles.date}>{edge.node.date}</p>
                        <p className={blogStyles.excerpt} dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
                        <h2><Link to={`/blog/${edge.node.slug}`} className={blogStyles.title}>Read more</Link></h2>
                    </li>
                )
            })}
        </ol>
    </Layout>
)
}

export default BlogPage