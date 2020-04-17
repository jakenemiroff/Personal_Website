import React from 'react';
import NavBar from './components/header/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Home />
        <About />
    </div>
  );
}

export default App;
