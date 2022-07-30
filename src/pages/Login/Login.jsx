import './login.css'

import React from 'react'

const Login = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginleft">
                <h3 className="loginlogo">
                    MerrySocial
                </h3>
              <span className="logindesc">
                Connect with friends and the world around you on MerrySocial..
              </span>
            </div>
            <div className="loginRight">
                <div className="loginbox">
                    <input type="text" placeholder='Email' className="loginInput" />
                    <input type="text"  placeholder='Password' className="loginInput" />
                    <button className="loginbutton">Log In</button>
                    <span className="loginforgot">Forgot Password?</span>
                    <button className="loginregisterbutton">Create a new Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login