import React from 'react'

import{Route,Redirect,  Switch} from 'react-router-dom'

// import Customers from '../pages/Customers'

// import Drashboard from '../pages/Drashboard'

import Home from '../pages/Home'

import Login from './login/Login'

import About from '../pages/About'

import SignUp from './signup/SignUp'

// import Error from '../pages/Error'

import Layout from './layout/Layout'

import ClientDashboard from '../pages/client/ClientDashboard'

import axios from 'axios';


 axios.defaults.baseURL = "http://localhost:8000";
 axios.defaults.headers.post['Content-Type'] = 'application/json';
 axios.defaults.headers.post['Accept'] = 'application/json';

 axios.defaults.withCredentials = true;

 axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
   config.headers.Authorization = token ? `Bearer ${token}` : '';
   return config;
 })

const Routes = () => {
  return (
    
      <Switch>
      
        <Route path='/' exact component={Home}/> 
        {/* <Route path='/signup' exact component={SignUp} name='Home'/> */}

        {/* <Route path='/login' exact component={Login} name=''/> */}

        <Route path="/login">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
        </Route>

        <Route path='/about' exact component={About}/>
     
        <Route path='/client' exact component={ClientDashboard}/>

        <Route path='/signup'>
        {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <SignUp />}
        </Route>

        <Route path='/admin'>
          <Layout/> 
        </Route>

        {/* <Route path='*' exact component={Error}/> */}

      

      </Switch>
    
    
  )
}

export default Routes