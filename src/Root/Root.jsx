import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Header/Navbar.jsx'
import Footer from '../Components/Footer/Footer.jsx'

function Root() {
    return (
        <div className=' mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root
