import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Loading from "react-fullscreen-loading";

const MyBooking = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [myBookings, setMyBookings] = useState([]);
  const [loader, setLoader] = useState(true);

  // add title for this webpage
  useEffect(() => {
    document.title = "My Booking - Travely";
  }, []);

  useEffect(() => {
    axios
      .post("https://travely-server.herokuapp.com/bookings", {
        email: user.email,
      })
      .then((res) => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          setMyBookings(res.data);
          // close loader
          setLoader(false);
        }
      });
  }, [user]);

  return (
    <div className="text-center">
      <Loading loading={loader} loaderColor="#3498db" />
      <h2>Manage my all booking</h2>
      {error ? (
        <h3 className="text-danger">{error}</h3>
      ) : (
        <ul>
          {myBookings.map((booking) => (
            <li key={booking._id}>{booking.customerEmail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBooking;
