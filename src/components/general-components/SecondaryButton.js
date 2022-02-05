import { Link } from "react-router-dom";

const SecondaryButton = (props) => {
    let btnSize = '';
    if (props.size){
        btnSize = props.size;
    }
    return (
        <Link className={`button-second ${btnSize} mt-5`} to={props.to}>{props.btnName}</Link>
    );
}

export default SecondaryButton;