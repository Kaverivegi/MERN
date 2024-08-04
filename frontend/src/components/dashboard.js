import React, { useState } from 'react';
import './dashboard.css';
import Header from './header';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [selectedDomain, setSelectedDomain] = useState(null);
    
    const nav=useNavigate();
    const technicalCourses = ['Python', 'Artificial Intelligence', 'Machine Learning','Data Science'];
    const nonTechnicalCourses = ['Architecture','law','personal development'];

    const courses = selectedDomain === 'technical' ? technicalCourses : selectedDomain === 'nontechnical' ? nonTechnicalCourses : [];
    
    const Course = (course) => {
        return () => {
            if (course === "Python") {
                nav('/python');
            } else if (course === "Artificial Intelligence") {
                nav('/ai');
            } else if (course === "Machine Learning") {
                nav('/ml');
            } else if (course === "Data Science") {
                nav('/ds');
            } else if (course === "Architecture") {
                nav('/arc');
            } else if (course === "law") {
                nav('/law');
            } else {
                nav('/pd');
            }
        };
    };

    return (
        <>
        <Header/><br/>
        <div className="App">
            <h1>Select Your Domain</h1>
            <div className="domain-selection">
                <button className='domain' onClick={() => setSelectedDomain('technical')}>Technical</button>
                <button className='domain' onClick={() => setSelectedDomain('nontechnical')}>Non-Technical</button>
            </div>
            {selectedDomain && (
                <div>
                    <p>You selected: {selectedDomain}</p>
                    <h2>Courses</h2>
                    <div className="course-buttons">
                        {courses.map(course => (
                            <React.Fragment key={course}>
                                <button type='button' className="course-button" onClick={Course(course)}>{course}</button><br/>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
            
        </div>
        </>
    );
}

export default Dashboard;