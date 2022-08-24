import React, { useState } from 'react'
import '../log-In/login.css'
import LoginForm from './loginForm'



function Login() {
  const adminUser = {
      user: "adminUser",
      password: "admin"
  }

  const [user, setUser] = useState({user: "", password: ""});
  const [error, setError] = useState("");

  const login = details => {
      console.log(details);
  }

  const logout = () => {
      console.log("logout");
  }

  return (
    <div id="loginForm" className='flex justify-center px-[35%] select-none'>
        <LoginForm />
    </div>
     )
}

export default Login