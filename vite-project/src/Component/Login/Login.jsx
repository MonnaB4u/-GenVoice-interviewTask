import React, { useEffect, useState } from 'react'
import './Login.css'
function Login({ setShowLogin, setStoredName, data, setData, setIsAuthenticated, setStoredPassword, isAuthenticated }) {

  const [currentState, setCurrentState] = useState("Sign Up");
  const [error, setError] = useState("");


  const handleLogin = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((currentData) => ({ ...currentData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = data;
    const storedPassword = localStorage.getItem("password") || "GenVoice123!";

    if (name === "genvoice" && password === storedPassword) {
      localStorage.setItem("username", name)
      localStorage.setItem("password", password);
      setIsAuthenticated(true);
      setShowLogin(false);
      setError("");

    } else {
      setError("Invalid username or password."); // Set error message
    }
  };

  useEffect(() => {
    const name = localStorage.getItem("username")
    const password = localStorage.getItem("password")
    console.log(name);

    if (name) {
      setStoredName(name)
    } if (password) {
      setStoredPassword(password)
    }
    if (name && password == true) {
      setIsAuthenticated(true)
    }
   
  }, [])


  console.log(isAuthenticated);


  return (
    <div className='login'>
      <form onSubmit={handleSubmit} className='login-container'>

        <div className="login-title">
          <h2>Login</h2>
          <h5 onClick={() => setShowLogin(false)}>X</h5>
        </div>

        <div className="login-inputs">
          <input type="text" name="name" value={data.name} onChange={handleLogin}placeholder='Your Name'/>
          <input type="password" name="password" value={data.password} onChange={handleLogin}  placeholder='Your password'/>

        </div>


        <button className='submit-button' type="submit">Log In</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

    </div>
  )
}

export default Login
