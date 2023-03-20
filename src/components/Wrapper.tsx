import React, {useEffect } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar'

const Wrapper = ({children}: any) => {
    const location = useLocation();
    const navigationType = useNavigationType();
    useEffect(() => {
      // scroll to top except when you click the back button
      if (navigationType !== "POP" || "PUSH") {
        window.scrollTo(0, 0);
      }
    }, [location]);
  return (
   <>
   <Navbar/>
      <Outlet/>
   <Footer/>
   </>
  )
}

export default Wrapper