import React, { Fragment } from "react";
import Carrousel from "./Carrousel";
import Mapa from "./Mapa";

const Home = () => {
    return (
        <Fragment>
            <h1 className='title'>Eco News</h1>
            <Carrousel/>
            <Mapa/>
        </Fragment>
    )
}

export default Home

