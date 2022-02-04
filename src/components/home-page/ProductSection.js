import { Fragment } from "react";
import Product from "./Product";
import image1 from "../../assets/img/fougere-fragrance-family-Clive-Christian-Perfumes-1555x1100.jpg";
import image2 from "../../assets/img/versace-eros.jpg";
import image3 from "../../assets/img/dolce-gabbana-the-one-for-men.jpg";

const ProductSection = () => {
    return <Fragment>
        <div className="products-section">
            <div className="container">
                <div className="title">Cele mai dorite parfumuri</div>
                <div className="filter-tabs">
                    <a className="active man" href="#">Pentru el</a>
                    <a href="#">Pentru ea</a>
                </div>

                <div className="products">
                    <div className="row">
                        <Product 
                            image={image1}
                            brand={'Invictus'}
                            model={'Eau de toilete'}
                            price={'221'}
                        />
                        <Product 
                            image={image2}
                            brand={'Sauvage'}
                            model={'Eau de parfum'}
                            price={'321'}
                        />
                        <Product 
                            image={image3}
                            brand={'Paco Rabanne'}
                            model={'Parfum'}
                            price={'521'}
                        />
                    </div>
                </div>

            </div>
        </div>
    </Fragment>
}

export default ProductSection;