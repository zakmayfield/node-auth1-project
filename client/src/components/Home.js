import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import axios from 'axios';


const Home = () => {
  const [api] = useState(`http://localhost:6000/api/users`)

  useEffect(() => {
    axios.get(api)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;