import React, { useEffect, useState } from 'react'
import './Login.css'
function Login({ setShowLogin, setStoredName, data, setData, setIsAuthenticated,setStoredPassword }) {

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
    if (name === "genvoice" && password === "GenVoice123!") {
      localStorage.setItem("username", name)
      localStorage.setItem("password", password);
      setIsAuthenticated(true);
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

  return (
    <div className='login'>
      <form onSubmit={handleSubmit} className='login-container'>

        <div className="login-title">
          <h2>Login</h2>
          <h5 onClick={() => setShowLogin(false)}>X</h5>
        </div>

        <div className="login-inputs">
          <input type="text" name="name" value={data.name} onChange={handleLogin} />
          <input type="email" name="email" value={data.email} onChange={handleLogin} />
          <input type="password" name="password" value={data.password} onChange={handleLogin} />

        </div>

        {currentState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
        )}

        <button type="submit">Log In</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

    </div>
  )
}

export default Login
