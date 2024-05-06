import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About'
import Products from './pages/products/Products'
import Contact from './pages/contact/Contact'
import Sidebar from './components/sidebar/Sidebar';


const App = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  }

  const closeSideBar = () => {
    setSideBarOpen(false);
  };


  return (
    <div>
      <Header onMenuClick={toggleSideBar} />
      <div>
        <Sidebar isOpen={sideBarOpen} onClose={closeSideBar} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
