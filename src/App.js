import React from 'react'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import './App.css'
import AboutUs from './pages/about/AboutUs'
import Features from './pages/featurs/Features'
import Footer from './pages/footer/Footer'

const App = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <div className='custom-gradient '>
        <Header />
        <Home />
      </div>
      <div className='mt-4 ' style={{ position: 'relative' }}>
        <AboutUs />
      </div>
      <div className='mt-4 ' style={{ position: 'relative' }}>
        <Features />
      </div>
      {/* <FooterHead /> */}
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App