import React from 'react'
import { Link } from 'gatsby'

import SEO from './seo'

export default ({ title = '', children }) => {
  return (
    <div className="min-h-screen">
      <SEO keywords={[`ryan`, `washburne`, `portfolio`]} title={title} />
      <header className="container mx-auto text-xs pt-3 flex items-center">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/blog" className="mr-4">
          Blog
        </Link>
        <Link to="/impossible">Impossible</Link>
      </header>

      <main className="pb-16">{children}</main>
    </div>
  )
}
