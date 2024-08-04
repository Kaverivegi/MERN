import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Pd4() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed personal development course 80% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/pd5');
  };
  const Previous = () => {
    nav('/pd3');
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
In the early 19 higher education
During the 1960s a large increase in the number of students on American campuses led to research on the personal development needs of undergraduate students. Arthur Chickering defined seven vectors of personal development for young adults during their undergraduate years:

Developing competence
Managing emotions
Achieving autonomy and interdependence
Developing mature interpersonal relationships
Establishing personal identity
Developing purpose
Developing integrity
In the UK, personal development took a central place in university policy in 1997 when the Dearing Report declared that universities should go beyond academic teaching to provide students with personal development. In 2001 a Quality Assessment Agency for UK universities produced guidelines for universities to enhance personal development as:

a structured and supported process undertaken by an individual to reflect upon their own learning, performance and/or achievement and to plan for their personal, educational and career development;
objectives related explicitly to student development; to improve the capacity of students to understand what and how they are learning, and to review, plan and take responsibility for their own learning
In the 1990s, business schools began to set up specific personal-development programs for leadership and career orientation and in 1998 the European Foundation for Management Development set up the EQUIS accreditation system which specified that personal development must form part of the learning process through internships, working on team projects and going abroad for work or exchange programs.[citation needed]

The first personal development certification required for business school graduation originated in 2002 as a partnership between Metizo, a personal-development consulting firm, and the Euromed Management School in Marseilles: students must not only complete assignments but also demonstrate self-awareness and achievement of personal-development competencies.

As an academic department, personal development as a specific discipline is often associated with business schools. As an area of research, personal development draws on links to other academic disciplines:

Education for questions of learning and assessment
Psychology for motivation and personality
Sociology for identity and social networks
Economics for human capital and economic value
Philosophy for ethics and self-reflection
Developmental activities
Personal Development can include gaining self-awareness of the course of one's lifespan. It includes multiple definitions but is different from self knowledge. Self-awareness is more in depth and explores the conscious and unconscious aspects of ourselves. We are able to gain self-awareness through socializing and communicating according to the social behaviorism view. Self-awareness can also be a positive intrapersonal experience where one is able to reflect during a moment of action or past actions. Becoming more self aware can help us to increase our emotional intelligence, leadership skills, and performance.

The workplace
Abraham Maslow (1908–1970), proposed a hierarchy of needs with self actualization at the top, defined as "the desire to become more and more what one is, to become everything that one is capable of becoming". In other words, self actualization is the ambition to become a better version of oneself, to become everything one is capable of being.

Since Maslow himself believed that only a small minority of people self-actualize—he estimated one percent his hierarchy of needs had the consequence that organizations came to regard self-actualization or personal development as occurring at the top of the organizational pyramid, while openness and job security in the workplace would fulfill the needs of the mass of employees.

As organizations and labor markets became more global, responsibility for development shifted from the company to the individual.[clarification needed] In 1999 management thinker Peter Drucker wrote in the Harvard Business Review:

We live in an age of unprecedented opportunity: if you've got ambition and smarts, you can rise to the top of your chosen profession, regardless of where you started out. But with opportunity comes responsibility. Companies today aren't managing their employees' careers; knowledge workers must, effectively, be their own chief executive officers. It's up to you to carve out your place, to know when to change course, and to keep yourself engaged and productive during a work life that may span some 50 years.
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

export default Pd4;