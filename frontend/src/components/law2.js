import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Law2() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed python 40% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/Law3');
  };
  const Previous= () => {
    nav('/Law1');
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


Law firm

A law firm is a business entity formed by one or more lawyers to engage in the practice of law. The primary service rendered by a law firm is to advise clients (individuals or corporations) about their legal rights and responsibilities, and to represent clients in civil or criminal cases, business transactions, and other matters in which legal advice and other assistance are sought.

Arrangements

Law firms are organized in a variety of ways, depending on the jurisdiction in which the firm practices. Common arrangements include:

Sole proprietorship, in which the attorney is the law firm and is responsible for all profit, loss and liability;

General partnership, in which all the attorneys who are members of the firm share ownership, profits and liabilities;

Professional corporations, which issue stock to the attorneys in a fashion similar to that of a business corporation;

Limited liability company, in which the attorney-owners are called "members" but are not directly liable to third party creditors of the law firm (prohibited as against public policy in many jurisdictions but allowed in others in the form of a "Professional Limited Liability Company" or "PLLC");

Professional association, which operates similarly to a professional corporation or a limited liability company;

Limited liability partnership (LLP), in which the attorney-owners are partners with one another, but no partner is liable to any creditor of the law firm nor is any partner liable for any negligence on the part of any other partner. The LLP is taxed as a partnership while enjoying the liability protection of a corporation.

</p>    </div>
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

export default Law2;