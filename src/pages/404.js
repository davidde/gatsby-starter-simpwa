import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'

const NotFoundPage = () => (
  <div>
    <SEO title='404: Not found' />
    <h1>404: Page not found</h1>
    <p>
      Oops! The page you are looking for has been removed or relocated.
    </p>
    <Link to='/'>
      <p>Go Back</p>
    </Link>
  </div>
)

export default NotFoundPage
