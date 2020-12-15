import logo from './logo.svg';
import './App.css';

import Header from './components/Header/header'
import About from './components/About/about'
import Portfolio from './components/Portfolio/portfolio'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Background from './components/Background/background'


function App() {
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
  );
}

export default App;
