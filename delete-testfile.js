//Mine A
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
  `);

//Mine B
const posts = res.data.allWordpressPost.edges;

//Mine C
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

//Mine D
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
                skip: i * 1,
                numPages,
                currentPage: i + 1,
            }
        })
    }
})

/* Hers A
const blogList = await graphql(`
    {
      allPrismicBlog(sort: { fields: [data___blog_post_date], order: DESC }, limit: 1000) {
        edges {
          node {
            uid
            data {
              author {
                uid
              }
              tag {
                uid
              }
            }
          }
        }
      }
    }
  `);
  */

/*Hers B
const posts = blogList.data.allPrismicBlog.edges;
*/

/* //Hers C
const authors = await graphql(`
    {
      allPrismicAuthor {
        edges {
          node {
            uid
          }
        }
      }
    }
  `);
*/

//authorUid = slug
//authorBlogs = posts.filter(post => post.node.)
//Hers D
authors.data.allPrismicAuthor.edges.forEach(edge => {
    const authorUid = edge.node.uid;
    const authorBlogs = posts.filter(post => post.node.data.author.uid === authorUid);
    const numAuthorPages = Math.ceil(authorBlogs.length / 1);
    for (let i = 0; i <= numAuthorPages; i++) {
        createPage({
            path: i === 0 ? `/author/${authorUid}` : `/author/${authorUid}/${i + 1}`,
            component: pageTemplates.Author,
            context: {
                limit: 1,
                skip: i * 1,
                numPages,
                currentPage: i + 1,
                uid: authorUid,
            },
        });
    }
});