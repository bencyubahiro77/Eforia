import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import Home from './pages/Home';


const App = () => {
  return (
    <>
       <Header />
      <main>
        <Routes>

        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App
