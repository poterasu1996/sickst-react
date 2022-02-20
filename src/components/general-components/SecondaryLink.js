import { Link } from "react-router-dom";

const SecondaryLink = (props) => {
    let extraClass = '';
    if (props.className){
        extraClass = props.className;
    }
    return (
        <Link className={`button-second ${extraClass}`} to={props.to}>{props.btnname}</Link>
    );
}

export default SecondaryLink;