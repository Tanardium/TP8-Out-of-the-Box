import React from "react";
import { Link, Outlet } from "react-router-dom";


const Layout = () => {
    return (
    <React.Fragment>
        <div>
            <nav className='navbar'>
                <Link to={'/login'} className='nav-link'>Login</Link>
                <Link to={'/'} className='nav-link'>Home</Link>
                <Link to={'/informacion'} className='nav-link'>Informacion</Link>
            </nav>
        </div>
        <div className='content'>
            <Outlet/>
        </div>
    </React.Fragment>)
}

export default Layout