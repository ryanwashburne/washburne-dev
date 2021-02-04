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
        document: { name: { eq: "now" }, breadcrumb: { nin: "blog" } }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `)
  return (
    <Layout
      title="Now"
      description={
        <Link href="https://nownownow.com/about">What is a now page?</Link>
      }
    >
      <SEO keywords={[`now`, `list`]} title="Now" />
      <section>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  )
}
