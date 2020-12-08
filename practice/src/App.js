import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header/header'
import About from './components/About/about'
import Portfolio from './components/Portfolio/portfolio'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
