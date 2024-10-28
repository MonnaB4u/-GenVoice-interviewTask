import React from 'react'

function CreatePassword(data, setData) {

    return (
        <div>
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
        </div>
    )
}

export default CreatePassword
