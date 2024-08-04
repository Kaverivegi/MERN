import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Ml3() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed machine learning 60% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/ml4');
  };
  const Previous = () => {
    nav('/ml2');
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
        <p>Supervised learning
Main article: Supervised learning

A support-vector machine is a supervised learning model that divides the data into regions separated by a linear boundary. Here, the linear boundary divides the black circles from the white.
Supervised learning algorithms build a mathematical model of a set of data that contains both the inputs and the desired outputs.<br/> The data is known as training data, and consists of a set of training examples. Each training example has one or more inputs and the desired output, also known as a supervisory signal. In the mathematical model, each training example is represented by an array or vector, sometimes called a feature vector, and the training data is represented by a matrix. Through iterative optimization of an objective function, supervised learning algorithms learn a function that can be used to predict the output associated with new inputs.<br/> An optimal function allows the algorithm to correctly determine the output for inputs that were not a part of the training data. An algorithm that improves the accuracy of its outputs or predictions over time is said to have learned to perform that task.<br/>

Types of supervised-learning algorithms include active learning, classification and regression.<br/> Classification algorithms are used when the outputs are restricted to a limited set of values, and regression algorithms are used when the outputs may have any numerical value within a range. As an example, for a classification algorithm that filters emails, the input would be an incoming email, and the output would be the name of the folder in which to file the email.

Similarity learning is an area of supervised machine learning closely related to regression and classification, but the goal is to learn from examples using a similarity function that measures how similar or related two objects are. It has applications in ranking, recommendation systems, visual identity tracking, face verification, and speaker verification.

Unsupervised learning
Main article: Unsupervised learning
See also: Cluster analysis
Unsupervised learning algorithms find structures in data that has not been labeled, classified or categorized. Instead of responding to feedback, unsupervised learning algorithms identify commonalities in the data and react based on the presence or absence of such commonalities in each new piece of data. Central applications of unsupervised machine learning include clustering, dimensionality reduction,[8] and density estimation.<br/> Unsupervised learning algorithms also streamlined the process of identifying large indel based haplotypes of a gene of interest from pan-genome.<br/>


Clustering via Large Indel Permuted Slopes, CLIPS, turns the alignment image into a learning regression problem. The varied slope (b) estimates between each pair of DNA segments enables to identify segments sharing the same set of indels.
Cluster analysis is the assignment of a set of observations into subsets (called clusters) so that observations within the same cluster are similar according to one or more predesignated criteria, while observations drawn from different clusters are dissimilar. Different clustering techniques make different assumptions on the structure of the data, often defined by some similarity metric and evaluated, for example, by internal compactness, or the similarity between members of the same cluster, and separation, the difference between clusters. Other methods are based on estimated density and graph connectivity.

Semi-supervised learning
Main article: Semi-supervised learning
Semi-supervised learning falls between unsupervised learning (without any labeled training data) and supervised learning (with completely labeled training data). Some of the training examples are missing training labels, yet many machine-learning researchers have found that unlabeled data, when used in conjunction with a small amount of labeled data, can produce a considerable improvement in learning accuracy.

In weakly supervised learning, the training labels are noisy, limited, or imprecise; however, these labels are often cheaper to obtain, resulting in larger effective training sets.<br/>

Reinforcement learning
Main article: Reinforcement learning
Reinforcement learning is an area of machine learning concerned with how software agents ought to take actions in an environment so as to maximize some notion of cumulative reward. Due to its generality, the field is studied in many other disciplines, such as game theory, control theory, operations research, information theory, simulation-based optimization, multi-agent systems, swarm intelligence, statistics and genetic algorithms. In reinforcement learning, the environment is typically represented as a Markov decision process (MDP). Many reinforcements learning algorithms use dynamic programming techniques.<br/>Reinforcement learning algorithms do not assume knowledge of an exact mathematical model of the MDP and are used when exact models are infeasible. Reinforcement learning algorithms are used in autonomous vehicles or in learning to play a game against a human opponent.

Dimensionality reduction
Dimensionality reduction is a process of reducing the number of random variables under consideration by obtaining a set of principal variables.<br/> In other words, it is a process of reducing the dimension of the feature set, also called the "number of features". Most of the dimensionality reduction techniques can be considered as either feature elimination or extraction. One of the popular methods of dimensionality reduction is principal component analysis (PCA). PCA involves changing higher-dimensional data (e.g., 3D) to a smaller space (e.g., 2D). This results in a smaller dimension of data (2D instead of 3D), while keeping all original variables in the model without changing the data.<br/> The manifold hypothesis proposes that high-dimensional data sets lie along low-dimensional manifolds, and many dimensionality reduction techniques make this assumption, leading to the area of manifold learning and manifold regularization.</p>    </div>
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

export default Ml3;