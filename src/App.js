import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Navbar from "./components/navbar/Navbar";
import BlogList from "./pages/BlogList";
import BlogDetail from './pages/BlogDetail';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="" element={<BlogList />} />
      <Route path=":blog" element={<BlogDetail />} />
      </Routes>
      <Route path="/" element={<Home />} />
    <Route/>
    </Routes>
    </BrowserRouter>
  );
};

export default App