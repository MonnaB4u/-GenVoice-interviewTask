import React, { useState } from 'react'
import './Navbar.css'
function Navbar({ setShowLogin, storedName, isAuthenticated,setIsAuthenticated, setshowcratePass }) {
    return (
        <div className='navbar'>
            <h1><span class="gen">Gen</span><span class="voice">Voice</span></h1>

            {!isAuthenticated ?
                <div className="navbar-right">
                    <a onClick={() => setShowLogin(true)} href="#login">Login</a>
                </div>
                :
                <div className="nav-profile" style={{ display: "flex", gap: "20px" }}>
                    <h5>{storedName}</h5>
                    <div className='nav-settings'>
                        <a href="#login">Settings</a>
                        <div className="nav-dropDown">
                            <li onClick={() => setshowcratePass(true)} style={{ cursor: "pointer" }}>Change Password</li>
                            <li onClick={()=>setIsAuthenticated(false)} style={{ cursor: "pointer" }}>Log out</li>
                        </div>
                    </div>
                </div>}

        </div>
    )
}

export default Navbar
