import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Loading from "react-fullscreen-loading";
import Card from "../MyBooking/Card";

const ManageBooking = () => {
  const [error, setError] = useState("");
  const [updateState, setUpdateState] = useState({});
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
  }, [updateState]);

  // handle state changer for call api after every delete and react laoder
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
          <h4 className="text-center">Manage All Bookings</h4>
          <hr />
          <hr />
          <div className="row">
            {error ? (
              <h1 className="text-center text-muted">{error}</h1>
            ) : (
              ManageBookings.map((booking) => (
                <Card
                  key={booking._id}
                  bookingId={booking._id}
                  roomId={booking.roomId}
                  customer={{
                    name: booking.customerName,
                    email: booking.customerEmail,
                  }}
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

export default ManageBooking;
