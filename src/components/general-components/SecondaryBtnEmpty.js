import { Link } from "react-router-dom";

const SecondaryBtnEmpty = (props) => {
  return (
    <Link className="button-second-empty" to={props.to}>
      {props.btnName}
    </Link>
  );
};

export default SecondaryBtnEmpty;
