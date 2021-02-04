import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Link from '../components/link'
import SEO from '../components/seo'

export default () => {
  const {
    googleDocs: {
      childMarkdownRemark: { html },
    },
  } = useStaticQuery(graphql`
    query {
      googleDocs(
        document: { name: { eq: "impossible" }, breadcrumb: { nin: "blog" } }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `)
  return (
    <Layout
      title="Impossible List"
      description={
        <Link href="https://impossiblehq.com/impossible-list/">
          What is an impossible list?
        </Link>
      }
    >
      <SEO keywords={[`impossible`, `list`]} title="Impossible" />
      <section>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  )
}
