import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterStyle>
      <div className="footer-wrapper">
        <ul className="footer-menu">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/cart">View Basket</Link>
            </li>
            <li>
              <Link to="/products">View products</Link>
            </li>
          </ul>
        </ul>
        {/*end of ul footer menu 1*/}
        <ul className="footer-menu">
          <h3>Our products</h3>
          <ul className="footer-links">
            <li>
              <Link to="/masks">Diving Masks</Link>
            </li>
            <li>
              <Link to="/fins">Diving Fins</Link>
            </li>
            <li>
              <Link to="/suits">Diving Suits</Link>
            </li>
            <li>
              <Link to="/regulators">Regulators</Link>
            </li>
          </ul>
        </ul>
        {/*end of ul footer menu 2*/}
        <ul className="footer-menu">
          <h3>Store Information</h3>
          <ul className="footer-links">
            <li>SW 176th Street</li>
            <li>Palmetto Bay, Miami, US</li>
            <li>Call us now: +1 305-852-9694</li>
            <li>Email: info@diving-shop.net</li>
          </ul>
        </ul>
        {/*end of ul footer menu 3*/}
        <ul className="footer-menu">
          <h3>Follow us</h3>
          <ul className="footer-links">
            <div className="footer-sm">
              <img src="../images/facebook.png" alt="facebook" />
              <img src="../images/twitter.png" alt="twitter" />
              <img src="../images/instagram.png" alt="instagram" />
              <img src="../images/youtube.png" alt="youtube" />
            </div>
          </ul>
        </ul>
        {/*end of ul footer menu 4*/}
      </div>
      {/* end of footer-wrapper */}
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  margin-top: 81px;
  bottom: 0 !important;
  padding: 70px 40px;
  background: var(--grayColor);
  color: #333;
  .footer-wrapper {
    max-width: 1200px;
    width: 85vw;
    margin: 0 auto;
    background: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .footer-menu {
    padding: 0;
    margin-left: 70px;
  }
  .footer-menu h3 {
    text-align: left;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .footer-links {
    list-style: none;
    padding: 3px 0;
    text-align: left;
  }

  .footer-links li {
    padding: 5px 0;
  }
  .footer-links .footer-sm {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  }

  .footer-links .footer-sm img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    .footer-wrapper {
      grid-template-columns: 1fr;
    }
    .footer-menu {
      padding: 0;
      margin-left: 0px;
    }
    .footer-menu h3 {
      text-align: center;
    }
    .footer-links .footer-sm {
     margin-left: 42px;
    }
  }
`;
