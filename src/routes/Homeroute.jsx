import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'

const Homeroute = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Homeroute