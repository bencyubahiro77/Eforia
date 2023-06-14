import React from 'react'
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SingleBlog from './pages/Openblog'
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register';
import ChangePassword from './pages/ChangePassword';
import CreateBlogPage from './pages/CreateBlog';



const App = () => {
  const location = useLocation();

  const shouldShowHeaderAndFooter = location.pathname !== '/register' && location.pathname !== '/login' ;
  return (
    <>
     {shouldShowHeaderAndFooter && <Header />}
      <main>
        <Routes>
        <Route  element={<PrivateRoute />}>
               <Route path="/create" element={<CreateBlogPage />} />
               <Route path="/change-pass" element={<ChangePassword />} />
          </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App
