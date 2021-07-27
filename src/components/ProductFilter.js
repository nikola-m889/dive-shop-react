import React from "react";
import { ScubaConsumer } from "../context";

const specificType = (productItems, value) => {
  return [...new Set(productItems.map((item) => item[value]))];
};
export default function ProductFilter({ products }) {
  return (
    <ScubaConsumer>
      {(value) => {
        let {
          handleChange,
          type,
          price,
          minPrice,
          maxPrice,
          manufacturer,
          color,
          age,
          filterOn,
        } = value;

        let types = specificType(products, "type");
        types = ["all", ...types];
        types = types.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        });
        let manufacturers = specificType(products, "manufacturer");
        manufacturers = ["all", ...manufacturers];
        manufacturers = manufacturers.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        });

        let colors = specificType(products, "color");
        colors = ["all", ...colors];
        colors = colors.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        });

        let ageCategory = specificType(products, "age");
        ageCategory = ["all", ...ageCategory];
        ageCategory = ageCategory.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        });

        return (
          <div className={filterOn ? `filter set` : `filter`}>
            <form>
              <div className="form-section">
                <label htmlFor="price">Product price: ${price}</label>
                <input
                  type="range"
                  name="price"
                  min={minPrice}
                  max={maxPrice}
                  id="price"
                  value={price}
                  onChange={handleChange}
                />
              </div>
              {/* end of price form section*/}
              <div className="form-section">
                <label htmlFor="type">Product type: </label>
                <select
                  name="type"
                  id="type"
                  value={type}
                  onChange={handleChange}
                >
                  {types}
                </select>
              </div>
              {/* end of type form section*/}
              <div className="form-section">
                <label htmlFor="brand">Brand: </label>
                <select
                  name="manufacturer"
                  id="brand"
                  value={manufacturer}
                  onChange={handleChange}
                >
                  {manufacturers}
                </select>
              </div>
              {/* end of brand form section*/}
              <div className="form-section">
                <label htmlFor="color">Color: </label>
                <select
                  name="color"
                  id="color"
                  value={color}
                  onChange={handleChange}
                >
                  {colors}
                </select>
              </div>
              {/* end of color form section*/}
              <div className="form-section">
                <label htmlFor="age">Age: </label>
                <select name="age" id="age" value={age} onChange={handleChange}>
                  {ageCategory}
                </select>
              </div>
            </form>
          </div>
        );
      }}
    </ScubaConsumer>
  );
}
