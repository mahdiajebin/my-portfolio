import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />

          {/* Other routes if needed */}
        </Routes>
      </div>
      {/* <footer className="app-footer">
          <p>© Copyright {new Date().getFullYear()}. Made by Mahdia Jebin</p>
        
        </footer> */}
              <Footer />
    </Router>
    
  );
};

export default App;
