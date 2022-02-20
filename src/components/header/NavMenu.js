import { Fragment } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const NavMenu = () => {
    return <Fragment>
        <ul className='nav-menu'>
            <li className='nav-link'>
                <Link to='subscriptions-women'>Women</Link>
            </li>
            <li className='nav-link'>
                <Link to='subscriptions-men'>Men</Link>
            </li>
        </ul>
    </Fragment>
}

export default NavMenu;