import { Fragment } from "react";

import Logo from "./Logo";
import logo1 from '../../assets/img/svg/parfumerie-douglas-vector-logo.svg'
import logo2 from '../../assets/img/svg/sephora.svg'

const LogoGrid = () => {
    return <Fragment>
        <div className="logo-grid">
            <div className="row">
                {/* logo */}
                <Logo logo={logo1}/>
                <Logo logo={logo2}/>
                <Logo logo={logo1}/>
                <Logo logo={logo2}/>
                <Logo logo={logo1}/>
                <Logo logo={logo2}/>
                <Logo logo={logo1}/>
                <Logo logo={logo2}/>
                <Logo logo={logo1}/>
            </div>
        </div>
    </Fragment>
}

export default LogoGrid;