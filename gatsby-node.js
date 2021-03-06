/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
// const queries = require("./src/queries/queries")

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // The “graphql” function allows us to run arbitrary
//   // queries against the local Gatsby GraphQL schema. Think of
//   // it like the site has a built-in database constructed
//   // from the fetched data that you can run queries against.
//   const result = await graphql(queries)

//   // Check for any errors
//   if (result.errors) {
//     throw new Error(result.errors)
//   }

//   // Access query results via object destructuring
//   const { allWordpressPage, allWordpressPost } = result.data

//   // Create Page pages.
//   const pageTemplate = path.resolve(`./src/templates/page.js`)
//   // We want to create a detailed page for each page node.
//   // The path field contains the relative original WordPress link
//   // and we use it for the slug to preserve url structure.
//   // The Page ID is prefixed with 'PAGE_'
//   allWordpressPage.edges.forEach(edge => {
//     // Gatsby uses Redux to manage its internal state.
//     // Plugins and sites can use functions like "createPage"
//     // to interact with Gatsby.
//     createPage({
//       // Each page is required to have a `path` as well
//       // as a template component. The `context` is
//       // optional but is often necessary so the template
//       // can query data specific to each page.
//       path: edge.node.slug,
//       component: slash(pageTemplate),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })

//   const postTemplate = path.resolve(`./src/templates/post.js`)
//   const postsTemplate = path.resolve(`./src/pages/posts/index.js`)
//   // We want to create a detailed page for each post node.
//   // The path field stems from the original WordPress link
//   // and we use it for the slug to preserve url structure.
//   // The Post ID is prefixed with 'POST_'

//   // Create list of posts
//   createPage({
//     path: `/posts/`,
//     component: slash(postsTemplate)
//   })

//   allWordpressPost.edges.forEach(edge => {

//     // Create page for each post
//     createPage({
//       path: `/posts/${edge.node.slug}`,
//       component: slash(postTemplate),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })
// }

/**
 * strapi
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allStrapiBlogs {
        nodes {
          slug
        }
      }
      allContentfulBlog {
        nodes {
          slug
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allStrapiBlogs, allContentfulBlog } = result.data

  const blogTemplate = path.resolve(`./src/templates/blog-template.js`)

  const blogContentfulTemplate = path.resolve(
    `./src/templates/blog-contentful-template.js`
  )

  allStrapiBlogs.nodes.forEach(blog => {
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/blogs/${blog.slug}`,
      component: slash(blogTemplate),
      context: {
        slug: blog.slug,
      },
    })
  })

  allContentfulBlog.nodes.forEach((blog, index) => {
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/contentful/${blog.slug}`,
      component: slash(blogContentfulTemplate),
      context: {
        slug: blog.slug,
      },
    })
  })
}
