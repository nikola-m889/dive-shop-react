import React from "react";
import CartProduct from "./CartProduct";

export default function CartItems({ value }) {
  const { basket } = value;
  return (
    <div>
      {basket.map((product) => {
        return <CartProduct key={product.id} value={value} product={product} />;
      })}
    </div>
  );
}
