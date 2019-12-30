import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import BlogNav from '../components/blognav'

import blogStyles from '../components/modules/blog.module.css'

import { DiscussionEmbed } from 'disqus-react'



export const query = graphql`
  query($slug: String!) {
    allWordpressCategory {
      edges {
        node {
          name
        }
      }
    }
    allWordpressPost (filter: { slug: { eq: $slug } }) {
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
  const post = data.allWordpressPost.edges[0].node
  const slug = data.allWordpressPost.edges[0].node.slug
  const title = data.allWordpressPost.edges[0].node.title

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  }

  return (
    <Layout>
      <div className={blogStyles.blog_container}>
        <div className={blogStyles.blogContent_container}>
          <div className={blogStyles.blogPost_container}>
            <h1 className={blogStyles.blog_title} dangerouslySetInnerHTML={{ __html: post.title }} />
            <p><Link to="/blog/">Read more...</Link></p>
            <p className={blogStyles.blog_date}>{post.date}</p>
            <p className={blogStyles.blog_content} dangerouslySetInnerHTML={{ __html: post.content }} />
            <DiscussionEmbed {...disqusConfig} />
          </div>
        </div>
        <BlogNav />
      </div>
    </Layout >
  )
}