import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
import './signup.css' 
import Header from './header';
import Footer from './footer';
const Login = () => {
    const nav = useNavigate();
    const [logname, setName] = useState("");
    const [cpassword, setPassword] = useState("");
    const [isSignup, setIsSignup] = useState(false);
    const [check, setCheck] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [OTP, setOTP] = useState("");
    const [showOTPInput, setShowOTPInput] = useState(false);

    const handleLogin = async () => {
        try {
            const result = await axios.get("http://localhost:8000/login/" + logname + "/" + cpassword);
            if (result.data) {
                localStorage.sname = result.data.username;
                localStorage.gmail = result.data.email;
                nav('/dashboard');
            } else {
                alert("Incorrect name or password");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again.");
        }
    };
    useEffect(() => {
        setCheck(""); // Reset check when username changes
    }, [username]);

    useEffect(() => {
        setCheck(""); // Reset check when email changes
    }, [email]);
    const handleCheckAvailability = async () => {
        try
        {
        const response = await axios.get("http://localhost:8000/check/" + username);
        const response1 = await axios.get("http://localhost:8000/check1/" + email);
        if (response.data) {
            setCheck("User Name is already exists");
        } else if (response1.data) {
            setCheck("E-mail is already exists");
        } else {
            let OTP = '';
            for (let i = 0; i < 4; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
            }

            window.Email.send({
                SecureToken: "23ea1404-dbb6-4dd6-9fb2-71f755191f2e",
                To: email,
                From: "mudundisowmya999@gmail.com",
                Subject: "Student Platform",
                Body: "Hi<br/>Your one-time password is:"+OTP+"<br/>Dont tell anyone"
            });
            setShowOTPInput(true);
            setOTP(OTP);
        }
        }
        catch(e)
        {
            console.log(e)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            handleCheckAvailability();
        } else {
            handleLogin();
        }
    };
    
    const handleRegister = async () => {
        if (otp === OTP) {
            const response = await axios.post("http://localhost:8000/signup/" + username + "/" + email + "/" + cpassword);
            if (response.data) {
                alert("Register Successfully");
                setIsSignup(false);
                setShowOTPInput(false); // Switch back to login mode
            }
            else {
                alert("Invalid Details");
            }
        } else {
            alert("Invalid OTP");
        }
    };
    var digits = '0123456789';
    return (
        <>
        <Header/>
            <div className="ex">
                <div className="ex2">
                    <div className="login-container">
                        <form className="login-form" onSubmit={handleSubmit}>
                        <div className="ex1">
                           <div> <button onClick={() => setIsSignup(false)} className="mainbuttons"><b>Login</b></button></div>
                           <div> <button onClick={() => setIsSignup(true)} className="mainbuttons"><b>Signup</b></button></div>
                        </div>
                            {isSignup && (
                                <h4><marquee><b>{check}</b></marquee></h4>
                            )}
                            {isSignup && (
                                <div className="input-group">
                                    <label htmlFor="username">User Name</label>
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder="Enter Your UserName"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            )}
                            {isSignup && (
                                <div className="input-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            )}
                            {isSignup && (
                                <div className="input-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            )}
                            {!isSignup && (
                                <div className="input-group">
                                    <label htmlFor="text">User Name / Email</label>
                                    <input
                                        type="text"
                                        id="text"
                                        placeholder="Enter Your UserName / Email"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            )}
                            {!isSignup && (
                                <div className="input-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            )}
                            <button type="submit">{isSignup ? "Register" : "Login"}</button><br/><br/>
                            {showOTPInput && (
                                <div className="input-group">
                                    <label htmlFor="otp">OTP</label>
                                    <input
                                        type="text"
                                        id="otp"
                                        placeholder="Enter OTP"
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                    <button type="button" onClick={handleRegister}>
                                        Verify OTP
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Login;