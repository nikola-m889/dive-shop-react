import React from "react";
import { ScubaConsumer } from "../context";
import CartItems from "./CartItems";
import CartZero from "./CartZero";
import CartSum from "./CartSum";

export default function Cart() {
  return (
    <div className="basket-containter">
      <ScubaConsumer>
        {(value) => {
          const { basket } = value;
          if (basket.length > 0)
            return (
              <>
                <h2>Shopping basket ({basket.length})</h2>
                <div className="basket-center">
                  <CartItems value={value} />
                  <CartSum value={value} />
                </div>
              </>
            );
          else {
            return <CartZero />;
          }
        }}
      </ScubaConsumer>
    </div>
  );
}
