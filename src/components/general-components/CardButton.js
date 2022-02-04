import { Fragment } from "react";

const CardButton = (props) => {
    return <Fragment>
        <div className="product-card-button">
            <div>
                <a className="card-button" href="#">Add to queue</a>
            </div>
            <div>
                <span className="price">RON: {props.price}</span>
            </div>
        </div>
    </Fragment>
}

export default CardButton;