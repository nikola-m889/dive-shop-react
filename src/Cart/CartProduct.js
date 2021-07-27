import React from "react";
import { Link } from "react-router-dom";

export default function CartProduct({ value, product }) {
  const { id, img, name, price, count, slug } = product;
  const { increment, decrement, removeProduct } = value;

  return (
    <div className="cart-product-main">
      <div className="cart-product-image">
        <img src={img} alt={name} />
      </div>
      {/* end of image */}
      <div className="cart-product-name">
        <Link to={`/products/${slug}`}>
          <p>{name}</p>
        </Link>
      </div>
      {/* end of name */}
      <div className="cart-product-number">
        <div className="quantity">
          <div className="decrement" onClick={() => decrement(id)}>
            -
          </div>
          <div className="count">{count}</div>
          <div className="increment" onClick={() => increment(id)}>
            +
          </div>
        </div>
        <p className="delete-product" onClick={() => removeProduct(id)}>
          Delete
        </p>
      </div>
      {/* end of numbers */}
      <div className="cart-product-price">
        <p>$ {price}</p>
      </div>
    </div>
  );
}
