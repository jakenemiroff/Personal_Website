import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
    </div>
  );
}

export default App;
