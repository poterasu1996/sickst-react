import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
    return <Fragment>
        <Link to={props.to}>{props.btnName}</Link>
    </Fragment>
}

export default NavLink;