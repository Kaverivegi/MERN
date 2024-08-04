import React from 'react';
import './header.css'; // Assuming you have a styles.css file for your CSS
import { useNavigate } from 'react-router-dom';
function Header() {
    const nav=useNavigate();
    const Home=()=>{
        nav('/')
    }
    return (
        <header>
            <div className="header-left">
                <h1>Gr8Learn</h1>
            </div>
            <div className="header-right">
                <button type='button' className="login-btn" onClick={Home} >Home</button>
                <button className="contact-btn">Contact Us</button>
            </div>
        </header>
    );
}

export default Header;
