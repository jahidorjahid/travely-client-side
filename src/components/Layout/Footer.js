import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faPinterest,
  faFacebook,
  faInstagram,
  faDribbble,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      {/*begin container */}
      <div className="container footer-top">
        {/*begin row */}
        <div className="row">
          {/*begin col-md-4 */}
          <div className="col-md-4 text-center">
            <i className="pe-7s-map-2"></i>

            <h5>Get In Touch</h5>

            <p>Sylhet, Bangladesh</p>

            <p>
              <a href="mailto:contact@travely">contact@travely.com</a>
            </p>

            <p>+880 1611-23881</p>
          </div>
          {/*end col-md-4 */}

          {/*begin col-md-4 */}
          <div className="col-md-4 text-center">
            <i className="pe-7s-comment"></i>

            <h5>Social Media</h5>

            <p>See bellow where you can find us.</p>

            {/*begin footer_social */}
            <ul className="footer_social">
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>

              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </li>

              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>

              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>

              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faSkype} />
                </a>
              </li>

              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faDribbble} />
                </a>
              </li>
            </ul>
            {/*end footer_social */}
          </div>
          {/*end col-md-4 */}

          {/*begin col-md-4 */}
          <div className="col-md-4 text-center">
            <i className="pe-7s-link"></i>

            <h5>Useful Links</h5>

            <a href="/" className="footer-links">
              Our Cookies Policy
            </a>

            <a href="/" className="footer-links">
              Meet The Team Behind Travely
            </a>

            <a href="/" className="footer-links">
              Terms and Conditions
            </a>
          </div>
          {/*end col-md-4 */}
        </div>
        {/*end row */}
      </div>
      {/*end container */}

      {/*begin container */}
      <div className="container-fluid footer-bottom px-0">
        {/*begin row */}
        <div className="row no-gutters mx-0">
          {/*begin col-md-12 */}
          <div className="col-md-12 text-center">
            <p>
              Copyright © 2021 <span className="template-name">Travely</span>.
              Designed by{" "}
              <a href="/" target="_blank">
                Jahid Hasan
              </a>
            </p>
          </div>
          {/*end col-md-6 */}
        </div>
        {/*end row */}
      </div>
      {/*end container */}
    </footer>
  );
};

export default Footer;
