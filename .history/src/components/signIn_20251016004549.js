import React, { useState } from 'react'
import lionsHead from '../elements/lionsHead.jpg'
import logo from '../elements/BaguioPinelodge logo.png';
import './signIn.css'

function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const validEmail = 'hallegado@gmail.com';
    const validPassword = 'hallegado123';

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === validEmail && password === validPassword) {

            setMessage(`${email} has successfully signed in`);
            if (props.onSignIn) {
                props.onSignIn(email);
            }
        } else {
            setMessage('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className='signIn'>
            <div className='contentLeft'>
                <img src={lionsHead} alt="Lions Head" />
                <h1>Discover Your Perfect <br /> Stay Today</h1>
                <p>Experience the charm and tranquility of Baguio City's finest accommodations</p>
            </div>
            <div className='contentRight'>
                <div className="logoContainer">
                    <div className="logoRow">
                        <img src={logo} alt="Baguio Pinelodge Logo" />
                        <div className="logoText">
                            <h1>BAGUIO</h1>
                            <h6>PINELODGE</h6>
                        </div>
                    </div>
                </div>
                <h2>Welcome Back</h2>
                <h5>Start booking your perfect stay</h5>
                <div className='formContainer'>
                    <h3>Sign In</h3>
                    <p>Enter your credentials to access your account</p>
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        {message && <p style={{ textAlign: 'center', marginTop: '10px', color: '#4b5a33' }}>{message}</p>}
                        <button type='submit'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn