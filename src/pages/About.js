import React from "react";
import Title from "../components/Title";

export default function About() {
  return (
    <div className="about-container">
      <Title title="About us" />
      <div className="about-img">
        <img src="../images/equipment2.png" alt="our-shop" />
      </div>
      <p>
        Come and visit us at Miami's largest scuba diving shop where we stock
        the latest and greatest scuba diving, snorkelling and freediving
        equipment from all the major brands including Scubapro, Mares, Apeks,
        XDeep and many more. We have expert staff on hand to help you find the
        right product, whether that is a new snorkel or being fitted for a made
        to measure drysuit.
      </p>
      <p>
        Our diving store has designated parking right outside if you plan on
        driving but inline with sustainability programme we would prefer if our
        customers prefer use of public transport to get to us - we are only 5
        mins from Miami Bay Station and 10 mins from the shore.
      </p>
      <p>
        When you are ready to purchase equipment from Diving Shop, you will find
        that we will take the time that is needed to do it the right way. The
        Diving Shop carries the equipment we trust and believe in. Any scuba
        manufacturer would love to have their products in our shop.
      </p>

      <div className="about-center"></div>
    </div>
  );
}
