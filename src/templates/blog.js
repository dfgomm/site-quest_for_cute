import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import BlogNav from '../components/blognav'

import blogStyles from '../components/modules/blog.module.css'

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allWordpressPost (limit: $limit skip: $skip) {
      totalCount
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


export default ({ data, pageContext }) => {
  let filteredPostCount = data.allWordpressPost.totalCount //counts all posts without limit or skip
  let blogPostsPerPaginatedPage = pageContext.blogPostsPerPaginatedPage
  let paginatedPagesCount = Math.ceil(filteredPostCount / blogPostsPerPaginatedPage)

  //For navigation links (next and previous page)
  const currentPage = pageContext.currentPage
  let isFirst = currentPage === 1
  let isLast = currentPage === paginatedPagesCount
  let prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  let nextPage = (currentPage + 1).toString()

  return (
    <Layout {...pageContext}>
      <div className={blogStyles.paginationLink_container}>
      {!isFirst && (
        <p>
          <Link className={blogStyles.paginationLink_previous} to={`blog/${prevPage}`} rel="prev">
            ← Previous Page
          </Link>
        </p>
      )}
      {!isLast && (
        <p>
          <Link className={blogStyles.paginationLink_next} to={`blog/${nextPage}`} rel="next">
            Next Page →
          </Link>
        </p>
      )}
      </div>
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
      <div className={blogStyles.paginationLink_container}>
      {!isFirst && (
        <p>
          <Link className={blogStyles.paginationLink_previous} to={`blog/${prevPage}`} rel="prev">
            ← Previous Page
          </Link>
        </p>
      )}
      {!isLast && (
        <p>
          <Link className={blogStyles.paginationLink_next} to={`blog/${nextPage}`} rel="next">
            Next Page →
          </Link>
        </p>
      )}
      </div>
    </Layout>
  )
}