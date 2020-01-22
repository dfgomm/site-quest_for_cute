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
                <Carousel
                    autoplay={true}
                    autoplayInterval={5000}
                    pauseOnHover={false}
                    wrapAround={true}
                    renderCenterLeftControls={({ previousSlide }) => (
                        <button onClick={previousSlide} className={indexStyles.indexCarousel_button}><i className="fas fa-arrow-left"></i></button>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <button onClick={nextSlide} className={indexStyles.indexCarousel_button}><i className="fas fa-arrow-right"></i></button>
                    )}>
                    <div className={indexStyles.indexCarousel_slideContainer}>
                        <a href="https://www.etsy.com/shop/QuestforCute" target="__blank"><img src={header1} alt="Pencil case with cat, heart, and cupcake design."></img></a>
                        <div>
                            <h2>Shop</h2>
                        </div>
                    </div>
                    <div className={indexStyles.indexCarousel_slideContainer}>
                        <Link to="/blog"><img src={header2} alt="Notepad next to a cup of coffee."></img></Link>
                        <div>
                            <h2>Blog</h2>
                        </div>
                    </div>
                    <div className={indexStyles.indexCarousel_slideContainer}>
                        <a href="https://etsy.us7.list-manage.com/subscribe?u=51a896ffcc9959f46b93e215a&id=d52a3c39d8" target="__blank"><img src={header3} alt="Colorful pencil cases."></img></a>
                        <div>
                            <h2>Cute Castle VIP</h2>
                            <p>Save 20%!</p>
                        </div>
                    </div>
                </Carousel>
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

/* INCLUDE ABOVE CLOSING LAYOUT TAG ONCE DEIDRE PROVIDES ETSY API KEY
<h1 className={indexStyles.indexHeader}>Featured Items</h1>
            <div className={indexStyles.indexItem_container}>
                <div className={indexStyles.index_item}></div>
                <div className={indexStyles.index_item}></div>
                <div className={indexStyles.index_item}></div>
            </div>
            */