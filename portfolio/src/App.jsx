import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [displayState, setDisplayState] = useState("");

  const DisplaySwitch = (state) =>{
    switch (state) {
      case "": 
        return <Home />;
      case "projects":
        return <Projects />;
      case "about":
        return <AboutMe />;
    };
  }

  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default App
