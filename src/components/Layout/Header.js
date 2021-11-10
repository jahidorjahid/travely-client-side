import React from "react";
import { NavLink, Link } from "react-router-dom";

const Test = () => {
  return (
    <header className="header">
      {/*begin navbar-fixed-top */}
      <nav className="navbar navbar-default navbar-fixed-top">
        {/*begin container */}
        <div className="container">
          {/*begin navbar */}
          <nav className="navbar navbar-expand-lg">
            {/*begin logo */}
            <Link className="navbar-brand" to="/">
              Travely
            </Link>
            {/*end logo */}

            {/*begin navbar-toggler */}
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars"></i>
              </span>
            </button>
            {/*end navbar-toggler */}

            {/*begin navbar-collapse */}
            <div className="navbar-collapse collapse" id="navbarCollapse">
              {/*begin navbar-nav */}
              <ul className="navbar-nav ml-auto">
                <li>
                  <NavLink to="/single">Single page</NavLink>
                </li>

                <li>
                  <NavLink to="#services">What We Do</NavLink>
                </li>

                <li>
                  <NavLink to="#testimonials">Testimonials</NavLink>
                </li>

                <li>
                  <NavLink to="#features">About Us</NavLink>
                </li>

                <li className="discover-link">
                  <Link to="/" className="external discover-btn">
                    Make Appointment
                  </Link>
                </li>
              </ul>
              {/*end navbar-nav */}
            </div>
            {/*end navbar-collapse */}
          </nav>
          {/*end navbar */}
        </div>
        {/*end container */}
      </nav>
      {/*end navbar-fixed-top */}
    </header>
  );
};

export default Test;
