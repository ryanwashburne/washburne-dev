import React from 'react'

import Navbar from './navbar'

export default ({ title, description, children }) => {
  return (
    <div className="min-h-screen pt-8 lg:pt-16 pb-16 px-4 lg:px-0">
      <Navbar />
      <main className="max-w-lg mx-auto">
        <div className="mb-16 lg:mb-24">
          <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>
          {description && (
            <p className="text-black text-opacity-50 text-lg lg:text-xl">
              {description}
            </p>
          )}
        </div>
        {children}
      </main>
    </div>
  )
}
