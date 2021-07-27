import React from "react";
import { ScubaConsumer } from "../context";
import Product from "../components/Product";
import Title from "../components/Title";

export default function Suits() {
  return (
    <div>
      <ScubaConsumer>
        {(value) => {
          return (
            <>
              <Title title="Diving suits" />
              <div className="products-category">
                {value.suits.map((item) => {
                  return <Product key={item.id} product={item} />;
                })}
              </div>
            </>
          );
        }}
      </ScubaConsumer>
    </div>
  );
}
