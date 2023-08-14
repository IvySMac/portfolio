import { useState } from 'react'
import './App.css'
/*Pages*/
// import Home from './pages/Home'
// import Projects from './pages/Projects'
// import AboutMe from './pages/AboutMe'
/*Components*/
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [displayState, setDisplayState] = useState("");

  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default App
