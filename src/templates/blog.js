/*

import React from 'react'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

import blogStyles from '../components/modules/blog.module.css' 

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM DD, YYYY")
      body {
        json
      }
    }
  }`

const Blog = (props) => {
    return (
        <Layout>
            <h1 className={blogStyles.title}>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            <p><Link to="/blog">Go Back</Link></p>
            <p className={blogStyles.body}>{documentToReactComponents(props.data.contentfulBlogPost.body.json)}</p>
        </Layout>
    )
}

export default Blog */