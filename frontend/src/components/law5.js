import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Law5() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    nav('/dashboard');
  };
  const Previous = () => {
    nav('/Law4');
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
        <p>Virtual law firms
A 21st century development has been the appearance of the virtual law firm, a firm with a virtual business address but no brick & mortar office location open to the public, using modern telecommunications to operate from remote locations and provide its services to international clients, avoiding the costs of maintaining a physical premises with lower overheads than traditional law firms. This lower cost structure allows virtual law firms to bill clients on a contingency basis rather than by billable hours paid in advance by retainer.

Related innovations include alternative legal services provider (ALSP), legal outsourcing and what is sometimes called "NewLaw".

The largest law firms have more than 1,000 lawyers. These firms, often colloquially called "megafirms" or "BigLaw", generally have offices on several continents, bill US$750 per hour or higher, and have a high ratio of support staff per attorney.[20][21] Because of the localized and regional nature of firms, the relative size of a firm varies.

BigLaw firms
See also: List of largest law firms by revenue
The largest U.S.-based firms are often referenced as "BigLaw" firms, a phrase often used to describe large law firms that follow the Cravath System's "loosely pyramid-shaped hierarchy of advancement". BigLaw firms typically specialize in all categories of legal work with high billable hour rates, including mergers and acquisitions transactions, banking, and corporate litigation. These firms rarely do plaintiffs' personal injury work. However, in terms of revenue and employee headcount, the largest law firms are still smaller than their counterparts in other types of professional services like consulting and accounting.[citation needed]

In 2008, the largest law firm in the world was the British firm Clifford Chance, which had revenue of over US$2 billion. In 2020, Kirkland & Ellis came out on top with US$4.15 billion in revenue while Hogan Lovells rounded out the list at number ten with US$2.25 billion. Clifford Chance remains the only British firm among the top 10 considered "BigLaw". This can be compared with $404 billion for the world's largest firm by turnover ExxonMobil and $28 billion for the largest professional services firm Deloitte.

Worldwide
The largest law firms in the world are headquartered primarily in the United Kingdom, where they are deemed part of the Magic Circle, and in the United States, where they are known as "BigLaw" firms. Large firms of more than 1,000 lawyers are also found in Australia (MinterEllison, 1,500 attorneys), China (Dacheng, 2,100 attorneys) and Spain (Garrigues, 2,100 attorneys). The American system of licensing attorneys on a state-by-state basis, the tradition of having a headquarters in a single U.S. state and a close focus on profits per partner (as opposed to sheer scale) has to date limited the size of most American law firms. Thus, whilst the most profitable law firms in the world remain in New York, four of the six largest firms in the world are based in London in the United Kingdom.The sheer size of the United States results in a larger number of large firms overall – a 2003 paper noted that the U.S. had 901 law firms with more than 50 lawyers, while there were only 58 such firms in Canada, 44 in Great Britain, 14 in France, and 9 in Germany.During the 21st century, law firms have increased activity in transatlantic mergers, with globalisation of firms reaching an all-time peak in 2021. Both UK and U.S. firms are reported as continuing to seek an increasingly global reach, through mergers and acquisitions, in 2024.

Due to their size, the U.S.- and U.K.-based law firms are the most prestigious and powerful in the world, and they tend to dominate the international market for legal services. A 2007 research paper noted that firms from other countries merely pick up their leftovers: "[M]uch of the competition is relatively orderly whereby predominantly Australian, New Zealand, and Canadian firms compete for business not required by English or American law firms."

Since the early 1970s, the largest U.K. law firms have struggled to break into the much larger U.S. legal market, with only limited success in establishing footholds along the East Coast in important markets like New York City.In 2020, several of the largest U.K. firms began to invest in expansion into multiple regions of the United States, such as Silicon Valley. However, as of early 2024, the largest U.K. firms were losing ground on their home turf in London to rapid growth by the largest U.S. firms and were forced to raise salaries in response. The Americans recruited many British solicitors by offering more generous salaries, but also brought with them a different work-life balance, with higher billable hours requirements and the American expectation that lawyers routinely work on weekends.

Recession
As a result of the U.S. recession in 2008 and 2009 many U.S. law firms have downsized staff considerably, and some have closed. The Denver Post reported that major law firms have cut more than 10,000 jobs nationwide in 2009. On February 12, 2009, Bloomberg reported that 700 jobs were cut that one day at law firms across the country. Among the firms closed included Heller Ehrman, a San Francisco-based firm established in 1890 and Halliwells of the UK. Among those that survived, law firm layoffs became so common that trade publications like American Lawyer produced an ongoing "Layoff List" of the law firms nationwide that cut jobs.
Salaries
Law firm salary structures typically depend on firm size. Small-firm salaries vary widely within countries and from one country to the next, and are not often publicly available. Because most countries do not have unified legal professions, there are often significant disparities in income among the various legal professions within a particular country. Finally, the availability of salary data also depends upon the existence of journalists and sociologists able to collect and analyze such data.</p>    </div>
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

export default Law5;