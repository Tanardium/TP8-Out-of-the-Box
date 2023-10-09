import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ContextUsuario } from "../context/ContextUsuario";


const Layout = () => {
    const {autenticado} = React.useContext(ContextUsuario);
    if (autenticado == true)
    {
        return(
            <React.Fragment>
            <div>
                <nav className='navbar'>
                    <Link to={'/perfil'} className='nav-link'><img src="/perfil.png" width={50}/></Link>
                    <Link to={'/'} className='nav-link'><h3>Home</h3></Link>
                    <Link to={'/informacion'} className='nav-link'><h3>+Info</h3></Link>
                </nav>
            </div>
            <div className='content'>
                <Outlet/>
            </div>
        </React.Fragment>
        )
    }
            
    else {
        return (
        <React.Fragment>
            <div>
                <nav className='navbar'>
                    <Link to={'/login'} className='nav-link'><img src="/perfil.png" width={50}/></Link>
                    <Link to={'/'} className='nav-link'><h3>Home</h3></Link>
                    <Link to={'/informacion'} className='nav-link'><h3>+Info</h3></Link>
                </nav>
            </div>
            <div className='content'>
                <Outlet/>
            </div>
        </React.Fragment>
        )
    }

}

export default Layout