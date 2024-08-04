
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Law4() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed python 80% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/Law5');
  };
  const Previous = () => {
    nav('/Law3');
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

"Of counsel" role

In the United States, Canada and Japan, many large and midsize firms have attorneys with the job title of "counsel", "special counsel" or "of counsel." As the Supreme Court of California has noted, the title has acquired several related but distinct definitions which do not easily fit into the traditional partner-associate structure.[11] These attorneys are people who work for the firm, like associates, although some firms have an independent contractor relationship with their counsel. But unlike associates, and more like partners, they generally have their own clients, manage their own cases, and supervise associates. These relationships are structured to allow more senior attorneys to share in the resources and "brand name" of the firm without being a part of management or profit sharing decisions. The title is often seen among former associates who do not make partner, or who are laterally recruited to other firms, or who work as in-house counsel and then return to the big firm environment. At some firms, the title "of counsel" is given to retired partners who maintain ties to the firm. Sometimes "of counsel" refers to senior or experienced attorneys, such as foreign legal consultants, with specialized experience in particular aspects of law and practice. They are hired as independent contractors by large firms as a special arrangement, which may lead to profitable results for the partnership. In certain situations "of counsel" could be considered to be a transitional status in the firm.

Mergers and acquisitions between law firms

Mergers, acquisitions, division and reorganizations occur between law firms as in other businesses. The specific books of business and specialization of attorneys as well as the professional ethical structures surrounding conflict of interest can lead to firms splitting up to pursue different clients or practices, or merging or recruiting experienced attorneys to acquire new clients or practice areas. Results often vary between firms experiencing such transitions. Firms that gain new practice areas or departments through recruiting or mergers that are more complex and demanding (and typically more profitable) may see the focus, organization and resources of the firm shift dramatically towards those new departments. Conversely, firms may be merged among experienced attorneys as partners for purposes of shared financing and resources, while the different departments and practice areas within the new firm retain a significant degree of autonomy.

Law firm mergers tend to be assortative, in that only law firms operating in similar legal systems are likely to merge. For example, U.S. firms will often merge with English law firms, or law firms from other common law jurisdictions. A notable exception is King & Wood Mallesons, a multinational law firm that is the result of a merger between an Australian law firm and a Chinese law firm.

Though mergers are more common among better economies, slowing down a bit during recessions, big firms sometimes use mergers as a strategy to boost revenue during a recession. Nevertheless, data from Altman Weil indicates that only four firms merged in the first half of 2013, as compared to eight in the same period in 2012, and this was taken by them as indicating a dip in morale regarding the legal economy and the amount of demand.

Size

Law firms can vary widely in size. The smallest law firms are lawyers practicing alone, who form the vast majority of lawyers in nearly all countries.

Smaller firms tend to focus on particular specialties of the law (e.g. patent law, labor law, tax law, criminal defense, personal injury); larger firms may be composed of several specialized practice groups, allowing the firm to diversify its client base and market, and to offer a variety of services to their clients.

Large law firms usually have separate litigation and transactional departments. The transactional department advises clients and handles transactional legal work, such as drafting contracts, handling necessary legal applications and filings, and evaluating and ensuring compliance with relevant law; while the litigation department represents clients in court and handles necessary matters (such as discovery and motions filed with the court) throughout the process of litigation.

Anglo-American development

Boutique law firms
Lawyers in small cities and towns may still have old-fashioned general practices, but most urban lawyers tend to be highly specialized due to the overwhelming complexity of the law today. Thus, some small firms in the cities specialize in practicing only one kind of law (like employment, antitrust, intellectual property, investment funds, telecommunications or aviation) and are called boutique law firms.</p>    </div>
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

export default Law4;