import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import BlogNav from '../components/blognav'

import blogStyles from '../components/modules/blog.module.css'

export const query = graphql`
  query($slug: String!, $limit: Int!, $skip: Int!) {
    allWordpressPost (filter: {categories: {elemMatch: {slug: { eq: $slug }}}} limit: $limit skip: $skip) {
      edges {
        node {
          title
          slug
          content
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressCategory (filter: {slug: {eq: $slug}}) {
      edges {
        node {
          slug
        }
      }
    }
  }
`


export default ({ data, pageContext }) => {
  const currentPage = pageContext.currentPage

  /*
  let blogPostsCount = posts.length
  let blogPostsPerPaginatedPage = 3
  let paginatedPagesCount = Math.ceil(blogPostsCount / blogPostsPerPaginatedPage)
*/
  
  //needs to change based on filter
  const paginatedPagesCount = pageContext.paginatedPagesCount



  const isFirst = currentPage === 1
  const isLast = currentPage === paginatedPagesCount
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout {...pageContext}>
      {!isFirst && (
            <Link to={`blog/category/${pageContext.slug}/${prevPage}`} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
              <Link to={`blog/category/${pageContext.slug}/${nextPage}`} rel="next">
                Next Page →
              </Link>
           )}
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
          {!isFirst && (
            <Link to={`blog/category/${pageContext.slug}/${prevPage}`} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
              <Link to={`blog/category/${pageContext.slug}/${nextPage}`} rel="next">
                Next Page →
              </Link>
           )}
        </div>

        <BlogNav />
      </div>
    </Layout>
  )
}


/* STRUCTURE FOR NAVIGATION LINKS? NOT SURE HOW TO INCORPORATE.
class BlogList extends React.component {
  render() {
    const { currentPage, paginatedPagesCount } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === paginatedPagesCount
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
       // code to display a list of posts
       {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    )
  }
}
*/