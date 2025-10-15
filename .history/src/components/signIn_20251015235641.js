import React from 'react'
import lionsHead from '../elements/lionsHead.jpg'
import logo from '../elements/BaguioPinelodge logo.png';
import './signIn.css'

function signIn() {
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
                    <form>
                        <input type='text' placeholder='Email' required />
                        <input type='password' placeholder='Password' required />
                        <button type='submit'>SIGN IN</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default signIn