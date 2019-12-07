const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
  const blogCategoryFilter = path.resolve('./src/templates/blog-filter-category.js')

  const res = await graphql(`
      query {
        allWordpressPost {
          edges {
            node {
              slug
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

  res.data.allWordpressPost.edges.forEach((edge) => {
    createPage({
      component: blogPostTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      }
    })
  })

  res.data.allWordpressCategory.edges.forEach((edge) => {
    createPage({
      component: blogCategoryFilter,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      }
    })
  })

}