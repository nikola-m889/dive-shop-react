import React from "react";
import { ScubaConsumer } from "../context";
import { Link } from "react-router-dom";

export default function Modal() {
  return (
    <>
      <ScubaConsumer>
        {(value) => {
          const { modalOn, modalClose } = value;
          const { img, name, price, slug } = value.modalData;
          if (!modalOn) {
            return null;
          } else {
            return (
              <div className="modal-container">
                <div className="modal-info">
                  <p>Item added to the basket</p>
                  <div className="modal-content">
                    <img src={img} alt={name} />
                    <h6>{name}</h6>
                    <p>$ {price}</p>
                  </div>
                  <div className="modal-options">
                    <Link to={`/products/${slug}`}>
                      <button
                        type="button"
                        className="btn-modal"
                        onClick={modalClose}
                      >
                        continue shopping
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button
                        type="button"
                        className="btn-modal"
                        onClick={modalClose}
                      >
                        view basket
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ScubaConsumer>
    </>
  );
}
