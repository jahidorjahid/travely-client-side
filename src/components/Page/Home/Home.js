import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Room from "../Rooms/Room/Room";

const Home = () => {
  const API_URL = "https://travely-server.herokuapp.com/rooms";
  const [rooms, setRooms] = useState([]);

  // add title for this webpage
  useEffect(() => {
    document.title = "Home - Travely";
  }, []);

  // get rooms
  useEffect(() => {
    // GET request
    axios(API_URL).then((res) => setRooms(res.data));
  }, []);

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
              <h1 className="padding-top-150">Welcome To Our Travelian</h1>

              <p className="hero-text">
                Traveling Improves Your Health. From cutting down on stress, to
                lowering your chances of developing a heart disease, the health
                benefits of traveling are huge.
              </p>

              {/* begin home-benefits */}
              <ul className="home-benefits">
                <li>
                  <FontAwesomeIcon icon={faCircle} /> Where the journey begins!
                </li>

                <li>
                  <FontAwesomeIcon icon={faCircle} /> To the world of an
                  incredible vacation
                </li>

                <li>
                  <FontAwesomeIcon icon={faCircle} /> Traveling opens door to
                  creating memories
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
              {/* begin react-form-wrapper*/}
              <div
                className="react-form-wrapper wow bounceIn"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "bounceIn",
                }}
              >
                <h3>Contact Travely</h3>

                <p>Let us book your tour ????.</p>

                {/* begin form*/}
                <div>
                  {/* begin success message */}

                  {/* end success message */}

                  {/* begin react form */}
                  <form id="react-form" className="react-form react">
                    <input
                      className="react-input name-input white-input"
                      required=""
                      name="react_names"
                      placeholder="Your Name*"
                      type="text"
                    />

                    <input
                      className="react-input name-email white-input"
                      required=""
                      name="react_email"
                      placeholder="Email Adress*"
                      type="email"
                    />

                    <textarea
                      className="react-input white-input"
                      rows="2"
                      cols="20"
                      name="react_message"
                      placeholder="Your Message..."
                    ></textarea>

                    <input
                      value="Make A Book"
                      className="react-submit"
                      type="submit"
                    />
                  </form>
                  {/* end react form */}
                </div>
                {/* end form*/}
              </div>
              {/* end react-form-wrapper*/}
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

              <p className="white-text">Mon???Fri: 09:00 ??? 15:00</p>
            </div>
            {/*end col-md-3 */}

            {/*begin col-md-3 */}
            <div className="col-md-3">
              <span>
                <i className="fas fa-phone"></i>
              </span>

              <h5 className="white-text">Phone Number</h5>

              <p className="white-text">+88 01611-23881</p>
            </div>
            {/*end col-md-3 */}

            {/*begin col-md-3 */}
            <div className="col-md-3">
              <span>
                <i className="far fa-envelope-open"></i>
              </span>

              <h5 className="white-text">Email Address</h5>

              <p className="white-text">contact@travely.com</p>
            </div>
            {/*end col-md-3 */}

            {/*begin col-md-3 */}
            <div className="col-md-3">
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>

              <h5 className="white-text">Our Location</h5>

              <p className="white-text">Sylhet, Bangladesh</p>
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
                Let us transport you with our highly affordable and reliable
                holiday packages
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
                Ready to go with our place?
              </h3>

              <p className="section-subtitle white margin-bottom-30">
                You don???t choose where you go, the journey chooses you
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
