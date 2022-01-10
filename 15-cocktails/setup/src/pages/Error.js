import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Page does not exit</h1>
      </div>
      <Link to="/" className='btn btn-primary'> 
        back home
      </Link>
    </section>
  )
}

export default Error
