import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Loading from "react-fullscreen-loading";

const ManageBooking = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [ManageBookings, setManageBookings] = useState([]);
  const [loader, setLoader] = useState(true);

  // add title for this webpage
  useEffect(() => {
    document.title = "Manage Bookings - Travely";
  }, []);

  useEffect(() => {
    axios("https://travely-server.herokuapp.com/bookings").then((res) => {
      if (res.data.error) {
        setError(res.data.error);
      } else {
        setManageBookings(res.data);
      }
      // close loader
      setLoader(false);
    });
  }, [user]);

  return (
    <div className="text-center">
      <Loading loading={loader} loaderColor="#3498db" />
      <h2>Manage all booking</h2>
      {error ? (
        <h3 className="text-danger">{error}</h3>
      ) : (
        <ul>
          {ManageBookings.map((booking) => (
            <li key={booking._id}>{booking.customerEmail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageBooking;
