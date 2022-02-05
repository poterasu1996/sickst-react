import React from "react";
import { Fragment } from "react";

import Header from "../components/header/Header";
import Banner from "../components/home-page/Banner";
import SubsInfo from "../components/home-page/SubsInfo";
import Brands from "../components/home-page/Brands";
import Subscriptions from "../components/home-page/Subscriptions";
import ProductSection from "../components/home-page/ProductSection";
import BannerBottom from "../components/home-page/BannerBottom";
import Footer from "../components/footer/Footer";

const Home = () => {
    return <Fragment>
        <Header />
        <div className="main-content">
            <Banner />
            <div className="main-body">
                <SubsInfo />
                <Brands />
                <Subscriptions />
                <ProductSection />
                <BannerBottom />
            </div>
        </div>
        <Footer />
    </Fragment>
}

export default Home;