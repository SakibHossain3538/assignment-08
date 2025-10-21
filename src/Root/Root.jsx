import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Header/Navbar.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import PageLoader from '../Components/LoadingPage/LoadingPage.jsx'
function Root() {
    return (
        <div className=' mx-auto'>
            <PageLoader />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root
