"use client";

import React, { useEffect } from 'react';
import './navbar.css'; // CSS dosyasını burada içe aktarıyoruz

const Navbar: React.FC = () => {
  
  useEffect(() => {
    const header = document.querySelector(".start-style");

    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll >= 10) {
        header?.classList.remove('start-style');
        header?.classList.add('scroll-on');
      } else {
        header?.classList.remove('scroll-on');
        header?.classList.add('start-style');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup: Event listener'ı kaldır
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className="start-style">
      <nav className="navbar">
        <a className="navbar-brand" href=".">MindOrbit</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-links">
          <a className="nav-link" href=".">Home</a>
          <a className="nav-link" href="#">About</a>
          <a className="nav-link" href="#">Contact</a>
          <a className="nav-link" href="login">Login</a>
          <a className="nav-link" href="signup">Signup</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
