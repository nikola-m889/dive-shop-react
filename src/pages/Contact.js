import React from "react";
import Title from "../components/Title";
import { ShopButton } from "../components/ShopButton";

export default function Contact() {
  return (
    <div className="contact-container">
      <Title title="Contact us" />
      <div className="contact-center">
        <div className="form-container">
          {/* Form start */}
          <form action="https://formspree.io/f/xeqvlyqd" method="POST">
            <p>Send us a note and we'll get to you as quickly as possible.</p>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="_replyto" required />
            <label htmlFor="message">What's on your mind?</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              required
            ></textarea>
            <ShopButton type="submit">Submit</ShopButton>
          </form>
          {/* Form end */}
        </div>

        {/* map start */}
        <iframe
          title="diving shop map"
          src="https://maps.google.com/maps?q=Miami%20Palmetto%20bay%20SW176st&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="430"
          height="355"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
        {/* map end */}
      </div>
    </div>
  );
}
