import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';
import Chat from './chat';

function Pd1() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed personal development course 20% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/pd2');
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
        <p>Personal development

Personal development or self-improvement consists of activities that develop a person's capabilities and potential, build human capital, facilitate employability, enhance quality of life, and facilitate the realization of dreams and aspirations. Personal development may take place over the course of an individual's entire lifespan and is not limited to one stage of a person's life. It can include official and informal actions for developing others in roles such as teacher, guide, counselor, manager, coach, or mentor, and it is not restricted to self-help. When personal development takes place in the context of institutions, it refers to the methods, programs, tools, techniques, and assessment systems offered to support positive adult development at the individual level in organizations.
Overview
Main article: Education
Among other things, personal development may include the following activities:
Social entrepreneurship or civic engagement
Participating in festivals, conferences, or conventions
Improving self-awareness
Improving self-knowledge
Improving skills and/or learning new ones
Building or renewing identity/self-esteem
Developing strengths or talents
Improving a career
Identifying or improving potential
Building employability or (alternatively) human capital
Enhancing lifestyle and/or the quality of life and time-management
Improving health
Improving wealth or social status
Fulfilling aspirations
Initiating a life enterprise
Defining and executing personal development plans (PDPs)
Improving social relations or emotional intelligence
Spiritual identity development and recognition
A distinction can be made between personal development and personal growth. Although similar, both concepts portray different ideas. Personal development specifies the focus of the "what" that is evolving, while personal growth entails a much more holistic view of broader concepts including morals and values being developed.
Personal development can also include developing other people's skills and personalities.This can happen through roles such as those of a teacher or mentor, either through a personal competency (such as the alleged skill of certain managers in developing the potential of employees) or through a professional service (such as providing training, assessment, or coaching).

Beyond improving oneself and developing others, "personal development" labels a field of practice and research:

As a field of practice, personal development includes personal-development methods, learning programs, assessment systems, tools, and techniques.
As a field of research, personal-development topics appear in psychology journals, education research, management journals and books, and human-development economics.
Any sort of development—whether economic, political, biological, organizational or personal—requires a framework if one wishes to know whether a change has actually occurred.[8][need quotation to verify] In the case of personal development, an individual often functions as the primary judge of improvement or of regression, but the validation of objective improvement requires assessment using standard criteria.

Personal-development frameworks may include:

Goals or benchmarks that define the end-points
Strategies or plans for reaching goals
Measurement and assessment of progress, levels or stages that define milestones along a development path
A feedback system to provide information on changes
As an industry
Personal development as an industry has several business-relationship formats of operating. The main ways are business-to-consumer and business-to-business. However, there have been two new ways emerge: consumer-to-business and consumer-to-consumer. The personal development market had a global market size of 38.28 billion dollars in 2019.
Business-to-consumer market
A wide array of personal development products are available to individuals. Examples include self-help books; education technology, neuroenhancement, and experiential learning (instructor-led training, motivational speeches, seminars, social or spiritual retreats).

Domains
Higher education, cognitive training
Personal finance (including fintech)
Weight loss, physical fitness, nutrition, and beauty enhancement
Large-group awareness training
Sensory deprivation
Time-management
Yoga
Martial arts
Initiation ceremonies
Meditation
Asceticism
General methods of personal development also include:
Life coaching or counseling
Recommendation systems
Nootropics, such as caffeinated drinks
Brain computer interface
Virtual assistant
Business-to-business market
Some consulting firms such as DDI and FranklinCovey specialize in personal development, but as of 2009 generalist firms operating in the fields of human resources, recruitment and organizational strategy—such as Hewitt, Watson Wyatt Worldwide, Hay Group, McKinsey, Boston Consulting Group, and Korn/Ferry—have entered what they perceive as a growing market, not to mention smaller firms and self-employed professionals who provide consulting, training and coaching.[non-primary source needed]</p>    </div>
      <footer>
        <div >
          <button type="button" className="footer-right" onClick={Next}>
            Next
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Pd1;