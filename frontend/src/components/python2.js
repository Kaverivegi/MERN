import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Python2() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed python 40% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/python3');
  };
  const Previous = () => {
    nav('/python1');
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
        <p>Learn Python Basics:<br/>
Syntax<br/>
Keywords in Python<br/>
Comments in Python<br/>
Learn Python Variables<br/>
Learn Python Data Types<br/>
Indentation and why is it important in Python<br/>
Learn Python Input/Output<br/>
In this segment, we delve into the fundamental aspects of handling input and output operations in Python, crucial for interacting with users and processing data effectively. From mastering the versatile print() function to exploring advanced formatting techniques and efficient methods for receiving user input, this section equips you with the necessary skills to harness Python’s power in handling data streams seamlessly.
<br/>
Python print() function:
<br/>
f-string in Python<br/>
Print without newline in Python<br/>
Python | end parameter in print()<br/>
Python | sep parameter in print()<br/>
Python | Output Formatting<br/>
Taking Input in Python<br/>
Taking Multiple Inputs from users in Python<br/>
Python Data Types<br/>
Python offers, enabling you to manipulate and manage data with precision and flexibility. Additionally, we’ll delve into the dynamic world of data conversion with casting, and then move on to explore the versatile collections Python provides, including lists, tuples, sets, dictionaries, and arrays.
<br/>



Python Data Types:
<br/>
By the end of this section, you’ll not only grasp the essence of Python’s data types but also wield them proficiently to tackle a wide array of programming challenges with confidence.
<br/>
Strings<br/>
Numbers<br/>
Booleans<br/>
Python List<br/>
Python Tuples<br/>
Python Sets<br/>
Python Dictionary<br/>
Python Arrays<br/>
Type Casting<br/>

<br/>
Python Operators<br/>
From performing basic arithmetic operations to evaluating complex logical expressions, we’ll cover it all. We’ll delve into comparison operators for making decisions based on conditions, and then explore bitwise operators for low-level manipulation of binary data. Additionally, we’ll unravel the intricacies of assignment operators for efficient variable assignment and updating. Lastly, we’ll demystify membership and identity operators, such as in and is, enabling you to test for membership in collections and compare object identities with confidence.
<br/>
Arithmetic operators<br/>
Comparison Operators<br/>
Logical Operators<br/>
Bitwise Operators<br/>
Assignment Operators<br/>
Membership & Identity Operators | Python “in”, and “is” operator<br/>
Python Conditional Statement<br/>
These statements are pivotal in programming, enabling dynamic decision-making and code branching. In this section of Python Tutorial, we’ll explore Python’s conditional logic, from basic if…else statements to nested conditions and the concise ternary operator. We’ll also introduce the powerful match case statement, new in Python 3.10. By the end, you’ll master these constructs, empowering you to write clear, efficient code that responds intelligently to various scenarios. Let’s dive in and unlock the potential of Python’s conditional statements.
<br/>
If..else<br/>
Nested-if statement<br/>
Ternary Condition in Python<br/>
Match Case Statement<br/>
Python Loops<br/>
Here, we’ll explore Python’s loop constructs, including the for and while loops, along with essential loop control statements like break, continue, and pass. Additionally, we’ll uncover the concise elegance of list and dictionary comprehensions for efficient data manipulation. By mastering these loop techniques, you’ll streamline your code for improved readability and performance.
<br/>
For Loop<br/>
While Loop<br/>
Loop control statements (break, continue, pass)<br/>
Python List Comprehension<br/>
Python Dictionary Comprehension<br/>
Python Functions<br/>
Functions are the backbone of organized and efficient code in Python. Here, we’ll explore their syntax, parameter handling, return values, and variable scope. From basic concepts to advanced techniques like closures and decorators. Along the way, we’ll also introduce versatile functions like range(), and powerful tools such as *args and **kwargs for flexible parameter handling. Additionally, we’ll delve into functional programming with map, filter, and lambda functions.</p>
      </div>
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

export default Python2;
