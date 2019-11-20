import React from "react"
import Layout from '../components/layout'
import indexStyles from '../components/modules/index.module.css'


const IndexPage = () => {
    return (
        <Layout>
            <div className={indexStyles.indexCarousel_container}></div>
            <h1 className={indexStyles.indexHeader}>Latest Posts</h1>
            <h1 className={indexStyles.indexHeader}>Featured Items</h1>
        </Layout>
    )
}

export default IndexPage