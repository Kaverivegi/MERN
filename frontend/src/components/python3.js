import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Python3() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed python 60% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/python4');
  };
  const Previous = () => {
    nav('/python2');
  };
  const Chat = () => {
    nav('/chat');
  };
  return (
    <div className="body">
      <header>
        <div className="header-left">
          <h1>Expenses</h1>
        </div>
        <div className="header-right">
          <button type="button" className="login-btn" onClick={Dashboard}>
            Dashboard
          </button>
          <button className="contact-btn" onClick={Chat}>Chat</button>
        </div>
      </header>
      <div className="main">
        <p>Python Function syntax:

Arguments and Return Values in Python Function
Python Function Global and Local Scope Variables
Use of pass Statement in Function
Return statemen in Python Function
Python range() function
*args and **kwargs in Python Function
Python closures
Python ‘Self’ as Default Argument
Decorators in Python
Python closures
Map Function
Filter Function
Reduce Function
Lambda Function


Python OOPs Concepts:
In this segment, we’ll explore the core principles of object-oriented programming (OOP) in Python. From encapsulation to inheritance, polymorphism, abstract classes, and iterators, we’ll cover the essential concepts that empower you to build modular, reusable, and scalable code.

Python Classes and Objects:
Polymorphism
Inheritance
Abstract
Encapsulation
Iterators
Python Exception Handling
In this section of Python Tutorial, we’ll explore how Python deals with unexpected errors, enabling you to write robust and fault-tolerant code. We’ll cover file handling, including reading from and writing to files, before diving into exception handling with try and except blocks. You’ll also learn about user-defined exceptions and Python’s built-in exception types.

Python File Handling:
Python Read Files
Python Write/Create Files
Exception handling
User defined Exception
Built-in Exception
Try and Except in Python
Python Packages or Libraries
The biggest strength of Python is a huge collection of standard libraries which can be used for the following:

Built-in Modules in Python:
Python DSA Libraries
Machine Learning
Python GUI Libraries
Web Scraping Pakages
Game Development Packages
Web Frameworks like, Django, Flask
Image processing (like OpenCV, Pillow)
Python Collections
Here, we’ll explore key data structures provided by Python’s collections module. From counting occurrences with Counters to efficient queue operations with Deque, we’ll cover it all. By mastering these collections, you’ll streamline your data management tasks in Python.

Design philosophy and features
Python is a multi-paradigm programming language. Object-oriented programming and structured programming are fully supported, and many of their features support functional programming and aspect-oriented programming (including metaprogramming[65] and metaobjects).[66] Many other paradigms are supported via extensions, including design by contract[67][68] and logic programming.[69]

Python uses dynamic typing and a combination of reference counting and a cycle-detecting garbage collector for memory management.[70] It uses dynamic name resolution (late binding), which binds method and variable names during program execution.

Its design offers some support for functional programming in the Lisp tradition. It has filter,mapandreduce functions; list comprehensions, dictionaries, sets, and generator expressions.[71] The standard library has two modules (itertools and functools) that implement functional tools borrowed from Haskell and Standard ML</p>
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

export default Python3;
