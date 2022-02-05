import { Link } from "react-router-dom";

const PrimaryBtn = (props) => {
    return <Link className="button-primary big mt-5" to={props.to}>{props.btnName}</Link>
};

export default PrimaryBtn;