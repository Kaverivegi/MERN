import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Pd5() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    
    nav('/dashboard');
  };
  const Previous = () => {
    nav('/pd4');
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
        <p>Management professors Sumantra Ghoshal of the London Business School and Christopher Bartlett of the Harvard Business School wrote in 1997 that companies must manage people individually and establish a new work contract. On the one hand, the company must allegedly recognize that personal development creates economic value: "market performance flows not from the omnipotent wisdom of top managers but from the initiative, creativity and skills of all employees". On the other hand, employees should recognize that their work includes personal development and "embrace the invigorating force of continuous learning and personal development".
<br/>
The 1997 publication of Ghoshal's and Bartlett's Individualized Corporation corresponded to a change in career development from a system of predefined paths defined by companies, to a strategy defined by the individual and matched to the needs of organizations in an open landscape of possibilities.[non-primary source needed] Another contribution to the study of career development came with the recognition that women's careers show specific personal needs and different development paths from men. The 2007 study of women's careers by Sylvia Ann Hewlett Off-Ramps and On-Ramps had a major impact on the way companies view careers. Further work on the career as a personal development process came from study by Herminia Ibarra in her Working Identity on the relationship with career change and identity change, indicating that priorities of work and lifestyle continually develop through life.
<br/>
Personal development programs in companies fall into two categories: the provision of employee benefits and the fostering of development strategies.
<br/>
Employee surveys may help organizations find out personal-development needs, preferences and problems, and they use the results to design benefits programs. Typical programs in this category include:
<br/>
Work-life balance<br/>
Time management<br/>
Stress management<br/>
Health programs<br/>
Counseling<br/>
As an investment, personal development programs have the goal of increasing human capital or improving productivity, innovation or quality. Proponents actually see such programs not as a cost but as an investment with results linked to an organization's strategic development goals. Employees gain access to these investment-oriented programs by selection according to the value and future potential of the employee, usually defined in a talent management architecture including populations such as new hires, perceived high-potential employees, perceived key employees, sales staff, research staff and perceived future leaders. Organizations may also offer other (non-investment-oriented) programs to many or even all employees. Personal development also forms an element in management tools such as personal development planning, assessing one's level of ability using a competency grid, or getting feedback from a 360 questionnaire filled in by colleagues at different levels in the organization.
<br/>
A common criticism surrounding personal development programs is that they are often treated as an arbitrary performance management tool to pay lip service to, but ultimately ignored. As such, many companies have decided to replace personal development programs with SMART Personal Development Objectives, which are regularly reviewed and updated. Personal Development Objectives help employees achieve career goals and improve overall performance.
<br/>
Criticism<br/>
Scholars have targeted self-help claims as misleading and incorrect. In 2005, Steve Salerno portrayed the American self-help movement—he uses the acronym "SHAM": the "Self-Help and Actualization Movement"—not only as ineffective in achieving its goals but also as socially harmful, and that self-help customers keep investing more money in these services regardless of their effectiveness. Others similarly point out that with self-help books "supply increases the demand ... The more people read them, the more they think they need them ... more like an addiction than an alliance".
<br/>
Self-help writers have been described as working "in the area of the ideological, the imagined, the narrativized. ... although a veneer of scientism permeates their work, there is also an underlying armature of moralizing".</p>    </div>
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

export default Pd5;