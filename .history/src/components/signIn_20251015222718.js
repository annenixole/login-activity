import React from 'react'
import lionsHead from '../elements/lionsHead.jpg'
import logo from '../elements/BaguioPinelodge logo.png';

function signIn() {
    return (
        <div className='signIn'>
            <div className='contentLeft'>
                <img src={lionsHead} />
            </div>
            <div className='contentRight'>
                <div className="logoContainer">
                    <img src={logo} />
                    <h1>BAGUIO</h1>
                    <h6>PINELODGE</h6>
                </div>
                <h1>Welcome Back</h1>
                <h6>Start booking your perfect stay</h6>
                <div className='formContainer'>
                    <h3>Sign In</h3>
                    <p>Enter your credentials to access your account</p>
                    <form>
                        <input type='text' placeholder='Email' required></input>
                        <input type='password' placeholder='Password' required></input>
                        <button type='submit'>Sign In</button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default signIn