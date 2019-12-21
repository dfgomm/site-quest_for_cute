
const path = require('path')


module.exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
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


  //Blog list - organized by month/year
  blogList.data.allWordpressPost.edges.forEach((edge) => {
    createPage({
      component: blogArchiveFilter,
      path: `/blog/${edge.node.date}`,
      context: {
        slug: `${edge.node.date}-31`,
      }
    })
  })


  categories.data.allWordpressCategory.edges.forEach((edge) => {
    const slug = edge.node.slug
    const blogPostsCount = posts.length
    const blogPostsPerPaginatedPage = 3
    const paginatedPagesCount = Math.ceil(blogPostsCount / blogPostsPerPaginatedPage)
    for (let i = 0; i <= paginatedPagesCount; i++) {
      createPage({
        component: blogCategoryFilter,
        path: i === 0 ? `/blog/category/${slug}` : `/blog/category/${slug}/${i + 1}`,
        context: {
          slug: slug,
          limit: blogPostsPerPaginatedPage,
          skip: i * blogPostsPerPaginatedPage,
          paginatedPagesCount,
          currentPage: i + 1,
        }
      })
    }
  })

  /* OLD AND UNPAGINATED -- IGNORE
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