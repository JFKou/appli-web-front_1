import Main from "../../components/client/Main"
import Sidebar from "../../components/client/Sidebar"
import './clientdashboard.css'

import $ from 'jquery';
import { useEffect } from "react";



const ClientDashboard = () => {

  useEffect(() => {
    $(document).ready(function() {
      $(".span1").click(function() {
        $(".dropdown").slideToggle(500);
      });

      $('.sidenav-client li').click(function() {
        $('.sidenav-client li').removeClass("active");
        $(this).addClass("active");
      });

      $(".menu-icon-client").click(function(e) {
        e.preventDefault();
        $(".menu-icon-client").toggleClass("menuicon");
        $(".main").toggleClass("main-width");
        $(".sidebar").toggleClass("active1");
        $(".sidenav-client li a").toggleClass("anchor");
        $(".sidenav-client li").toggleClass("lislide");
        $(".sidenav-client p").toggleClass("apphide");
        $(".logo span").toggleClass("headspan");
        $(".logo").toggleClass("lm");
      });

      $(".user").click(function() {
        $(".profile-div").toggle(1000);
      });

      $(".bell").click(function() {
        $(".notification-div").toggle(1000);
      });
    });
  }, []);


  return (
    <div className="client-body">
      <div className="app">
        <Sidebar />
        <Main />
      </div>
    </div>
   
  )
}

export default ClientDashboard