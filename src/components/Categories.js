import React from "react";
import { Link } from "react-router-dom";
import { ShopButton } from "./ShopButton";
import styled from "styled-components";

export default function Categories() {
  return (
    <StyledCategory>
      <div className="categories-col">
        <div className="category">
          <Link to="/masks">
            <img src="./images/mask1.jpg" alt="scuba masks" />
            <p className="p-title">Diving Masks</p>
            <p className="p-subtitle">
              Shop our huge selection of Diving Fins! Find the best dive
              equipment and buy at best price your Suits and complements
              products. Fast shipping and secure payment at scubastore!
            </p>
            <p className="p-main">Diving Masks</p>
            <ShopButton className="b-title">View all products</ShopButton>
          </Link>
        </div>

        <div className="category">
          <Link to="/fins">
            <img src="./images/fins2.jpg" alt="scuba fins" />
            <p className="p-title">Diving Fins</p>
            <p className="p-subtitle">
              Shop our huge selection of Diving Fins! Find the best dive
              equipment and buy at best price your Suits and complements
              products. Fast shipping and secure payment at scubastore!
            </p>
            <p className="p-main">Diving Fins</p>
            <ShopButton className="b-title">View all products</ShopButton>
          </Link>
        </div>

        <div className="category">
          <Link to="/regulators">
            <img src="./images/regulator3.png" alt="scuba regulators" />
            <p className="p-title">Regulators</p>
            <p className="p-subtitle">
              Shop our huge selection of Diving Fins! Find the best dive
              equipment and buy at best price your Suits and complements
              products. Fast shipping and secure payment at scubastore!
            </p>
            <p className="p-main">Regulators</p>
            <ShopButton className="b-title">View all products</ShopButton>
          </Link>
        </div>
        {/* Photo by <a href="https://foter.co/a6/f9de52">Reef-World</a> on <a href="https://foter.com/re8/3fe6e5">Foter.com</a>*/}

        <div className="category">
          <Link to="/suits">
            <img src="./images/suit.png" alt="scuba suits" />
            <p className="p-title">Diving Suits</p>
            <p className="p-subtitle">
              Shop our huge selection of Diving Fins! Find the best dive
              equipment and buy at best price your Suits and complements
              products. Fast shipping and secure payment at scubastore!
            </p>
            <p className="p-main">Diving Suits</p>
            <ShopButton className="b-title">View all products</ShopButton>
          </Link>
        </div>
      </div>
    </StyledCategory>
  );
}

const StyledCategory = styled.div`
  padding: 1rem 0;

  .categories-col {
    width: 85vw;
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 30px;
    grid-row-gap: 2.6rem;
  }
  .category {
    position: relative;
    border: 2px solid #333;
    overflow: hidden;
  }

  .category img {
    width: 100%;
    height: 100%;
    display: block;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    overflow: hidden;
  }

  .category:hover {
    background: rgba(0, 1, 2, 0.692);
  }

  .category:hover img {
    opacity: 0.1;
  }

  .p-main {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: var(--wordSpacing);
  }

  .p-title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-100%);
    font-weight: bold;
    color: white;
    white-space: nowrap;
    text-align: center;
    font-size: 1.6rem;
    transition: all 0.4s ease-in-out;
  }

  .p-subtitle {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 10px;
    transform: translateY(120%);
    text-align: center;
    color: white;
    transition: all 0.4s ease-in-out;
  }

  .b-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: 33px;
    transform: translateY(150%);
  }

  .category:hover .p-title {
    transform: translateY(80%);
  }

  .category:hover .p-subtitle {
    transform: translateY(-50%);
  }

  .category:hover .b-title {
    transform: translateY(-80%);
  }
  .category:hover .p-main {
    opacity: 0;
  }

  @media screen and (max-width: 1450px) {
    .p-title,
    .p-subtitle,
    .b-title {
      display: none;
    }
    .category:hover img {
      opacity: 1;
    }

    .category:hover .p-main {
      opacity: 1;
    }
  }
  @media screen and (max-width: 600px) {
    .categories-col {
      width: 65vw;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 30px;
      grid-row-gap: 2.6rem;
    }
  }
`;
