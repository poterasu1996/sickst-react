import { Fragment } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const NavMenu = () => {
    return <Fragment>
        <ul className='nav-menu'>
            <li className='nav-link'>
                <NavLink activeClassName='active-link' btnName={'Women'} to={'subscriptions-women'} />
            </li>
            <li className='nav-link'>
                <NavLink btnName={'Men'} to={'subscriptions-men'} />
            </li>
        </ul>
    </Fragment>
}

export default NavMenu;