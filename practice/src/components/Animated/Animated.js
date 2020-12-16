import React from 'react'
import { Wave } from 'react-animated-text'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'

function Animated() {
  return (
    <>
      <Wave text="EXAMPLE TEXT" effect="stretch" effectChange={2.2} />
      <Link to="/home" >Home
              </Link>
    </>
  )
}

export default Animated
