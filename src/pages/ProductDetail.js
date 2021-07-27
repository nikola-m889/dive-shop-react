import React, { Component } from "react";
import { ScubaContext } from "../context";
import { ShopButton } from "../components/ShopButton";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
    };
  }
  static contextType = ScubaContext;
  render() {
    const { getProduct, addToCart, modalActivate } = this.context;
    const product = getProduct(this.state.slug);
    console.log(product);
    if (!product) {
      return (
        <div className="error">
          <h3>Sorry, your product was found</h3>
        </div>
      );
    }
    const {
      img,
      id,
      name,
      price,
      info,
      manufacturer,
      features,
      inStock,
      inCart,
    } = product;
    return (
      <>
        <div className="product-details">
          <div className="details-img">
            <img src={img} alt={name} />
          </div>
          {/* product image end */}
          <div className="details-info">
            <h2>{name}</h2>
            <h4>Manufacturer: {manufacturer}</h4>
            <h3>Price: $ {price}</h3>
            <br></br>
            <ShopButton
              basket
              disabled={inCart ? true : false}
              onClick={() => {
                modalActivate(id);
                addToCart(id);
              }}
            >
              {inCart ? "Added to Basket" : "Add to Basket"}
            </ShopButton>
            <span>{inStock ? "In Stock" : "Out of stock"}</span>
          </div>
          {/* info end */}
        </div>
        <div className="product-details">
          <div className="details-full">
            <h3>Information</h3>
            <p>{info}</p>
          </div>
          <div className="features-full">
            <h3>Features</h3>
            <ul className="features-list">
              {features.map((item, index) => {
                return <li key={index}>- {item}</li>;
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
