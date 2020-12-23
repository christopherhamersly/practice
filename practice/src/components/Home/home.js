import React from 'react'

import Header from '../Header/header'
import About from '../About/about'
import Portfolio from '../Portfolio/portfolio'
import Contact from '../Contact/contact'
import Footer from '../Footer/footer'

function Home() {
  return (

    <div style={{
      backgroundImage: 'url("https://i.ibb.co/vxtf0cZ/geo-Background.png")', backgroundSize: 'auto'
    }}>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>

  )
}

export default Home
