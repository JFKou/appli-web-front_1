import React from 'react'

import{BrowserRouter, Route,  Switch} from 'react-router-dom'

import Login from '../login/Login';
import SignUp from '../signup/SignUp';
import About from '../../pages/About';
import ClientDashboard from '../../pages/client/ClientDashboard';
import Layout from '../layout/Layout';



 import Error from '../../pages/Error'



import axios from 'axios';
import Home from '../../pages/home/Home';
import Calendars from '../calendar/Calendars';
import WaitPage from '../../pages/WaitPage';


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
    <BrowserRouter>
      <Switch>
      
        <Route path='/' exact component={Home}/> 


        <Route path="/login" exact component={Login}>
              {/* {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />} */}
        </Route>

        <Route path='/about' exact component={About}/>
     
        <Route path='/client' exact component={ClientDashboard}/>
        <Route path='/calendar' exact component={Calendars}/>


        <Route path='/signup' exact component={SignUp}>
        {/* {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <SignUp />} */}
        </Route>

        <Route path='/admin' exact>
          <Layout/> 
        </Route>

        <Route path='/wait' exact component={WaitPage}/>


        <Route path='/about' exact component={About}/>


         <Route path='*' exact component={Error}/> 

      </Switch>
    </BrowserRouter>
    
  )
}

export default Routes