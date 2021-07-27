import React from "react";
import { Link } from "react-router-dom";
import { ShopButton } from "../components/ShopButton";
import Title from "../components/Title";
import Categories from "../components/Categories";
import BestDeals from "../components/BestDeals";

export default function Home() {
  return (
    <>
      <div className="carousel-set">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./images/slider1.jpg"
                className="d-block w-100"
                alt="Shop intro"
              />
              <div className="carousel-caption d-none d-md-block">
                <div className="slider-text-holder">
                  <h2 className="title">Dive Outlet</h2>
                  <h5 className="slider-sub">
                    Take advantage of high discounts with our Dive Outlet!
                  </h5>
                  <Link to="/products">
                    <ShopButton>Discover products</ShopButton>
                  </Link>
                </div>
                {/*end of slider text */}
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="./images/slider2.jpg"
                className="d-block w-100"
                alt="Shop intro2"
              />
              <div className="carousel-caption d-none d-md-block">
                <div className="slider-text-holder">
                  <h2 className="title">The latest news</h2>
                  <h5 className="slider-sub">
                    Learn more about us and diving community
                  </h5>
                  <Link to="/about">
                    <ShopButton>About us</ShopButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/*carousel end */}
      <Title title="Featured categories" />
      <Categories />
      <Title title="Best deals" />
      <BestDeals />
    </>
  );
}
