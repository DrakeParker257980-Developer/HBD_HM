import React, { Component } from "react";
import "./App.css";
import Harshul_Image from "./components/Harshul_Image.jpg";
import Facebook from "./components/facebook.png";
// import Snapchat from "./components/snapchat.png";
import Instagram from "./components/instagram.png";

function App() {
  return (
    <>
      <body>
        <section>
          <div className="container">
            <header>
              <a href="#" className="logo">
                For My Best Friend Harshul Matia
              </a>
            </header>
            <div className="content">
              <h2>Happy Birthday Harshul</h2>
              <p id="demo"></p>
            </div>
            <div className="imgBx">
              <img src={Harshul_Image} />
            </div>

            <ul class="sci">
              <li>
                <a
                  href="https://www.facebook.com/harshul.matia"
                  target="_blank"
                >
                  <img src={Facebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/lucifer_charmence/"
                  target="_blank"
                >
                  <img src={Instagram} />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p className="copyrightText">Made By 🤗 VIPUL</p>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default App;
