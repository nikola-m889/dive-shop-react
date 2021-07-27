import React from "react";
import { ScubaConsumer } from "../context";
import Product from "./Product";

export default function BestDeals() {
  return (
    <div>
      <ScubaConsumer>
        {(value) => {
          const { bestDeals } = value;

          return (
            <div className="deals-container">
              {bestDeals.map((item) => {
                return <Product key={item.id} product={item} />;
              })}
            </div>
          );
        }}
      </ScubaConsumer>
    </div>
  );
}
