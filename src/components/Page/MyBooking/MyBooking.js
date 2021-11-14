import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Loading from "react-fullscreen-loading";
import Card from "./Card";

const MyBooking = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [updateState, setUpdateState] = useState({});
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
        }
        // close loader
        setLoader(false);
      });
  }, [updateState]);

  const handleUpdateBookingState = (loading, isDeleteBooking = false) => {
    setLoader(loading);
    if (isDeleteBooking) {
      setUpdateState(isDeleteBooking);
    }
  };

  return (
    <div style={{ backgroundColor: "#f5f6f6" }} className="py-5">
      <Loading loading={loader} loaderColor="#3498db" />
      <div className="container">
        <div className="bg-white py-5 shadow p-3 rounded">
          <h4 className="text-center">Manage My Bookings</h4>
          <hr />
          <hr />
          <div className="row">
            {error ? (
              <h1 className="text-center text-muted">{error}</h1>
            ) : (
              myBookings.map((booking) => (
                <Card
                  key={booking._id}
                  bookingId={booking._id}
                  roomId={booking.roomId}
                  updateState={handleUpdateBookingState}
                ></Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
