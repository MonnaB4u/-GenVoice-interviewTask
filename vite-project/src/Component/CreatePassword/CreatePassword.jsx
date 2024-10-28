import React, { useState } from 'react';

function CreatePassword({
    storedName,
    storedPassword,
    setshowcratePass,
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    setStoredPassword
}) {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChangePassword = (e) => {
        e.preventDefault();

        if (storedName === "genvoice" && oldPassword === storedPassword) {
            localStorage.setItem("password", newPassword);
            setStoredPassword(newPassword);
            setOldPassword("");
            setNewPassword("");
            setSuccess(true);
            setError("");
            console.log("Password changed successfully!");
        } else {
            setError("Old password is incorrect.");
            setSuccess(false);
            console.log("Failed to change password: Old password is incorrect.");
        }
    };

    return (
        <div>
            <div className='login'>
                <form onSubmit={handleChangePassword} className='login-container'>
                    <div className="login-title">
                        <h2>Change Password</h2>
                        <h5 onClick={() => setshowcratePass(false)}>X</h5>
                    </div>

                    <div className="login-inputs">
                   
                        <input
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            placeholder="Old Password"
                            required
                        />
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="New Password"
                            required
                        />
                        <button className='submit-button' type="submit">Change Password</button>
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>Password changed successfully!</p>}
                </form>
            </div>
        </div>
    );
}

export default CreatePassword;
