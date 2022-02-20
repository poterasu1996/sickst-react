import { Button } from "react-bootstrap";

const PrimaryBtn = (props) => {
    return <Button {...props} className="button-primary big mt-5">{props.btnname}</Button>
};

export default PrimaryBtn;