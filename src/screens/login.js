import React, { useState } from 'react'
import '../App.css'
import profile from '../image/a.png'
import email from '../image/email.jpg'
import pass from '../image/pass.png'

export default function LoginScreen() {
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [emailInput, setEmailInput] = useState('')

  function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
      setEmailError('')
      return true
    }
    setEmailError('Please check Your Email!')
    return false
  }
  function ValidatePassword() {
    if (passwordInput.length === 0) {
      setPasswordError('Please enter password')
      return false
    }
    if (
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwordInput)
    ) {
      setPasswordError('')
      return true
    }
    setPasswordError(
      'Please Enter Strong Password!',
    )
    return false
  }

  const validationCheck = () => {
    const valEmail = ValidateEmail()
    const valPass = ValidatePassword()
    return valEmail && valPass
  }

  const onButtonClick = () => {
    if (validationCheck()) {
      window.open('http://www.google.com')
    }
  }

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              {<img src={profile} alt="profile" className="profile" />}
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <div
                style={{
                  margin: 'auto',
                  marginLeft: '0px',
                }}
              >
                <pre>
                  {<img src={email} alt="email" className="email" />}
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className="name"
                    onChange={(e) => {
                      setEmailInput(e.target.value)
                      emailError !== '' && setEmailError('')
                    }}
                  ></input>{' '}
                  <br />
                  {emailError !== '' ? (
                    <span
                      style={{
                        fontWeight: 'bold',
                        color: 'red',
                      }}
                    >
                      {emailError}
                    </span>
                  ) : null}
                </pre>
              </div>
            </div>
            <div className="second-input">
              <div
                style={{
                  margin: 'auto',
                  marginLeft: '0px',
                }}
              >
                <pre>
                  {<img src={pass} alt="pass" className="email" />}
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="name"
                    onChange={(e) => {
                      setPasswordInput(e.target.value)
                      passwordError !== '' && setPasswordError('')
                    }}
                  ></input>{' '}
                  <br />
                  {passwordError === '' ? null : (
                    <span
                      style={{
                        fontWeight: 'bold',
                        color: 'red',
                      }}
                    >
                      {passwordError}
                    </span>
                  )}
                </pre>
              </div>
            </div>
            <div className="login-button">
              <button
                type="submit"
                class="btn btn-primary btn-block"
                // onClick={() => window.open('http://www.google.com')}
                onClick={onButtonClick}
              >
                Log in
              </button>
              {/* <button onClick={() => window.open( 'http://www.google.com')} >Login</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
