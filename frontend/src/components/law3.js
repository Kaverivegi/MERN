import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Law3() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed python 60% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/Law4');
  };
  const Previous = () => {
    nav('/Law2')
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

Financial indicators

Three financial statistics are typically used to measure and rank law firms' performance:
Profits per equity partner (PPEP or PPP): Net operating income divided by number of equity partners. High PPP is often correlated with prestige of a firm and its attractiveness to potential equity partners. However, the indicator is prone to manipulation by re-classifying less profitable partners as non-equity partners.
Revenue per lawyer (RPL): Gross revenue divided by number of lawyers. This statistic shows the revenue-generating ability of the firm's lawyers in general, but does not factor in the firm's expenses such as associate compensation and office overhead.
Average compensation of partners (ACP): Total amount paid to equity and nonequity partners (i.e., net operating income plus nonequity partner compensation) divided by the total number of equity and nonequity partners. This results in a more inclusive statistic than PPP, but remains prone to manipulation by changing expense policies and re-classifying less profitable partners as associates.


Structure and promotion

Partnership

Law firms are typically organized around partners, who are joint owners and business directors of the legal operation; associates, who are employees of the firm with the prospect of becoming partners; and a variety of staff employees, providing paralegal, clerical, and other support services. An associate may have to wait as long as 11 years before the decision is made as to whether the associate is made a partner. Many law firms have an "up or out policy", integral to the Cravath System, which had been pioneered during the early 20th century by partner Paul Cravath of Cravath, Swaine & Moore, and became widely adopted by, particularly, white-shoe firms;associates who do not make partner are required to resign, and may join another firm, become a solo practitioner, work in-house for a corporate legal department, or change professions. Burnout rates are notably high in the profession.

Making partner is very prestigious at large or mid-sized firms, due to the competition that results from higher associate-to-partner ratios. Such firms may take out advertisements in professional publications to announce who has made partner. Traditionally, partners shared directly in the profits of the firm, after paying salaried employees, the landlord, and the usual costs of furniture, office supplies, and books for the law library (or a database subscription). Partners in a limited liability partnership can largely operate autonomously with regard to cultivating new business and servicing existing clients within their book of business.

Partner compensation methods vary greatly among law firms. At major United States law firms, the "compensation spread" (ratio between the highest partner salary and lowest partner salary) among firms disclosing information ranges from 3:1 to 24:1. Higher spreads are intended to promote individual performance, while lower spreads are intended to promote teamwork and collegiality. 

Many large law firms have moved to a two-tiered partnership model, with equity and non-equity partners. Equity partners are considered to have ownership stakes in the firm, and share in the profits (and losses) of the firm. Non-equity partners are generally paid a fixed salary (albeit much higher than associates), and they are often granted certain limited voting rights with respect to firm operations.

The oldest continuing partnership in the United States is that of Cadwalader, Wickersham & Taft, founded in 1792 in New York City. The oldest law firm in continuous practice in the United States is Rawle & Henderson, founded in 1783 in Philadelphia.

Termination of one's partnership

It is rare for a partner to be forced out by fellow partners, although that can happen if the partner commits a crime or malpractice, experiences disruptive mental illness, or is not contributing to the firm's overall profitability. However, some large firms have written into their partnership agreement a forced retirement age for partners, which can be anywhere from age 65 on up. In contrast, most corporate executives are at much higher risk of being fired, even when the underlying cause is not directly their fault, such as a drop in the company's stock price. Worldwide, partner retirement ages can be difficult to estimate and often vary widely, particularly because in many countries it is illegal to mandate a retirement age.




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

export default Law3;