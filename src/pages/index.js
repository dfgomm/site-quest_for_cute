import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import indexStyles from '../components/modules/index.module.css'

import Carousel from 'nuka-carousel'
import header1 from '../img/header1.jpg'
import header2 from '../img/header2.jpg'
import header3 from '../img/header3.jpg'





const IndexPage = () => {
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
            <div className={indexStyles.indexCarousel_container}>
                
            </div>
            <h1 className={indexStyles.indexHeader}>Latest Posts</h1>
            <div className={indexStyles.indexPost_container}>
                <div className={indexStyles.indexPost_container}>
                    {data.allWordpressPost.edges.map((edge, i) => {
                        if (i < 4) {
                            return (
                                <div className={indexStyles.index_post}>
                                    <h2><Link to={`/blog/${edge.node.slug}`} className={indexStyles.post_title} dangerouslySetInnerHTML={{ __html: edge.node.title }}></Link></h2>
                                    <p className={indexStyles.post_date}>{edge.node.date}</p>
                                    <p className={indexStyles.post_excerpt} dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
                                    <p><Link to={`/blog/${edge.node.slug}`} className={indexStyles.post_link}>Read more</Link></p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            
            
        </Layout >
    )
}

export default IndexPage