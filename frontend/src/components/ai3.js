import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';
import Chat from './chat';

function Ai3() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed python 60% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/ai4');
  };
 const Previous = () => {
    nav('/ai2');
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

Strong AI vs. weak AI<br/>
AI can be categorized as weak or strong.
<br/>
Weak AI, also known as narrow AI, is designed and trained to complete a specific task. Industrial robots and virtual personal assistants, such as Apple's Siri, use weak AI.
Strong AI, also known as artificial general intelligence (AGI), describes programming that can replicate the cognitive abilities of the human brain. When presented with an unfamiliar task, a strong AI system can use fuzzy logic to apply knowledge from one domain to another and find a solution autonomously. In theory, a strong AI program should be able to pass both a Turing test and the Chinese Room argument.
<br/>
What are the 4 types of artificial intelligence?<br/>
Arend Hintze, an assistant professor of integrative biology and computer science and engineering at Michigan State University, explained that AI can be categorized into four types, beginning with the task-specific intelligent systems in wide use today and progressing to sentient systems, which do not yet exist. The categories are as follows.
<br/>
Type 1: Reactive machines. These AI systems have no memory and are task-specific. An example is Deep Blue, the IBM chess program that beat Garry Kasparov in the 1990s. Deep Blue can identify pieces on a chessboard and make predictions, but because it has no memory, it cannot use past experiences to inform future ones.
<br/>Type 2: Limited memory. These AI systems have memory, so they can use past experiences to inform future decisions. Some of the decision-making functions in self-driving cars are designed this way.
<br/>Type 3: Theory of mind. Theory of mind is a psychology term. When applied to AI, it means the system would have the social intelligence to understand emotions. This type of AI will be able to infer human intentions and predict behavior, a necessary skill for AI systems to become integral members of human teams.
<br/>Type 4: Self-awareness. In this category, AI systems have a sense of self, which gives them consciousness. Machines with self-awareness understand their own current state. This type of AI does not yet exist.
<br/>
What are examples of AI technology and how is it used today?<br/>
AI is incorporated into a variety of different types of technology. Here are seven examples.
<br/>
Automation. When paired with AI technologies, automation tools can expand the volume and types of tasks performed. An example is robotic process automation (RPA), a type of software that automates repetitive, rules-based data processing tasks traditionally done by humans. When combined with machine learning and emerging AI tools, RPA can automate bigger portions of enterprise jobs, enabling RPA's tactical bots to pass along intelligence from AI and respond to process changes.
<br/>
Machine learning. This is the science of getting a computer to act without programming. Deep learning is a subset of machine learning that, in very simple terms, can be thought of as the automation of predictive analytics. There are three types of machine learning algorithms:
<br/>
Supervised learning. Data sets are labeled so that patterns can be detected and used to label new data sets.
Unsupervised learning. Data sets aren't labeled and are sorted according to similarities or differences.
Reinforcement learning. Data sets aren't labeled but, after performing an action or several actions, the AI system is given feedback.
Machine vision. This technology gives a machine the ability to see. Machine vision captures and analyzes visual information using a camera, analog-to-digital conversion and digital signal processing. It is often compared to human eyesight, but machine vision isn't bound by biology and can be programmed to see through walls, for example. It is used in a range of applications from signature identification to medical image analysis. Computer vision, which is focused on machine-based image processing, is often conflated with machine vision.
<br/>
Natural language processing (NLP). This is the processing of human language by a computer program. One of the older and best-known examples of NLP is spam detection, which looks at the subject line and text of an email and decides if it's junk. Current approaches to NLP are based on machine learning. NLP tasks include text translation, sentiment analysis and speech recognition.
<br/>
Robotics. This field of engineering focuses on the design and manufacturing of robots. Robots are often used to perform tasks that are difficult for humans to perform or perform consistently. For example, robots are used in car production assembly lines or by NASA to move large objects in space. Researchers also use machine learning to build robots that can interact in social settings.
<br/>
Self-driving cars. Autonomous vehicles use a combination of computer vision, image recognition and deep learning to build automated skills to pilot a vehicle while staying in a given lane and avoiding unexpected obstructions, such as pedestrians.
<br/>
Text, image and audio generation. Generative AI techniques, which create various types of media from text prompts, are being applied extensively across businesses to create a seemingly limitless range of content types from photorealistic art to email responses and screenplays.</p>    </div>
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

export default Ai3;