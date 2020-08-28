// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   const blogTemplate = require.resolve(`./src/templates/blog.js`)

//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         filter: { frontmatter: { slug: { ne: "/impossible" } } }
//         sort: { order: DESC, fields: [frontmatter___slug] }
//       ) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: `/blog/${node.frontmatter.slug}`,
//       component: blogTemplate,
//       context: {
//         slug: node.frontmatter.slug,
//       },
//     })
//   })
// }
