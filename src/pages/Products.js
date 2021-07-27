import React from "react";
import { ScubaConsumer } from "../context";
import Product from "../components/Product";
import ProductFilter from "../components/ProductFilter";
import Title from "../components/Title";
import { IoIosSwitch } from "react-icons/io";
import ModalFi from "../components/ModalFi";

export default function Products() {
  return (
    <div>
      <ScubaConsumer>
        {(value) => {
          const { sortedProducts, products, modalFilterOn } = value;
          return (
            <>
              <button className="btn-filter" onClick={modalFilterOn}>
                <IoIosSwitch className="filter-icon" />
              </button>
              <Title title="Products" />
              <div className="products-center">
                <ProductFilter products={products} />
                <div className="products">
                  {sortedProducts.map((item) => {
                    return <Product key={item.id} product={item} />;
                  })}
                </div>
              </div>
              <ModalFi products={products} />
            </>
          );
        }}
      </ScubaConsumer>
    </div>
  );
}
