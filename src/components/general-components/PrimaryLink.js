import { Link } from "react-router-dom";

const PrimaryLink = (props) => {
    return <Link className="button-primary big mt-5" to={props.to}>{props.btnname}</Link>
};

export default PrimaryLink;