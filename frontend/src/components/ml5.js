import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';
import Chat from './chat';

function Ml5() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
   
    nav('/dashboard');
  };
  const Previous = () => {
    nav('/ml4');
  };
  const Complete=()=>{
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
          <button className="contact-btn" onClick={Chat}>Chat</button>
        </div>
      </header>
      <div className="main">
        <p>
Machine learning is one of the most exciting technologies that one would have ever come across. As is evident from the name, it gives the computer that which makes it more similar to humans: The ability to learn. Machine learning is actively being used today, perhaps in many more places than one would expect. 

Today, companies are using Machine Learning to improve business decisions, increase productivity, detect disease, forecast weather, and do many more things. With the exponential growth of technology, we not only need better tools to understand the data we currently have, but we also need to prepare ourselves for the data we will have. To achieve this goal we need to build intelligent machines. We can write a program to do simple things. But most of the time, Hardwiring Intelligence in it is difficult. The best way to do it is to have some way for machines to learn things themselves. A mechanism for learning – if a machine can learn from input then it does the hard work for us. This is where Machine Learning comes into action. Some of the most common examples are:

Image Recognition
Speech Recognition
Recommender Systems
Fraud Detection
Self Driving Cars
Medical Diagnosis
Stock Market Trading
Virtual Try On
</p>    </div>
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

export default Ml5;