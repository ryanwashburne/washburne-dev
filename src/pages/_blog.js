import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'

export default () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { slug: { ne: "/impossible" } } }
        sort: { order: DESC, fields: [frontmatter___slug] }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout title="Blog">
      <section className="container mx-auto pt-16">
        {edges.map(
          (
            {
              node: {
                frontmatter: { slug },
              },
            },
            i,
          ) => {
            return (
              <div key={i}>
                <Link to={`/blog/${slug}`}>{slug}</Link>
              </div>
            )
          },
        )}
      </section>
    </Layout>
  )
}
