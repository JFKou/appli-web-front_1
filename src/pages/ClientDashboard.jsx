import React from 'react'

import SideNav from '../components/client/SideNav'

import Footer from '../components/client/Footer'
import Header from '../components/client/Header'
import Home from '../components/client/Home'

const ClientDashboard = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <SideNav/>
        <Footer/>

    </div>
  )
}

export default ClientDashboard