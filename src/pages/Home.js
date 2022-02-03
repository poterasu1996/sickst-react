import React from "react";
import { Fragment } from "react";

import Header from "../components/header/Header";
import Banner from "../components/home-page/Banner";

const Home = () => {
    return <Fragment>
        <Header />
        <div className="main-content">
            <Banner />
        </div>
    </Fragment>
    
}

export default Home;