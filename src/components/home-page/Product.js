import { Fragment } from "react";
import CardButton from "../general-components/CardButton";
import star from "../../assets/img/svg/star.svg";

const Product = (props) => {
    return <Fragment>
        <div className="col-4">
            <div className="product-card">
                <div className="product-card-image">
                    <img src={props.image} alt=""></img>
                    <span className="tag black">Exclussive</span>
                </div>
                <div className="product-card-rating">
                    <div className="five-stars">
                        <img src={star} alt=""></img>
                        <img src={star} alt=""></img>
                        <img src={star} alt=""></img>
                        <img src={star} alt=""></img>
                        <img src={star} alt=""></img>
                    </div>
                </div>
                <div className="product-card-title">
                    <span className="brand">{props.brand}</span>
                    <span className="model">{props.model}</span>
                </div>
                <div className="product-card-fragrance">Fragrance elements</div>
                <div className="product-card-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur esse quia officia, 
                    inventore rerum reprehenderit sed placeat excepturi perspiciatis natus laboriosam quibusdam unde?
                </div>
                <CardButton price={props.price} />
            </div>
        </div>           
    </Fragment>
}

export default Product;