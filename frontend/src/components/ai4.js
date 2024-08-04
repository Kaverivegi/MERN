import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Ai4() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed python 80% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/ai5');
  };
   const Previous= () => {
    nav('/ai3');
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
        <p>What are the applications of AI?<br/>
Artificial intelligence has made its way into a wide variety of markets. Here are 11 examples.
<br/>
AI in healthcare. The biggest bets are on improving patient outcomes and reducing costs. Companies are applying machine learning to make better and faster medical diagnoses than humans. One of the best-known healthcare technologies is IBM Watson. It understands natural language and can respond to questions asked of it. The system mines patient data and other available data sources to form a hypothesis, which it then presents with a confidence scoring schema. Other AI applications include using online virtual health assistants and chatbots to help patients and healthcare customers find medical information, schedule appointments, understand the billing process and complete other administrative processes. An array of AI technologies is also being used to predict, fight and understand pandemics such as COVID-19.
<br/>
AI in business. Machine learning algorithms are being integrated into analytics and customer relationship management (CRM) platforms to uncover information on how to better serve customers. Chatbots have been incorporated into websites to provide immediate service to customers. The rapid advancement of generative AI technology such as ChatGPT is expected to have far-reaching consequences: eliminating jobs, revolutionizing product design and disrupting business models.
<br/>
AI in education. AI can automate grading, giving educators more time for other tasks. It can assess students and adapt to their needs, helping them work at their own pace. AI tutors can provide additional support to students, ensuring they stay on track. The technology could also change where and how students learn, perhaps even replacing some teachers. As demonstrated by ChatGPT, Google Bard and other large language models, generative AI can help educators craft course work and other teaching materials and engage students in new ways. The advent of these tools also forces educators to rethink student homework and testing and revise policies on plagiarism.
<br/>
AI in finance. AI in personal finance applications, such as Intuit Mint or TurboTax, is disrupting financial institutions. Applications such as these collect personal data and provide financial advice. Other programs, such as IBM Watson, have been applied to the process of buying a home. Today, artificial intelligence software performs much of the trading on Wall Street.
<br/>
AI in law. The discovery process -- sifting through documents -- in law is often overwhelming for humans. Using AI to help automate the legal industry's labor-intensive processes is saving time and improving client service. Law firms use machine learning to describe data and predict outcomes, computer vision to classify and extract information from documents, and NLP to interpret requests for information.
<br/>
AI in entertainment and media. The entertainment business uses AI techniques for targeted advertising, recommending content, distribution, detecting fraud, creating scripts and making movies. Automated journalism helps newsrooms streamline media workflows reducing time, costs and complexity. Newsrooms use AI to automate routine tasks, such as data entry and proofreading; and to research topics and assist with headlines. How journalism can reliably use ChatGPT and other generative AI to generate content is open to question.
<br/>
AI in software coding and IT processes. New generative AI tools can be used to produce application code based on natural language prompts, but it is early days for these tools and unlikely they will replace software engineers soon. AI is also being used to automate many IT processes, including data entry, fraud detection, customer service, and predictive maintenance and security.
<br/>
Security. AI and machine learning are at the top of the buzzword list security vendors use to market their products, so buyers should approach with caution. Still, AI techniques are being successfully applied to multiple aspects of cybersecurity, including anomaly detection, solving the false-positive problem and conducting behavioral threat analytics. Organizations use machine learning in security information and event management (SIEM) software and related areas to detect anomalies and identify suspicious activities that indicate threats. By analyzing data and using logic to identify similarities to known malicious code, AI can provide alerts to new and emerging attacks much sooner than human employees and previous technology iterations</p>    </div>
<br/>
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

export default Ai4;