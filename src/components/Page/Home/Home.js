import axios from "axios";
import React, { useState, useEffect } from "react";
import Room from "../../Room/Room";

const Home = () => {
  const API_URL = "http://localhost:5000/rooms";
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // GET request
    axios(API_URL).then((res) => setRooms(res.data));
  }, []);

  console.log(rooms);
  return (
    <div>
      <section className="home-section" id="home">
        <div className="home-section-overlay"></div>
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-5*/}
            <div className="col-md-6">
              <h1 className="padding-top-150">Welcome To Our Clinic</h1>

              <p className="hero-text">
                Curabitur quam etsum lacus netum netsum nulatsum etsimunas
                vitaemis etsum varius netsum. Tendis tempor ante acu ipsum
                finibus atimus etims.
              </p>

              {/* begin home-benefits */}
              <ul className="home-benefits">
                <li>
                  <i className="fas fa-check-circle"></i>Tendis tempor ante acu
                  ipsum finibus.
                </li>

                <li>
                  <i className="fas fa-check-circle"></i>Atimus etims urnatis
                  quisle ratione netis.
                </li>

                <li>
                  <i className="fas fa-check-circle"></i>Ratione lorem nets et
                  sequi tempor.
                </li>
              </ul>
              {/* end home-benefits */}
            </div>
            {/* end col-md-5*/}

            {/* begin col-md-2*/}
            <div className="col-md-1"></div>
            {/* end col-md-2*/}

            {/* begin col-md-5*/}
            <div className="col-md-5 margin-top-20">
              {/* begin register-form-wrapper*/}
              <div
                className="register-form-wrapper wow bounceIn"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "bounceIn",
                }}
              >
                <h3>Make An Appointment</h3>

                <p>Velis demo enim quia tempor magnet.</p>

                {/* begin form*/}
                <div>
                  {/* begin success message */}

                  {/* end success message */}

                  {/* begin register form */}
                  <form id="register-form" className="register-form register">
                    <input
                      className="register-input name-input white-input"
                      required=""
                      name="register_names"
                      placeholder="Company Name*"
                      type="text"
                    />

                    <input
                      className="register-input name-email white-input"
                      required=""
                      name="register_email"
                      placeholder="Email Adress*"
                      type="email"
                    />

                    <textarea
                      className="register-input white-input"
                      rows="2"
                      cols="20"
                      name="register_message"
                      placeholder="Your Message..."
                    ></textarea>

                    <input
                      value="Make An Appointment Today"
                      className="register-submit"
                      type="submit"
                    />
                  </form>
                  {/* end register form */}
                </div>
                {/* end form*/}
              </div>
              {/* end register-form-wrapper*/}
            </div>
            {/* end col-md-5*/}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>

      <section className="top-cta-blue small-paddings">
        {/*begin container */}
        <div className="container">
          {/*begin row */}
          <div className="row">
            {/*begin col-md-3 */}
            <div className="col-md-3">
              <span>
                <i className="far fa-clock"></i>
              </span>

              <h5 className="white-text">Opening Hours</h5>

              <p className="white-text">Mon–Fri: 09:00 – 15:00</p>
            </div>
            {/*end col-md-3 */}

            {/*begin col-md-3 */}
            <div className="col-md-3">
              <span>
                <i className="fas fa-phone"></i>
              </span>

              <h5 className="white-text">Phone Number</h5>

              <p className="white-text">+44 021 567 890</p>
            </div>
            {/*end col-md-3 */}

            {/*begin col-md-3 */}
            <div className="col-md-3">
              <span>
                <i className="far fa-envelope-open"></i>
              </span>

              <h5 className="white-text">Email Address</h5>

              <p className="white-text">medical@contact.com</p>
            </div>
            {/*end col-md-3 */}

            {/*begin col-md-3 */}
            <div className="col-md-3">
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>

              <h5 className="white-text">Our Location</h5>

              <p className="white-text">123, Main Street, London</p>
            </div>
            {/*end col-md-3 */}
          </div>
          {/*end row */}
        </div>
        {/*end container */}
      </section>

      <section className="section-grey" id="services">
        {/*begin container */}
        <div className="container">
          {/*begin row */}
          <div className="row">
            {/*begin col-md-12 */}
            <div className="col-md-12 text-center">
              <h2 className="section-title">Discover Our Services</h2>

              <p className="section-subtitle">
                Quis autem velis ets reprehender net etid quiste voluptate.
              </p>
            </div>
            {/*end col-md-12 */}
          </div>
          {/*end row */}
        </div>
        {/*end container */}

        {/*begin services-wrapper */}
        <div className="services-wrapper">
          {/*begin container */}
          <div className="container">
            {/*begin row */}
            <div className="row">
              {/*begin col-md-4 */}
              {rooms.slice(0, 3).map((room) => (
                <Room data={room}></Room>
              ))}
              {/*end col-md-4 */}
            </div>
            {/*end row */}
          </div>
          {/*end container */}
        </div>
        {/*end services-wrapper */}
      </section>

      <section className="section-bg-2">
        <div className="section-bg-overlay"></div>

        {/*begin container*/}
        <div className="container">
          {/*begin row */}
          <div className="row">
            {/*begin col-md-12*/}
            <div className="col-md-12 text-center padding-bottom-10">
              <h3 className="section-title white-text">
                Ready to register with our clinic?
              </h3>

              <p className="section-subtitle white margin-bottom-30">
                Quis autem velis ets reprehender net etid quiste voluptate.
              </p>

              <a href="/" className="btn-white scrool">
                Get Started
              </a>

              <a href="/" className="btn-white-border scrool">
                More Details
              </a>
            </div>
            {/*end col-md-12 */}
          </div>
          {/*end row */}
        </div>
        {/*end container*/}
      </section>
    </div>
  );
};

export default Home;
