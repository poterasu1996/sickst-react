import { Fragment } from "react";

const Logo = () => {
    return <Fragment>
        <div className='logo'>
            <a href="/" className='logo-link'>
                <h1 className='big-s'>S</h1>
                <div className='sickst'>
                    <h3 className='pt-1'>ickst</h3>
                    <h4 className='pt-2'>&bull;Bucharest</h4>
                </div>
            </a>
        </div>
    </Fragment>
}

export default Logo;