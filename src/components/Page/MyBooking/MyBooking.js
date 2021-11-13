import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Loading from "react-fullscreen-loading";

const MyBooking = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [myBookings, setMyBookings] = useState([]);
  const [myBookingRooms, setMyBookingRooms] = useState([]);
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
        }
      });
  }, [user]);

  // get my booking room data by ids
  useEffect(() => {
    // loader true if dependency update
    setLoader(true);
    axios
      .post("http://localhost:5000/rooms/ids", {
        ids: myBookings.map((booking) => booking.roomId),
      })
      .then((res) => {
        // set my booking room state
        setMyBookingRooms(res.data);
        console.log(res.data);
        // close loader
        setLoader(false);
      });
  }, [myBookings]);

  return (
    <div className="text-center">
      <Loading loading={loader} loaderColor="#3498db" />
      <h2>Manage my all booking</h2>
      {error ? (
        <h3 className="text-danger">{error}</h3>
      ) : (
        <ul>
          {myBookingRooms.map((booking) => (
            <li key={booking._id}>{booking.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBooking;
