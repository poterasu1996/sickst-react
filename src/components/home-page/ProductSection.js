import { Fragment } from "react";

import Product from "./Product";
import SecondaryBtnEmpty from "../general-components/SecondaryBtnEmpty";

import image1 from "../../assets/img/fougere-fragrance-family-Clive-Christian-Perfumes-1555x1100.jpg";
import image2 from "../../assets/img/versace-eros.jpg";
import image3 from "../../assets/img/dolce-gabbana-the-one-for-men.jpg";

const ProductSection = () => {
  const list = [
    {
      image: image1,
      brand: "Invictus",
      model: "Eau de toilette",
      price: "120",
    },
    {
      image: image2,
      brand: "Sauvage",
      model: "Eau de parfum",
      price: "290",
    },
    {
      image: image3,
      brand: "Paco Rabanne",
      model: "Parfum",
      price: "550",
    },
    {
      image: image1,
      brand: "Invictus",
      model: "Eau de toilette",
      price: "120",
    },
    {
      image: image2,
      brand: "Sauvage",
      model: "Eau de parfum",
      price: "290",
    },
    {
      image: image3,
      brand: "Paco Rabanne",
      model: "Parfum",
      price: "550",
    },
  ];

  const size = 3
  const items = list.slice(0, size)

  const moreProductsHandler = (clicknr) => {
    items = 0
  }

  console.log(items.length)

  return (
    <Fragment>
      <div className="products-section">
        <div className="container">
          <div className="title">Cele mai dorite parfumuri</div>
          <div className="filter-tabs">
            <a className="active man" href="#">
              Pentru el
            </a>
            <a href="#">Pentru ea</a>
          </div>

          <div className="products">
            <div className="row">
              {items.map((item, index) => (
                <Product
                  key={index}
                  image={item.image}
                  brand={item.brand}
                  model={item.model}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div className="more-prod">
            <SecondaryBtnEmpty btnname={"Vezi mai multe produse"} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductSection;
