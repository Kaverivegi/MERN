import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Pd2() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed python 40% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/pd3');
  };
  const Previous = () => {
    nav('/pd1');
  };
  const Chat = () => {
    nav('/chat');
  };

  return (
    <div className="body">
      <header>
        <div className="header-left">
          <h1>Gr8Learn</h1>
        </div>
        <div className="header-right">
          <button type="button" className="login-btn" onClick={Dashboard}>
            Dashboard
          </button>
          <button className="contact-btn" onClick={Chat}>Chat</button>
        </div>
      </header>
      <div className="main">
        <p>Definitions
Architecture can mean:

A general term to describe buildings and other physical structures.

The art and science of designing buildings and (some) nonbuilding structures.

The style of design and method of construction of buildings and other physical structures.

A unifying or coherent form or structure.

Knowledge of art, science, technology, and humanity.

The design activity of the architect, from the macro-level (urban design, landscape architecture) to the micro-level (construction details and furniture).

The practice of the architect, where architecture means offering or rendering professional services in connection with the design and construction of buildings, or built environments.

Theory

The philosophy of architecture is a branch of philosophy of art, dealing with aesthetic value of architecture, its semantics and in relation with development of culture. Many philosophers and theoreticians from Plato to Michel Foucault, Gilles Deleuze, Robert Venturi and Ludwig Wittgenstein have concerned themselves with the nature of architecture and whether or not architecture is distinguished from building.</p>    </div>
<footer>
      <div >
          <button type="button" className="footer-left" onClick={Previous}>
            Previous
          </button>
        </div>
        <div >
          <button type="button" className="footer-right" onClick={Next}>
            Next
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Pd2;