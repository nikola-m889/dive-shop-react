import React from "react";
import { ScubaConsumer } from "../context";
import Product from "../components/Product";
import Title from "../components/Title";

export default function Masks() {
  return (
    <div>
      <ScubaConsumer>
        {(value) => {
          return (
            <div>
              <Title title="Diving masks" />
              <div className="products-category">
                {value.masks.map((item) => {
                  return <Product key={item.id} product={item} />;
                })}
              </div>
            </div>
          );
        }}
      </ScubaConsumer>
    </div>
  );
}
