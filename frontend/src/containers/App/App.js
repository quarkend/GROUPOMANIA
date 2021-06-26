
import { useState, useEffect, useIsMounted } from 'react';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';
import routesConfig from '../../routes/routesConfig'
import LogInPage from '../LogInPage/LogInPage';
import RegisterPage from '../LogInPage/RegisterPage';
import React from 'react'
import Header from '../../components/Header/Header'
import { API_AUTH_AUTHUSER } from '../../constants/api'



const App = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');



  useEffect(() => {

    if (firstname !== '') return;
    (
      async () => {

        const res = await fetch(API_AUTH_AUTHUSER, {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });
        const content = await res.json();
        console.log('content: ', content);

        if (content.hasOwnProperty('firstName')) {
          setFirstname(content.firstName);

          setLastname(content.lastName);
        }

      }
    )();

  })


  return (

    <BrowserRouter>

      <Header firstname={firstname} setFirstname={setFirstname} setLastname={setLastname} />

      <Switch>
        <Route path="/" exact component={() => <LogInPage firstname={firstname} lastname={lastname} />} />
        <Route path="/login" exact component={() => <LogInPage firstname={firstname} setFirstname={setFirstname} setLastname={setLastname} />} />
        <Route path="/register" exact component={RegisterPage} />


      </Switch>
    </BrowserRouter>


  )
}

export default App;
