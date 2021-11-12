import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Test = () => {
  const { user } = useAuth();
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    if (collapse) {
      setCollapse(false);
    } else {
      setCollapse(true);
    }
    console.log("clicked", collapse);
  };

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
              onClick={handleCollapse}
            >
              <span className="navbar-toggler-icon">
                <FontAwesomeIcon icon={faBars} />
              </span>
            </button>
            {/*end navbar-toggler */}

            {/*begin navbar-collapse */}
            <div
              className={
                collapse
                  ? "navbar-collapse collapse d-block"
                  : "navbar-collapse collapse"
              }
            >
              {/*begin navbar-nav */}
              <ul className="navbar-nav ml-auto">
                {user?.email && (
                  <>
                    <li>
                      <NavLink to="/my-bookings">My Booking</NavLink>
                    </li>
                    <li>
                      <NavLink to="/manage-bookings">Manage Booking</NavLink>
                    </li>
                    <li>
                      <NavLink to="/rooms/add">Add Room</NavLink>
                    </li>
                  </>
                )}
                <li>
                  <NavLink to="/rooms">Rooms</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us">Contact Us</NavLink>
                </li>

                <li>
                  <NavLink to="/about-us">About Us</NavLink>
                </li>

                <li className="discover-link">
                  <Link to="/rooms" className="external discover-btn">
                    Make Booking
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
