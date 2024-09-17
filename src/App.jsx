import { useState, useRef } from "react";
import "./App.css";
import TitlePieceCropped from "./assets/title-piece-cropped.jpg";
import Logo from "./assets/logo.jpg";
import Boiler from "./assets/boiler.png";
import GasSafe from "./assets/gas-safe.png";
import emailjs from "@emailjs/browser";

function App() {
  const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm("service_nsmmk8d", "template_bb1af6q", form.current, {
          publicKey: "_LdYqIJsn_H12OJlA",
        })
        .then(
          () => {
            window.alert("SUCCESS!");
          },
          (error) => {
            window.alert("FAILED...", error.text);
          }
        );
    };
  };
  return (
    <div>
      <div className="navbar">
        <div className="title-piece">
          <img src={TitlePieceCropped} alt="title-piece-cropped" />
        </div>
      </div>
      <div className="container">
        <div>
          <h2> About Me </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="my-services">
          <h2>My services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure <b />
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>

      <div>
        <div className="footer">
          <img src={Boiler} alt="boiler" />
          {/* <div className="contact-form">
            <h1 className="heading">get in touch</h1>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div> */}
          <img className="gas-safe" src={GasSafe} alt="gas safe" />
        </div>
      </div>
    </div>
  );
}

export default App;
