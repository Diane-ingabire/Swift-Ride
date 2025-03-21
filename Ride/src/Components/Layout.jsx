import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx'; 

function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />  {/* This will render the Footer */}
        </div>
    );
}

export default Layout;
