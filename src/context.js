import React, { Component } from "react";
import { divingGear, divingGearDetails } from "./data";

const ScubaContext = React.createContext();

export default class ScubaProvider extends Component {
  state = {
    products: [],
    bestDeals: [],
    sortedProducts: [],
    basket: [],
    masks: [],
    fins: [],
    regulators: [],
    suits: [],
    type: "all",
    manufacturer: "all",
    color: "all",
    age: "all",
    modalOn: false,
    modalData: divingGearDetails,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    productSum: 0,
    tax: 0,
    total: 0,
    filterOn: false,
  };

  componentDidMount() {
    this.setProducts();
    let scubaProducts = this.setCategory(divingGear);
    let featuredProducts = scubaProducts.filter(
      (item) => item.featured === true
    );
    let maskInventory = scubaProducts.filter((item) => item.type === "mask");
    let finsInventory = scubaProducts.filter((item) => item.type === "fins");
    let regulatorInventory = scubaProducts.filter(
      (item) => item.type === "regulator"
    );
    let suitInventory = scubaProducts.filter((item) => item.type === "suit");
    let maxPrice = Math.max(...scubaProducts.map((product) => product.price));
    this.setState(
      {
        products: scubaProducts,
        bestDeals: featuredProducts,
        sortedProducts: scubaProducts,
        masks: maskInventory,
        fins: finsInventory,
        regulators: regulatorInventory,
        suits: suitInventory,
        price: maxPrice,
        maxPrice,
      },
      () => this.calculateTotal()
    );
  }

  setProducts = () => {
    let copyProducts = [];
    divingGear.forEach((item) => {
      let product = { ...item };
      copyProducts = [...copyProducts, product];
    });
    this.setState(() => {
      return {
        products: copyProducts,
      };
    });
  };

  setCategory(divingGear) {
    let tempItems = divingGear.map((item) => {
      let scubaItem = { ...item };
      return scubaItem;
    });
    return tempItems;
  }

  getProduct = (slug) => {
    let tempProducts = [...this.state.products];
    const specProduct = tempProducts.find((product) => product.slug === slug);
    return specProduct;
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const basketProduct = tempProducts[index];
    basketProduct.inCart = true;
    basketProduct.count = 1;
    const price = basketProduct.price;
    basketProduct.total = price;

    this.setState(
      () => {
        return {
          products: tempProducts,
          basket: [...this.state.basket, basketProduct],
        };
      },
      () => {
        this.calculateTotal();
      }
    );
  };

  modalActivate = (id) => {
    const modalProduct = this.getItem(id);
    this.setState(() => {
      return {
        modalData: modalProduct,
        modalOn: true,
      };
    });
  };

  modalClose = () => {
    this.setState(() => {
      return {
        modalOn: false,
      };
    });
  };

  calculateTotal = () => {
    let subTotal = 0;
    this.state.basket.map((item) => (subTotal += item.total));
    const productTax = subTotal * 0;
    const tax = parseFloat(productTax.toFixed(2));
    const finalCost = subTotal + tax;
    this.setState(() => {
      return {
        productSum: subTotal,
        tax: tax,
        total: finalCost,
      };
    });
  };

  clearBasket = () => {
    this.setState(
      () => {
        return {
          basket: [],
        };
      },
      () => {
        this.setProducts();
      }
    );
  };

  removeProduct = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.basket];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    let filterCart = tempCart.filter((item) => item.id !== id);
    product.inCart = false;
    product.count = 0;
    product.total = 0;

    this.setState(
      () => {
        return {
          products: tempProducts,
          basket: filterCart,
        };
      },
      () => {
        this.calculateTotal();
      }
    );
  };

  increment = (id) => {
    let tempCart = [...this.state.basket];
    const cartItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(cartItem);

    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          basket: [...tempCart],
        };
      },
      () => {
        this.calculateTotal();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.basket];
    const cartItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(cartItem);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeProduct(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            basket: [...tempCart],
          };
        },
        () => {
          this.calculateTotal();
        }
      );
    }
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterProducts
    );
  };

  filterProducts = () => {
    let { products, price, type, manufacturer, color, age } = this.state;

    let tempProducts = [...products];

    tempProducts = tempProducts.filter((product) => product.price <= price);

    if (type !== "all") {
      tempProducts = tempProducts.filter((product) => product.type === type);
    }

    if (manufacturer !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.manufacturer === manufacturer
      );
    }

    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => product.color === color);
    }

    if (age !== "all") {
      tempProducts = tempProducts.filter((product) => product.age === age);
    }

    this.setState({
      sortedProducts: tempProducts,
    });
  };

  modalFilterOn = () => {
    this.setState(() => {
      return {
        filterOn: true,
      };
    });
  };

  modalFilterOff = () => {
    this.setState(() => {
      return {
        filterOn: false,
      };
    });
  };

  render() {
    return (
      <ScubaContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          addToCart: this.addToCart,
          modalActivate: this.modalActivate,
          modalClose: this.modalClose,
          clearBasket: this.clearBasket,
          increment: this.increment,
          decrement: this.decrement,
          removeProduct: this.removeProduct,
          handleChange: this.handleChange,
          modalFilterOn: this.modalFilterOn,
          modalFilterOff: this.modalFilterOff,
        }}
      >
        {this.props.children}
      </ScubaContext.Provider>
    );
  }
}

const ScubaConsumer = ScubaContext.Consumer;

export { ScubaProvider, ScubaConsumer, ScubaContext };
