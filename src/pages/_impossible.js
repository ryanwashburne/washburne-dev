import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

export default () => {
  const {
    markdownRemark: {
      frontmatter: { updated },
      html,
    },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { slug: { eq: "/impossible" } }) {
        html
        frontmatter {
          updated
        }
      }
    }
  `)

  return (
    <Layout title="Impossible">
      <section className="container mx-auto mt-16" style={{ maxWidth: 700 }}>
        <div className="mb-8">
          <h1 className="text-6xl font-bold">Impossible List</h1>
          <p className="italic text-gray-700">Last updated: {updated}</p>
        </div>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  )
}
