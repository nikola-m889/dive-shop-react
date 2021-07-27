import React from "react";
import { ScubaConsumer } from "../context";
import ProductFilter from "./ProductFilter";

export default function ModalFi({ products }) {
  return (
    <div>
      <ScubaConsumer>
        {(value) => {
          const { filterOn, modalFilterOff } = value;
          if (!filterOn) {
            return null;
          } else {
            return (
              <div className="filter-container">
                <div className="filter-info">
                  <ProductFilter products={products} />
                  <button
                    type="button"
                    className="btn-modal"
                    onClick={modalFilterOff}
                  >
                    Back to products
                  </button>
                </div>
              </div>
            );
          }
        }}
      </ScubaConsumer>
    </div>
  );
}
