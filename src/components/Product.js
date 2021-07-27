import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { img, slug, name, price } = product;
  return (
    <div className="product">
      <Link to={`/products/${slug}`}>
        <div className="img-wrapper">
          <img src={img} alt="diving product" />
        </div>
        <div className="product-footer">
          <h4>{name}</h4>
          <p>$ {price}</p>
        </div>
      </Link>
    </div>
  );
}
