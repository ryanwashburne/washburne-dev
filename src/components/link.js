import React from 'react'
import { Link } from 'gatsby'

export default ({ to, href, className, ...props }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`link ${className}`}
        {...props}
      />
    )
  }
  return <Link to={to} className={`link ${className}`} {...props} />
}
