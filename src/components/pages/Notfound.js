import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
  return (
    <div>
      <h2> 404 error</h2>
      <h5> Sorry that page does not exist </h5>
      <button className="btn"><Link style={{color:'white'}}to="/"> Go Back Home</Link></button>
    </div>
  )
}
