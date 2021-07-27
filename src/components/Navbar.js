import React, { Component } from "react";
import { FiMenu } from "react-icons/fi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ScubaConsumer } from "../context";

export default class Navbar extends Component {
  state = {
    toggleMenu: false,
  };
  handleMenu = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu,
    });
  };

  render() {
    return (
      <div className="main-nav">
        <Link to="/">
          <img
            src="../images/logo.png"
            alt="diving shop"
            className="shop-logo"
          />
        </Link>

        <ul
          className={
            this.state.toggleMenu ? "navigation nav-menu" : "navigation"
          }
        >
          <div className="link-list">
            <li onClick={this.handleMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={this.handleMenu}>
              <Link to="/products">Products</Link>
            </li>
            <li onClick={this.handleMenu}>
              <Link to="/about">About Us</Link>
            </li>
            <li onClick={this.handleMenu}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </div>
        </ul>

        <div className="right-menu">
          <ScubaConsumer>
            {(value) => {
              return (
                <>
                  <Link to="/cart">
                    <p className="b-count">{value.basket.length}</p>
                    <RiShoppingCart2Fill />
                  </Link>
                  <button
                    type="button"
                    onClick={this.handleMenu}
                    className="btn-header"
                  >
                    <FiMenu />
                  </button>
                </>
              );
            }}
          </ScubaConsumer>
        </div>
      </div>
    );
  }
}
