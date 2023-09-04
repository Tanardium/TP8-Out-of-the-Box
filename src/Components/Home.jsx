import React, { Fragment } from "react";
import Carrousel from "./Carrousel";
import TemperatureChart from "./Grafico";

const Home = () => {
    return (
        <Fragment>
            <h1 className='title'>Eco News</h1>
            <Carrousel/>
        </Fragment>
    )
}

export default Home

