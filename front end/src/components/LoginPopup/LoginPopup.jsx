import React, { useState } from 'react'
import './LoginPopup.css'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("login")

  return (
    <div className="login-popup-overlay">
      <div className="login-popup-content">
        <button className="close-button" onClick={() => setShowLogin(false)}>×</button>
        <h2>{currState}</h2>
        <form className="login-popup-inputs">
          {currState === "login" ? <></> : <input type="text" placeholder="Your name" required />}
          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="password" required />
          <div>
            <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
            <div className="login-popup-condition">
              <input type="checkbox" required />
              <p>By continuing, I agree to the privacy policy</p>
            </div>
            {currState === "login"
              ? <p>create an account? <span onClick={() => { setCurrState("Sign Up") }}>click here</span></p>
              : <p>already have an account? <span onClick={() => { setCurrState("login") }}>login here</span></p>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPopup