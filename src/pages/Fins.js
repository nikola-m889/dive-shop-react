import React from "react";
import { ScubaConsumer } from "../context";
import Product from "../components/Product";
import Title from "../components/Title";

export default function Fins() {
  return (
    <div>
      <ScubaConsumer>
        {(value) => {
          return (
            <>
              <Title title="Diving fins" />
              <div className="products-category">
                {value.fins.map((item) => {
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
