import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Loading from "react-fullscreen-loading";
import Card from "./Card";

const MyBooking = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [updateState, setUpdateState] = useState(false);
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
      .post("https://travely-server.herokuapp.com/rooms/ids", {
        ids: myBookings.map((booking) => booking.roomId),
      })
      .then((res) => {
        // set my booking room state
        setMyBookingRooms(res.data);

        // close loader
        setLoader(false);
      });
  }, [myBookings]);

  // get current booking id
  const getBookingId = (index) => {
    return myBookings[index]._id;
  };

  const handleUpdateBookingState = () => {
    setUpdateState(true);
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
              myBookingRooms.map((room, index) => (
                <Card
                  key={getBookingId(index)}
                  bookingId={getBookingId(index)}
                  data={room}
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
