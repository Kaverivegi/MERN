import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './course.css';
import axios from 'axios';

function Ds() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    nav('/dashboard');
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const details = await axios.get("http://localhost:8000/dsgetjoinvalue");
        setValue(details.data.Joincount);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const name = localStorage.sname;
  const gmail = localStorage.gmail;

  const Join = async () => {
    localStorage.course="Ds";
    try {
      const details1 = await axios.get("http://localhost:8000/dsgetjoin/"+name+"/"+gmail);
      let count = value + 1;
      if (details1.data) {
        nav('/ds1');
      } else {
        const result = await axios.post("http://localhost:8000/dsjoin/"+name+"/"+gmail+"/"+count);
        if (result.data && result.data.success) {
          nav('/ds1');
        }
      }
    } catch (error) {
      console.error(error);
    }
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
          <button className="contact-btn">Contact Us</button>
        </div>
      </header>
      <div className="main"><img src='ds route.png'></img></div>
      <footer>
        <div className="footer-left">
          <button className="contact-btn" >Students : {value}</button>
        </div>
        <div className="footer-right">
          <button type="button" className="login-btn" onClick={Join}>
            Join
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Ds;
