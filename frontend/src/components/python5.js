import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Python5() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed python 10% continue to get more");
    nav('/dashboard');
  };
  const Previous = () => {
    nav('/python4');
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
        <p> Languages influenced by Python<br/>
Python's design and philosophy have influenced many other programming languages:<br/>

Boo uses indentation, a similar syntax, and a similar object model.<br/>
Cobra uses indentation and a similar syntax, and its Acknowledgements document lists Python first among languages that influenced it.<br/>
CoffeeScript, a programming language that cross-compiles to JavaScript, has Python-inspired syntax.
ECMAScript/JavaScript borrowed iterators and generators from Python.<br/>
GDScript, a scripting language very similar to Python, built-in to the Godot game engine.<br/>
Go is designed for the "speed of working in a dynamic language like Python"<br/> and shares the same syntax for slicing arrays.
Groovy was motivated by the desire to bring the Python design philosophy to Java.<br/>
Julia was designed to be "as usable for general programming as Python".<br/>
Mojo is a non-strict<br/> superset of Python (e.g. still missing classes, and adding e.g. struct)<br/>.
Nim uses indentation and similar syntax.<br/>
Ruby's creator, Yukihiro Matsumoto, has said: "I wanted a scripting language that was more powerful than Perl, and more object-oriented than Python. That's why I decided to design my own language."<br/>
Swift, a programming language developed by Apple, has some Python-inspired syntax.<br/>
Python's development practices have also been emulated by other languages. For example, the practice of requiring a document describing the rationale for, and issues surrounding, a change to the language (in Python, a PEP) is also used in Tcl,<br/> Erlang,<br/> and Swift.<br/>


Conclusion
<br/>
Python's journey from humble beginnings to widespread acclaim epitomizes the evolution of modern programming languages. Its simplicity, versatility, and vibrant ecosystem have propelled it to the forefront of software development, where it continues to shape the technological landscape across industries. Whether it's building web applications, analyzing data, or delving into artificial intelligence, Python empowers developers to transform ideas into reality with unparalleled efficiency and elegance. As we navigate the complexities of the digital age, Python stands as a beacon of clarity, guiding us towards a future where innovation knows no bounds.</p>
      </div>
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

export default Python5;
