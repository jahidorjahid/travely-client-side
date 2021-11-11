import axios from "axios";
import React, { useEffect, useState } from "react";

const MyBooking = () => {
  const [error, setError] = useState("");
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:5000/bookings", {
        email: "nafrhid@gmail.com",
      })
      .then((res) => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          setBookings(res.data);
        }

        console.log(res.data);
      });
  }, []);
  return (
    <div className="text-center">
      <h1>Manage my all booking</h1>
      {error ? (
        <h3 className="text-danger">{error}</h3>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li>{booking.customerEmail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBooking;
