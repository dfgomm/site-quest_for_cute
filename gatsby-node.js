const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
      query {
        allWordpressPost {
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
          component: blogTemplate,
          path: `/blog/${edge.node.slug}`,
          context: {
            slug: edge.node.slug,
          }
        })
      }
    
      )
    }