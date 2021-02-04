import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <div className="fixed bottom-0 left-0 w-full text-base">
      <div className="flex items-center justify-center lg:justify-start bg-white lg:bg-transparent border-t-2 lg:border-none p-4">
        <p className="hidden lg:block text-black text-opacity-50 text-xs uppercase flex-grow">
          Ryan Washburne
        </p>
        <Link to="/" className="mx-4 link">
          Home
        </Link>
        <Link to="/impossible" className="mx-4 link">
          Impossible
        </Link>
        <Link to="/now" className="mx-4 link">
          Now
        </Link>
      </div>
    </div>
  )
}
