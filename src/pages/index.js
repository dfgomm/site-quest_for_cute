import React from "react"
import Layout from '../components/layout'
import indexStyles from '../components/modules/index.module.css'


const IndexPage = () => {
    return (
        <Layout>
            <div className={indexStyles.indexCarousel_container}></div>
            <h1 className={indexStyles.indexHeader}>Latest Posts</h1>
            <div className={indexStyles.indexPost_container}>
                <div className={indexStyles.index_post}></div>
                <div className={indexStyles.index_post}></div>
                <div className={indexStyles.index_post}></div>
            </div>
            
            <h1 className={indexStyles.indexHeader}>Featured Items</h1>
            <div className={indexStyles.indexItem_container}>
                <div className={indexStyles.index_item}></div>
                <div className={indexStyles.index_item}></div>
                <div className={indexStyles.index_item}></div>
            </div>
        </Layout>
    )
}

export default IndexPage