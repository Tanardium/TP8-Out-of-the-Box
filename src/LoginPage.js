import React, { Fragment } from "react";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import LoginDiseño from "./LoginDiseño.css"

const LoginPage = () => {
    return (
        <Fragment>
        <Layout />
            <Login />
        </Fragment>
    )
}

export default LoginPage;

