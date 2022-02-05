import { Fragment } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const NavMenu = () => {
    return <Fragment>
        <ul className='nav-menu'>
            <li className='nav-link'>
                <NavLink btnName={'Women'} to={'subscription/women'} />
            </li>
            <li className='nav-link'>
                <NavLink btnName={'Men'} to={'subscription/men'} />
            </li>
        </ul>
    </Fragment>
}

export default NavMenu;