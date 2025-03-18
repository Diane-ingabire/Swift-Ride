import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx'; 

function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer /> 
        </div>
    );
}

export default Layout;
