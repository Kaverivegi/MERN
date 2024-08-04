import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Ai5() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    nav('/dashboard');
  };
  const Previous = () => {
    nav('/ai4');
  };
  const Complete = () => {
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
        <p>AI in manufacturing. Manufacturing has been at the forefront of incorporating robots into the workflow. For example, the industrial robots that were at one time programmed to perform single tasks and separated from human workers, increasingly function as cobots: Smaller, multitasking robots that collaborate with humans and take on responsibility for more parts of the job in warehouses, factory floors and other workspaces.
        <br/>
AI in banking. Banks are successfully employing chatbots to make their customers aware of services and offerings and to handle transactions that don't require human intervention. AI virtual assistants are used to improve and cut the costs of compliance with banking regulations. Banking organizations use AI to improve their decision-making for loans, set credit limits and identify investment opportunities.
<br/>
AI in transportation. In addition to AI's fundamental role in operating autonomous vehicles, AI technologies are used in transportation to manage traffic, predict flight delays, and make ocean shipping safer and more efficient. In supply chains, AI is replacing traditional methods of forecasting demand and predicting disruptions, a trend accelerated by COVID-19 when many companies were caught off guard by the effects of a global pandemic on the supply and demand of goods.
<br/>
Augmented intelligence vs. artificial intelligence
Some industry experts have argued that the term artificial intelligence is too closely linked to popular culture, which has caused the general public to have improbable expectations about how AI will change the workplace and life in general. They have suggested using the term augmented intelligence to differentiate between AI systems that act autonomously -- popular culture examples include Hal 9000 and The Terminator -- and AI tools that support humans.
<br/>
Augmented intelligence. Some researchers and marketers hope the label augmented intelligence, which has a more neutral connotation, will help people understand that most implementations of AI will be weak and simply improve products and services. Examples include automatically surfacing important information in business intelligence reports or highlighting important information in legal filings. The rapid adoption of ChatGPT and Bard across industry indicates a willingness to use AI to support human decision-making.
Artificial intelligence. True AI, or AGI, is closely associated with the concept of the technological singularity -- a future ruled by an artificial superintelligence that far surpasses the human brain's ability to understand it or how it is shaping our reality. This remains within the realm of science fiction, though some developers are working on the problem. Many believe that technologies such as quantum computing could play an important role in making AGI a reality and that we should reserve the use of the term AI for this kind of general intelligence.
<br/>Ethical use of artificial intelligence<br/>
While AI tools present a range of new functionality for businesses, the use of AI also raises ethical questions because, for better or worse, an AI system will reinforce what it has already learned.
<br/>
This can be problematic because machine learning algorithms, which underpin many of the most advanced AI tools, are only as smart as the data they are given in training. Because a human being selects what data is used to train an AI program, the potential for machine learning bias is inherent and must be monitored closely.
<br/>
Anyone looking to use machine learning as part of real-world, in-production systems needs to factor ethics into their AI training processes and strive to avoid bias. This is especially true when using AI algorithms that are inherently unexplainable in deep learning and generative adversarial network (GAN) applications.
<br/>
Explainability is a potential stumbling block to using AI in industries that operate under strict regulatory compliance requirements. For example, financial institutions in the United States operate under regulations that require them to explain their credit-issuing decisions. When a decision to refuse credit is made by AI programming, however, it can be difficult to explain how the decision was arrived at because the AI tools used to make such decisions operate by teasing out subtle correlations between thousands of variables. When the decision-making process cannot be explained, the program may be referred to as black box AI.</p>    </div>
<br/>
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

export default Ai5;