import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default () => {
  return (
    <Layout title="404">
      <section className="container mx-auto mt-16 text-center">
        <p className="text-2xl font-bold">404: Page not found</p>
        <Link to="/">Home</Link>
      </section>
    </Layout>
  )
}
