import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { slug },
      html,
    },
  } = data
  return (
    <Layout title={slug}>
      <section className="container mx-auto mt-16" style={{ maxWidth: 700 }}>
        <h1 className="text-2xl lg:text-right italic lg:sticky pt-2 top-0 w-full">
          {slug}
        </h1>
        <div
          className="markdown mt-8"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
      }
    }
  }
`
