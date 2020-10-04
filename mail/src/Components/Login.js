import React from 'react';
import './Login.css'
import logo from '../assets/logo.png';

export default function Login(){

    return(
        <div className='login-container'>
            <div className ='logo'>
                <img src={logo}/>
            </div>
            <div className ='user-name inputField'>
                <label>Email:</label>
                <input className ='login-input' value="" />
            </div>
            <div className='password inputField'>
                <label>Password:</label>
                <input className ='login-input' value="" />
            </div>
            <div class='login-button-container'>
                <button className="login-button forgotPassword">Forgot Password</button>
                <button className="login-button login">Login</button>
            </div>
        </div>
    )
}