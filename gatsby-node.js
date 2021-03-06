
const path = require('path')


module.exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
  const blogListTemplate = path.resolve('./src/templates/blog.js')
  const blogCategoryFilter = path.resolve('./src/templates/blog-filter-category.js')
  const blogArchiveFilter = path.resolve('./src/templates/blog-filter-archive.js')

  const blogList = await graphql(`
query {
  allWordpressPost {
    edges {
      node {
        slug
        date(formatString:"YYYY-MM")
      }
    }
  }
}
`);

  const categories = await graphql(`
query {
  allWordpressCategory {
    edges {
      node {
        slug
      }
    }
  }
}
`);

  const posts = blogList.data.allWordpressPost.edges;


  blogList.data.allWordpressPost.edges.forEach((edge) => {
    createPage({
      component: blogPostTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      }
    })
  })

  blogList.data.allWordpressPost.edges.forEach((edge) => {
    let blogPostsCount = posts.length
    let blogPostsPerPaginatedPage = 5
    let paginatedPagesCount = Math.ceil(blogPostsCount / blogPostsPerPaginatedPage)
    for (let i = 0; i <= paginatedPagesCount; i++) {
      createPage({
        component: blogListTemplate,
        path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
        context: {
          limit: blogPostsPerPaginatedPage,
          skip: i * blogPostsPerPaginatedPage,
          blogPostsPerPaginatedPage,
          paginatedPagesCount,
          currentPage: i + 1,        
        }
      })
    }
  })

  
  //Blog list - organized by month/year
  blogList.data.allWordpressPost.edges.forEach((edge) => {
    const date = edge.node.date
    let blogPostsCount = posts.length
    let blogPostsPerPaginatedPage = blogPostsCount
    let paginatedPagesCount = Math.ceil(blogPostsCount / blogPostsPerPaginatedPage)
    for (let i = 0; i <= paginatedPagesCount; i++) {
      createPage({
        component: blogArchiveFilter,
        path: i === 0 ? `/blog/${date}` : `/blog/${date}/${i + 1}`,
        context: {
          date,
          slug: `${date}-31`,
          limit: blogPostsPerPaginatedPage,
          skip: i * blogPostsPerPaginatedPage,
          blogPostsPerPaginatedPage,
          paginatedPagesCount,
          currentPage: i + 1,        
        }
      })
    }
  })


  categories.data.allWordpressCategory.edges.forEach((edge) => {
    const slug = edge.node.slug
    let blogPostsCount = posts.length
    let blogPostsPerPaginatedPage = 5
    let paginatedPagesCount = Math.ceil(blogPostsCount / blogPostsPerPaginatedPage)
    for (let i = 0; i <= paginatedPagesCount; i++) {
      createPage({
        component: blogCategoryFilter,
        path: i === 0 ? `/blog/category/${slug}` : `/blog/category/${slug}/${i + 1}`,
        context: {
          slug: slug,
          limit: blogPostsPerPaginatedPage,
          skip: i * blogPostsPerPaginatedPage,
          blogPostsPerPaginatedPage,
          paginatedPagesCount,
          currentPage: i + 1,
        }
      })
    }
  })


  
/* OLD AND UNPAGINATED-- Ignore
  blogList.data.allWordpressPost.edges.forEach((edge) => {
    createPage({
      component: blogPostTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      }
    })
  })
  

  //Blog list - organized by month/year

  
    //Blog list - organized by month?year OLD AND UNPAGINATED
    blogList.data.allWordpressPost.edges.forEach((edge) => {
      createPage({
        component: blogArchiveFilter,
        path: `/blog/${edge.node.date}`,
        context: {
          slug: `${edge.node.date}-31`,
        }
      })
    })
  

  
  //Blog list - organized by category
  categories.data.allWordpressCategory.edges.forEach((edge) => {
    createPage({
      component: blogCategoryFilter,
      path: `/blog/category/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      }
    })
  })
  */
}