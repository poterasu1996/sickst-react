import { Fragment } from "react";

import brandImg from '../../assets/img/parfume-img.jpg';
import LogoGrid from "./LogoGrid";
import PrimaryBtn from "../general-components/PrimaryBtn";

const Brands = () => {
    return <Fragment>
        <div className="row brands">
            <div className="col-12 col-md-6 left-side">
                <img src={brandImg}></img>
            </div>
            <div className="col-12 col-md-6 right-side">
                <div className="text">
                    <span className="title">Doar produse autentice.</span>
                    <span className="subtitle">Colaboram doar cu distribuitori autorizati, asigurand produse 100% autentice.</span>
                </div>
                <LogoGrid />
                <PrimaryBtn btnName={'Afla mai multe'} to={'/register'}/>
            </div>
        </div>
    </Fragment>
}

export default Brands;