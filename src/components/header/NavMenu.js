import { Fragment } from "react";
import classes from './Header.module.css'

const NavMenu = () => {
    return <Fragment>
        <ul className={classes['nav-menu']}>
            <li className={classes['nav-link']}>
                <a href="#">Women</a>
            </li>
            <li className={classes['nav-link']}>
                <a href="#">Men</a>
            </li>
        </ul>
    </Fragment>
}

export default NavMenu;