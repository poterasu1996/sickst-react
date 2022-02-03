import { Fragment } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Banner.module.css'

import PrimaryBtn from "../general-components/PrimaryBtn";

const Banner = () => {
    const lsClasses = `col-6 ${classes['left-side']}`
    const subClass = `${classes.subtitle} mt-5`
    const btnClass = `${classes['button-primary']} big mt-5`

    return <Fragment>
        <div className={classes.banner}>
            <div className="container">
                <div className="row">
                    <div className={lsClasses}>
                        <span className={classes.title}>Beneficiaza de 10% discount in prima luna!</span>
                        <span className={subClass}>Acum ai ocazia de a construi colectia de parfumuri mult dorita mult mai usor decat ai crede. De ce sa te limitezi la un parfum, cand poti avea 6?</span>
                        <PrimaryBtn />
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
};

export default Banner;