import React from 'react'

import Layout from '../components/layout'

export default () => {
  return (
    <Layout title="Home">
      <section className="container mx-auto py-64">
        <h1 className="text-3xl lg:text-5xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary-dark">
            Ryan Washburne
          </span>
        </h1>
        <h2 className="text-lg text-gray-500">Analyst at Deloitte</h2>
        <div className="flex text-xs text-gray-500 mt-2">
          <a
            href="https://linkedin.com/in/ryanwashburne"
            className="underline mr-4 hover:text-gray-600"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ryan.washburne@gmail.com?subject=Hello"
            className="underline hover:text-gray-600"
          >
            Email
          </a>
        </div>
      </section>
      {/* <section className="container mx-auto">
        <p className="transform -rotate-90 origin-top-right text-right absolute left-0 text-xs text-gray-500">
          Selected Work
        </p>
        <div className="flex overflow-x-scroll">
          <div
            className="bg-blue-200 rounded h-64 mr-16"
            style={{ minWidth: 900 }}
          />
          <div
            className="bg-green-200 rounded h-64"
            style={{ minWidth: 900 }}
          />
          <div className="bg-red-200 rounded h-64" style={{ minWidth: 900 }} />
        </div>
      </section> */}
    </Layout>
  )
}
