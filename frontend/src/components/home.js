import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'; 
import Footer from './footer';

function Home() {
  const nav = useNavigate();

  const handleLogin = () => {
    nav('/login');
  };

  return (
    <div className='body'>
      <header>
        <div className="header-left">
          <h1>Gr8Learn</h1>
        </div>
        <div className="header-right">
          <button type="button" className="login-btn" onClick={handleLogin}>Login</button>
          <button className="contact-btn">Contact Us</button>
        </div>
      </header>
      <div className="main1"></div>
      <Footer />
    </div>
  );
}

export default Home;
