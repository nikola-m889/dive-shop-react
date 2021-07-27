import React from "react";
import { ScubaConsumer } from "../context";
import Product from "../components/Product";
import Title from "../components/Title";

export default function Regulators() {
  return (
    <div>
      <ScubaConsumer>
        {(value) => {
          return (
            <>
              <Title title="Regulators" />
              <div className="products-category">
                {value.regulators.map((item) => {
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
