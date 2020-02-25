import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [loginApi] = useState(`http://localhost:6000/api/auth/login`)

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChanges = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    axios.post(loginApi, credentials)
      .then(res => {
        console.log(res)
        console.log(`${credentials.username} is now logged in`)
      })
      .catch(err => console.log('error!: ', err));
  }

  return (
    <div>
      <h2>Log in here</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChanges}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;