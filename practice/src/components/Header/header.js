// TODO
// need to work on the name, and work on the nav part

import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <h1> Chris Hamersly </h1>
      <nav align="center">
      <Link to="/"> About </Link>
      <Link to="/portfolio"> Portfolio </Link>
      <Link to="/contact"> Contact </Link>
      </nav>
    </>

  )
}

export default Header
