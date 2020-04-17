import React from 'react';
import NavBar from './components/header/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Work from './components/work/Work';
import Projects from './components/projects/Projects'
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Home />
        <About />
        <Work />
        <Projects />
    </div>
  );
}

export default App;
