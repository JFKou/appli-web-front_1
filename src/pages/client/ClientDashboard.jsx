import { useHistory } from "react-router-dom";
import Main from "../../components/client/Main"
import Sidebar from "../../components/client/Sidebar"
import './clientdashboard.css'

import $ from 'jquery';
import { useEffect } from "react";



const ClientDashboard = () => {

  // const history=useHistory();
  // useEffect(()=>{
  //   if(!localStorage.getItem('token')){
  //     history.push('./login')
  //   }
  // }, [])

  useEffect(() => {
    $(document).ready(function() {
      $(".span1").click(function() 
      {
        $(".dropdown-client").slideToggle(500);
      });

      $('.sidenav-client li').click(function() {
        $('.sidenav-client li').removeClass("active-client");
        $(this).addClass("active-client");
      });

      $(".menu-icon-client").click(function(e) 
      {
        e.preventDefault();
        $(".menu-icon-client").toggleClass("menuicon");
        $(".main").toggleClass("main-width");
        $(".sidebar-client").toggleClass("active1");
        $(".sidenav-client li a").toggleClass("anchor");
        $(".sidenav-client li").toggleClass("lislide");
        $(".sidenav-client p").toggleClass("apphide");
        $(".logo-client span").toggleClass("headspan");
        $(".logo-client").toggleClass("lm");
      });

      $(".user-client").click(function() {
        $(".profile-div").toggle(1000);
      });

      $(".bell").click(function() {
        $(".notification-div").toggle(1000);
      });
    });
  }, []);


  return (
    <div className="client-body">
      <div className="app-client">
        <Sidebar />
        <Main />
      </div>
    </div>
   
  )
}

export default ClientDashboard