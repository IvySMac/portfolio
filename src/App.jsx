import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
