import React from "react";
import { Link, Outlet } from "react-router-dom";


const Layout = () => {
    return (
    <React.Fragment>
        <nav>
            <Link to={'/'}>Home</Link>
            <br/>
            <Link to={'/informacion'}>Informacion</Link>
        </nav>
        <Outlet/>
    </React.Fragment>)
}

export default Layout