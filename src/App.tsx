import React from 'react';
import NavBar from './components/header/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Work from './components/work/Work';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Home />
        <About />
        <Work />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
