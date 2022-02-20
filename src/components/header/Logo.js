import { Fragment } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return <Fragment>
        <div className='logo'>
            <Link to="/" className='logo-link'>
                <h1 className='big-s'>S</h1>
                <div className='sickst'>
                    <h3 className='pt-1'>ickst</h3>
                    <h4 className='pt-2'>&bull;Bucharest</h4>
                </div>
            </Link>
        </div>
    </Fragment>
}

export default Logo;