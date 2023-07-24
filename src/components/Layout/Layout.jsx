import React, { useEffect } from 'react'
// import { useHistory } from "react-router-dom";

import './layout.css'

import TopNav from '../topnav/TopNav'
import Sidebar from '../sidebar/Sidebar'


import { BrowserRouter, Route } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'

import themeAction from '../../redux/actions/ThemeAction'

//ceux que j'ai déplacé de index.js

import '../../assets/css/index.css'
import '../../assets/css/theme.css'
import '../../assets/css/grid.css'
import '../../assets/boxicons-2.0.7/css/boxicons.min.css'

import Drashboard from '../../pages/Drashboard'
import Customers from '../../pages/Customers'

import Interventions from '../../pages/interventions/Interventions'
import CreateInterventions from '../../pages/interventions/createinterventions/CreateInterventions'
import EditInterventions from '../../pages/interventions/editinterventions/EditInterventions'

import Map from '../map/Map'

import CreateSites from '../../pages/sites/CreateSites'

import Extincteurs from '../../pages/extincteurs/Extincteurs'
import EditExtincteurs from '../../pages/extincteurs/EditExtincteurs'
import CreateExtincteurs from '../../pages/extincteurs/CreateExtincteurs'

import Techniciens from '../../pages/techniciens/Techniciens'
import EditTechniciens from '../../pages/techniciens/EditTechniciens'
import CreateTechniciens from '../../pages/techniciens/CreateTechniciens'

import Contrats from '../../pages/contrats/Contrats'
import EditContrats from '../../pages/contrats/EditContrats'
import CreateContrats from '../../pages/contrats/CreateContrats'

// import Login from '../login/Login';


const Layout = () => {

  // const history=useHistory();
  // useEffect(()=>{
  //   if(!localStorage.getItem('auth_token')){
  //     history.push('./login')
  //   }
  // },[])

  const themeReducer=useSelector(state => state.ThemeReducer)

  const dispatch = useDispatch()

  useEffect(()=>{
        const themeClass=localStorage.getItem('themeMode',
        'theme-mode-light')

        const colorClass=localStorage.getItem('colorMode',
        'theme-mode-light')

        dispatch(themeAction.setMode(themeClass))

        dispatch(themeAction.setColor(colorClass))

  })

  return (
    <BrowserRouter>
      <Route render = {(props)=>(
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
          <Sidebar {...props}/>
          <div className="layout__content">
            <TopNav/>  
            <div className="layout__content-main">
            <Route path='/dashboard' exact component={Drashboard}/>
            <Route path='/customers' exact component={Customers}/>
            <Route path='/interventions' exact component={Interventions}/> 
            <Route path='/interventions/add' exact component={CreateInterventions}/>
            <Route path='/interventions/:id' exact component={EditInterventions}/>
            <Route path='/sites' exact component={Map}/>
            <Route path='/sites-add' exact component={CreateSites}/>
            <Route path='/extincteurs' exact component={Extincteurs}/> 
            <Route path='/extincteurs/add' exact component={CreateExtincteurs}/>
            <Route path='/extincteurs/:id' exact component={EditExtincteurs}/>
            <Route path='/techniciens' exact component={Techniciens}/>
            <Route path='/techniciens/add' exact component={CreateTechniciens}/>
            <Route path='/techniciens/:id' exact component={EditTechniciens}/> 
            <Route path='/contrats' exact component={Contrats}/>
            <Route path='/contrats/add' exact component={CreateContrats}/>
            <Route path='/contrats/:id' exact component={EditContrats}/>
 
            </div>
          </div>
        </div>
      )}/>
  
    </BrowserRouter>
  
  )
}

export default Layout;