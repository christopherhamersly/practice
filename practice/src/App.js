import logo from './logo.svg';
import './App.css';
import React from 'react';
import Anime, { anime } from 'react-anime';
// import anime from 'animejs/lib/anime.es.js';

import Header from './components/Header/header'
import About from './components/About/about'
import Portfolio from './components/Portfolio/portfolio'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Background from './components/Background/background'
import { Wave } from 'react-animated-text'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import Home from './components/Home/home'
import Animated from './components/Animated/Animated'


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/'>
            <Animated />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

//  <div style={{
//       backgroundImage: 'url("https://i.ibb.co/vxtf0cZ/geo-Background.png")', backgroundSize: 'auto'
//     }}>
//       <Header />
//       <About />
//       <Portfolio />
//       <Contact />
//       <Footer /> 
//       </div>
export default App;
