import React from "react";
import { ShopButton } from "../components/ShopButton";

export default function CartSum({ value }) {
  const { productSum, tax, total, clearBasket } = value;
  return (
    <div className="cart-totals">
      <div className="totals-wrapper">
        <div className="subtotal">
          <p>Subtotal: </p>
          <p>$ {productSum}</p>
        </div>
        <div className="tax">
          <p>Tax: </p>
          <p>$ {tax}</p>
        </div>
        <div className="total">
          <span>Total cost:</span>
          <p>$ {total}</p>
        </div>
      </div>
      <ShopButton basket onClick={clearBasket}>
        Clear Cart
      </ShopButton>
    </div>
  );
}
