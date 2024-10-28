import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Login from './Component/Login/Login'
import CreatePassword from './Component/CreatePassword/CreatePassword'
import AboutMe from './Component/AboutMe/AboutMe'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showcratePass, setshowcratePass] = useState(false)
  const [storedName, setStoredName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [storedPassword, setStoredPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");


  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });


 console.log(showcratePass);
 

  return (
    <div className="">
      {showLogin && <Login data={data} setData={setData} setShowLogin={setShowLogin}
        setStoredName={setStoredName}
        setIsAuthenticated={setIsAuthenticated}
        setStoredPassword={setStoredPassword}
        newPassword={newPassword} setNewPassword={setNewPassword} oldPassword={oldPassword} setOldPassword={setOldPassword} isAuthenticated={isAuthenticated}
      />}

      {showcratePass && <CreatePassword data={data} setData={setData} storedName={storedName} setshowcratePass={setshowcratePass} newPassword={newPassword}
        setNewPassword={setNewPassword} oldPassword={oldPassword} setOldPassword={setOldPassword}
        setStoredPassword={setStoredPassword} storedPassword={storedPassword} setPasswordChanged={setPasswordChanged} />}

      <div className="app">
        <Navbar setshowcratePass={setshowcratePass} setShowLogin={setShowLogin} storedName={storedName} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
        <AboutMe />
      </div>
    </div>


  )
}

export default App
