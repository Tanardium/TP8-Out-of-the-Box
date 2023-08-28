import React, { Fragment } from "react";
import Carrousel from "./Carrousel";
import Picos from "./Picos";

const Home = () => {
    return (
        <Fragment>
            <h1 className='title'>Eco News</h1>
            <Carrousel/>
            <Picos/>
        </Fragment>
    )
}

export default Home

