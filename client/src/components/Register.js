import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [registerApi] = useState(`localhost:6000/api/auth/register`)

  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChanges = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  console.log(
    credentials.username,
    credentials.email,
    credentials.password
  )

  const handleSubmit = e => {
    e.preventDefault();

    axios.post(registerApi, credentials)
      .then(res => {
        console.log(res)
        console.log(`${credentials.username} is now registered`)
      })
      .catch(err => console.log('error!: ', err));
  }

  return (
    <div>
      <h2>Register here</h2>

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
          name="email"
          placeholder="email"
          value={credentials.email}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChanges}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;