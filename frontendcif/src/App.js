import React, { useState, useEffect } from 'react'
import UserContext from './contexts/UserContext.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// API
import UserAPI from './api/UserAPI.js';

//pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SearchPage from './pages/SearchPage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser ] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await UserAPI.getLoggedInUser(localStorage.getItem("auth-user"));
        //console.log("made it to response")
        let data = await response.json();
        //console.log("Made it here")
        if (data.username) {
          setIsLoggedIn(true);
          setUser(data);
          console.log(user)
        }
      }
    }
    // only calls if user is not logged in
    if (!user) {
      getUser();
    }
  }, [user])


  const handleLogin = async (evt) => {
    evt.preventDefault();
    let userObject = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    }
    let response = await UserAPI.login(userObject);
    console.log(response)
    let data = await response.json();
    console.log(data)
    if (data.token) {
      localStorage.setItem("auth-user", `${data.token}`);
      setIsLoggedIn(true);
      setUser(data.user);
      console.log(user)
    }

  }
  
  const handleLogout = () => {
    localStorage.setItem("auth-user", null);
    setIsLoggedIn(false);
    setUser(null);
  }

  const handleSignup = async (evt) => {
    evt.preventDefault();
    let userObject = {
      'username': evt.target.username.value,
      'password': evt.target.password.value,
    }
    let response = await UserAPI.signupUser(userObject);
    let data = await response.json();
    console.log(data)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user: user, setUserLogin: handleLogin, setUserLogout: handleLogout, setUserSignup: handleSignup, error: error }}>
          <Routes>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/dashboard" element={<DashboardPage/>}/>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
