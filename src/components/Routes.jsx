import React from 'react'

import{Route,  Switch} from 'react-router-dom'

import Customers from '../pages/Customers'

import Drashboard from '../pages/Drashboard'

import Home from '../pages/Home'

import Login from './login/Login'

import About from '../pages/About'

import SignUp from './signup/SignUp'

import Error from '../pages/Error'

import Layout from './layout/Layout'

import ClientDashboard from '../pages/ClientDashboard'


const Routes = () => {
  return (
    
      <Switch>
      
        <Route path='/' exact component={Home}/> 
        <Route path='/signup' exact component={SignUp}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/about' exact component={About}/>
     
        <Route path='/client' exact component={ClientDashboard}/>
        <Route path='/admin' exact>
          <Layout>
            <Switch>
              <Route path='/dashboard' exact component={Drashboard}/>
              <Route path='/customers' exact component={Customers}/>
            </Switch>
          </Layout>
        </Route>
        <Route path='*' exact component={Error}/>

      

      </Switch>
    
    
  )
}

export default Routes