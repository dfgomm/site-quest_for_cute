
const path = require('path')


module.exports.createPages = async ({ graphql, actions }) => {

 // import { paginate } from 'gatsby-awesome-pagination';


  const { createPage } = actions
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
  const blogCategoryFilter = path.resolve('./src/templates/blog-filter-category.js')
  const blogArchiveFilter = path.resolve('./src/templates/blog-filter-archive.js')

  const res = await graphql(`
      query {
        allWordpressPost {
          edges {
            node {
              slug
              date(formatString:"YYYY-MM")
            }
          }
        }
        allWordpressCategory {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)


 /*
  const blogPostsCount = res.data.allWordpressPost.edges.length
  const blogPostsPerPaginatedPage = 3
  const paginatedPagesCount = Math.ceil(blogPostsCount / blogPostsPerPaginatedPage)

  const paginationPath = (path, page, totalPages) => {
  if (page === 0) {
    return path
  } else if (page < 0 || page >= totalPages) {
    return ''
  } else {
    return `${path}/${page + 1}`
  }
}
*/


  
  res.data.allWordpressPost.edges.forEach((edge) => {
    createPage({
      component: blogPostTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      }
    })
  })


  //Blog list - organized by month/year
  res.data.allWordpressPost.edges.forEach((edge) => {
    createPage({
      component: blogArchiveFilter,
      path: `/blog/${edge.node.date}`,
      context: {
        slug: `${edge.node.date}-31`,
      }
    })
  })

  // UNPAGINATED
  //Blog list - organized by category
  res.data.allWordpressCategory.edges.forEach((edge) => {
    createPage({
      component: blogCategoryFilter,
      path: `/blog/category/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      }
    })
  })
  
}