import { Fragment } from "react";
import CardButton from "../general-components/CardButton";
import star from "../../assets/img/svg/star.svg";

const Product = (props) => {
    return <Fragment>
        <div className="col-4">
            <div className="product-card">
                <div className="product-card-image">
                    <img src={props.image}></img>
                    <span className="tag black">Exclussive</span>
                </div>
                <div className="product-card-rating">
                    <div className="five-stars">
                        <img src={star}></img>
                        <img src={star}></img>
                        <img src={star}></img>
                        <img src={star}></img>
                        <img src={star}></img>
                    </div>
                </div>
                <div className="product-card-title">
                    <span className="brand">Invictus</span>
                    <span className="model">Parfume</span>
                </div>
                <div className="product-card-fragrance">Fragrance elements</div>
                <div className="product-card-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur esse quia officia, 
                    inventore rerum reprehenderit sed placeat excepturi perspiciatis natus laboriosam quibusdam unde?
                </div>
                <CardButton price={'122'} />
            </div>
        </div>           
    </Fragment>
}

export default Product;