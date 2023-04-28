import React from 'react'

import{Route, Router, Switch} from 'react-router-dom'

import Customers from '../pages/Customers'
import Drashboard from '../pages/Drashboard'

import Home from '../pages/Home'

// import SignUp from '../pages/SignUp'
// import Login from '../pages/Login'
// import About from '../pages/About'


const Routes = () => {
  return (
    
    <Switch>
      <Route path='/' exact component={Drashboard}/>
       <Route path='/customers' component={Customers}/>
         <Route path='/home' component={Home}/> 
       
          {/* <Route path='/signup' component={SignUp}/>
            <Route path='/login' component={Login}/>
              <Route path='/about' component={About}/>
     */}

    </Switch>
    
  )
}

export default Routes