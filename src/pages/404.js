import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Link from '../components/link'

export default () => {
  return (
    <Layout title="404">
      <SEO title="404" />
      <section className="flex flex-col items-center justify-center">
        <p className="text-2xl font-bold">404: Page not found</p>
        <Link to="/">Go Home</Link>
      </section>
    </Layout>
  )
}
