import { Button } from "react-bootstrap";

const SecondaryButton = (props) => {
    let btnSize = '';
    if (props.size){
        btnSize = props.size;
    }
    return (
        <Button className={`button-second ${btnSize}`}>{props.btnname}</Button>
    );
}

export default SecondaryButton;