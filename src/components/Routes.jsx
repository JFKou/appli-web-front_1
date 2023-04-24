import React from 'react'

import{Route, Switch} from 'react-router-dom'

import Customers from '../pages/Customers'
import Drashboard from '../pages/Drashboard'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Drashboard}/>
      <Route path='/customers' component={Customers}/>

    </Switch>
  )
}

export default Routes