import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Arc3() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed python 60% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/arc4');
  };
  const Previous = () => {
    nav('/arc2');
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
In the early 19th century, Augustus Welby Northmore Pugin wrote Contrasts (1836) that, as the title suggested, contrasted the modern, industrial world, which he disparaged, with an idealized image of neo-medieval world. Gothic architecture, Pugin believed, was the only "true Christian form of architecture." The 19th-century English art critic, John Ruskin, in his Seven Lamps of Architecture, published 1849, was much narrower in his view of what constituted architecture. Architecture was the "art which so disposes and adorns the edifices raised by men ... that the sight of them" contributes "to his mental health, power, and pleasure".[18] For Ruskin, the aesthetic was of overriding significance. His work goes on to state that a building is not truly a work of architecture unless it is in some way "adorned". For Ruskin, a well-constructed, well-proportioned, functional building needed string courses or rustication, at the very least.

On the difference between the ideals of architecture and mere construction, the renowned 20th-century architect Le Corbusier wrote: "You employ stone, wood, and concrete, and with these materials you build houses and palaces: that is construction. Ingenuity is at work. But suddenly you touch my heart, you do me good. I am happy and I say: This is beautiful. That is Architecture". Le Corbusier's contemporary Ludwig Mies van der Rohe is said to have stated in a 1959 interview that "architecture starts when you carefully put two bricks together. There it begins.

Modern concepts
The notable 19th-century architect of skyscrapers, Louis Sullivan, promoted an overriding precept to architectural design: "Form follows function". While the notion that structural and aesthetic considerations should be entirely subject to functionality was met with both popularity and skepticism, it had the effect of introducing the concept of "function" in place of Vitruvius' "utility". "Function" came to be seen as encompassing all criteria of the use, perception and enjoyment of a building, not only practical but also aesthetic, psychological and cultural.

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

export default Arc3;