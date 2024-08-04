import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Arc5() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    nav('/dashboard');
  };
  const Previous = () => {
    nav('/arc4');
  };
  const Complete = () => {
    alert("Congratulations you completed your course 100%");
    nav('/dashboard');
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
          <button className="contact-btn" onClick={Complete}>Chat</button>
        </div>
      </header>
      <div className="main">
        <p>Nunzia Rondanini stated, "Through its aesthetic dimension architecture goes beyond the functional aspects that it has in common with other human sciences. Through its own particular way of expressing values, architecture can stimulate and influence social life without presuming that, in and of itself, it will promote social development.... To restrict the meaning of (architectural) formalism to art for art's sake is not only reactionary; it can also be a purposeless quest for perfection or originality which degrades form into a mere instrumentality".

Among the philosophies that have influenced modern architects and their approach to building design are Rationalism, Empiricism, Structuralism, Poststructuralism, Deconstruction and Phenomenology.

In the late 20th century a new concept was added to those included in the compass of both structure and function, the consideration of sustainability, hence sustainable architecture. To satisfy the contemporary ethos a building should be constructed in a manner which is environmentally friendly in terms of the production of its materials, its impact upon the natural and built environment of its surrounding area and the demands that it makes upon the natural environment for heating, ventilation and cooling, water use, waste products and lighting.</p>    </div>
<footer>
      <div >
          <button type="button" className="footer-left" onClick={Previous}>
            Previous
          </button>
        </div>
        <div >
          <button type="button" className="footer-right" onClick={Complete}>
            Complete
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Arc5;