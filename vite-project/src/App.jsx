import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Login from './Component/Login/Login'
import CreatePassword from './Component/CreatePassword/CreatePassword'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [cratePass, setCreatePass] = useState(false)
  const [storedName, setStoredName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [storedPassword, setStoredPassword] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });


  console.log(storedName);

  return (
    <div className="">
      {showLogin && <Login data={data} setData={setData} setShowLogin={setShowLogin}
        setStoredName={setStoredName}
        setIsAuthenticated={setIsAuthenticated}
        setStoredPassword={setStoredPassword} />}

      {cratePass && <CreatePassword data={data} setData={setData}/>}

      <div className="app">
        <Navbar setCreatePass={setCreatePass} setShowLogin={setShowLogin} storedName={storedName} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />

      </div>
    </div>


  )
}

export default App
