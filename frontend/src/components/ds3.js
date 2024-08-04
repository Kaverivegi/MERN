import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Ds3() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed python 60% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/ds4');
  };
  const Previous = () => {
    nav('/ds2');
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
        p1


        p2
        p3


Etymology

Early usage
In 1962, John Tukey described a field he called "data analysis", which resembles modern data science.In 1985, in a lecture given to the Chinese Academy of Sciences in Beijing, C. F. Jeff Wu used the term "data science" for the first time as an alternative name for statistics.Later, attendees at a 1992 statistics symposium at the University of Montpellier  II acknowledged the emergence of a new discipline focused on data of various origins and forms, combining established concepts and principles of statistics and data analysis with computing.
The term "data science" has been traced back to 1974, when Peter Naur proposed it as an alternative name to computer science.In 1996, the International Federation of Classification Societies became the first conference to specifically feature data science as a topic.However, the definition was still in flux. After the 1985 lecture at the Chinese Academy of Sciences in Beijing, in 1997 C. F. Jeff Wu again suggested that statistics should be renamed data science. He reasoned that a new name would help statistics shed inaccurate stereotypes, such as being synonymous with accounting or limited to describing data.In 1998, Hayashi Chikio argued for data science as a new, interdisciplinary concept, with three aspects: data design, collection, and analysis.
During the 1990s, popular terms for the process of finding patterns in datasets (which were increasingly large) included "knowledge discovery" and "data mining".
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

export default Ds3;