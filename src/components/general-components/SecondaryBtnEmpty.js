import { Button } from "react-bootstrap";

const SecondaryBtnEmpty = (props) => {
  return (
    <Button {...props} className="button-second-empty">{props.btnname}</Button>
  );
};

export default SecondaryBtnEmpty;
