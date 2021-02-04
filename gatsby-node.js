const { resolve } = require('path')

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const result = await graphql(
    `
      {
        allGoogleDocs(filter: { document: { breadcrumb: { in: "blog" } } }) {
          nodes {
            document {
              id
              breadcrumb
            }
          }
        }
      }
    `,
  )

  if (result.errors) {
    reporter.panic(result.errors)
  }

  try {
    const { allGoogleDocs } = result.data

    if (allGoogleDocs) {
      allGoogleDocs.nodes.forEach(({ document: { id, breadcrumb } }) => {
        createPage({
          path: `/blog/${id}/${breadcrumb[breadcrumb.length - 1]}`,
          component: resolve(`src/templates/blog.js`),
          context: {
            id,
          },
        })
      })
    }
  } catch (e) {
    console.error(e)
  }
}
