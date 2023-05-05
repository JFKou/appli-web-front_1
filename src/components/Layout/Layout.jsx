import React, { useEffect } from 'react'

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







// import Routes from '../Routes'
import Customers from '../../pages/Customers'
import Drashboard from '../../pages/Drashboard'


const Layout = () => {

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
                {/* <Routes/> */}
                <Route path='/dashboard' exact component={Drashboard}/>
              <Route path='/customers' exact component={Customers}/>
            </div>
          </div>
        </div>
      )}/>
  
    </BrowserRouter>
  
  )
}

export default Layout;