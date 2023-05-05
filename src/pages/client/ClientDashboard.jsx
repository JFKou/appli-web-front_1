

import Sidebar from '../../components/client/Sidebar'

import Footer from '../../components/client/Footer'
import Navbar from '../../components/client/Navbar'
import Dashboard from '../../components/client/Dashboard'

import '../client/clientdashboard.css'

const ClientDashboard = () => {
  return (
    <div className='wrapper'> ADMINKIT
        <Sidebar />
        <div className="main"> 
          <Navbar/>  
          <main className='content'>
            <div className="container-fluid p-0">
            <Dashboard/>

            </div>
          </main> 
          <Footer/>  
        </div>
        {/* <Footer/> */}
         

    </div>
  )
}

export default ClientDashboard