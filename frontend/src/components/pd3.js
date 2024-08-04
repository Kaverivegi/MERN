import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Pd3() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed python 60% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/pd4');
  };
  const Previous = () => {
    nav('/pd2');
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
        <p>Historic treatises
The earliest surviving written work on the subject of architecture is De architectura by the Roman architect Vitruvius in the early 1st century AD. According to Vitruvius, a good building should satisfy the three principles of firmitas, utilitas, venustas, commonly known by the original translation – firmness, commodity and delight. An equivalent in modern English would be:

Durability – a building should stand up robustly and remain in good condition
Utility – it should be suitable for the purposes for which it is used
Beauty – it should be aesthetically pleasing
According to Vitruvius, the architect should strive to fulfill each of these three attributes as well as possible. Leon Battista Alberti, who elaborates on the ideas of Vitruvius in his treatise, De re aedificatoria, saw beauty primarily as a matter of proportion, although ornament also played a part. For Alberti, the rules of proportion were those that governed the idealized human figure, the Golden mean. The most important aspect of beauty was, therefore, an inherent part of an object, rather than something applied superficially, and was based on universal, recognizable truths. The notion of style in the arts was not developed until the 16th century, with the writing of Giorgio Vasari. By the 18th century, his Lives of the Most Excellent Painters, Sculptors, and Architects had been translated into Italian, French, Spanish, and English.

In the 16th century, Italian Mannerist architect, painter and theorist Sebastiano Serlio wrote Tutte L'Opere D'Architettura et Prospetiva (Complete Works on Architecture and Perspective). This treatise exerted immense influence throughout Europe, being the first handbook that emphasized the practical rather than the theoretical aspects of architecture, and it was the first to catalog the five orders.</p>    </div>
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

export default Pd3;