import { Fragment } from "react";
import classes from './Header.module.css'

const Logo = () => {
    return <Fragment>
        <div className={classes.logo}>
            <a href="/" className={classes['logo-link']}>
                <h1 className={classes['big-s']}>S</h1>
                <div className={classes.sickst}>
                    <h3 className={classes['pt-1']}>ickst</h3>
                    <h4 className={classes['pt-2']}>&bull;Bucharest</h4>
                </div>
            </a>
        </div>
    </Fragment>
}

export default Logo;