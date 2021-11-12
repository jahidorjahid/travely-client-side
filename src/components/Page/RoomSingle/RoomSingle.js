import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./RoomSingle.css";
import Loading from "react-fullscreen-loading";
import useAuth from "../../../hooks/useAuth";

const RoomSingle = () => {
  const { roomId } = useParams();
  const { user } = useAuth();
  const [room, setRoom] = useState({});
  const [loader, setLoader] = useState(true);
  const [bookBtnText, setbookBtnText] = useState("Confirm Book");
  const API_GET_SINGLE = `http://localhost:5000/rooms/${roomId}`;
  const API_POST_BOOKING = `http://localhost:5000/bookings`;

  // handle confirm booking
  const handleConfirmBook = () => {
    setbookBtnText("Loading");
    axios
      .post(API_POST_BOOKING, {
        roomId: room._id,
        customerName: user.displayName,
        customerEmail: user.email,
      })
      .then((res) => {
        if (res.data.insertedId) {
          setbookBtnText("Booked");
        }
        console.log(res.data);
      });
  };

  // add title for this webpage
  useEffect(() => {
    // update webpage title
    document.title = room?.title || "Loading...";
    // check already booked or not
  }, [room]);

  // load room by id
  useEffect(() => {
    axios(API_GET_SINGLE).then((res) => {
      // set room info
      setRoom(res.data);
      // close loader
      setLoader(false);
    });
  }, []);

  return (
    <div className="container my-3">
      <Loading loading={loader} loaderColor="#3498db" />
      <h1>{room.title}</h1>
      <div className="d-flex room-by mb-3">
        <p className="d-inline-block">
          Type:
          <span> {room.type} </span>
          Hosted by:<span> {room.hostName}</span>
        </p>
        <img className="rounded" src={room.hostImg} alt="" />
      </div>
      <div className="gellary">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <img
              src={room.img1}
              alt={room.title}
              className="rounded"
              width="100%"
            />
          </div>
          <div className="row gallery-4 col-md-12 col-lg-6 align-content-lg-between">
            <div className="col-md-3 col-lg-6 d-none d-md-block">
              <img
                src={room.img2}
                alt={room.title}
                className="rounded"
                width="100%"
              />
            </div>
            <div className="col-md-3 col-lg-6 d-none d-md-block">
              <img
                src={room.img3}
                alt={room.title}
                className="rounded"
                width="100%"
              />
            </div>
            <div className="col-md-3 col-lg-6 d-none d-md-block">
              <img
                src={room.img4}
                alt={room.title}
                className="rounded"
                width="100%"
              />
            </div>
            <div className="col-md-3 col-lg-6 d-none d-md-block">
              <img
                src={room.img1}
                alt={room.title}
                className="rounded"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content my-3">
        <div className="row gy-5">
          <div className="col-md-7 col-lg-8"> {room.des}</div>
          <div className="col-md-5 col-lg-4 position-absyholute">
            <div className="booking-card make-me-sticky">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">
                  <span style={{ fontSize: "24px", color: "black" }}>
                    {room.price}
                  </span>
                  $/night
                </p>
                <button onClick={handleConfirmBook} className="btn btn-dark">
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  {bookBtnText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSingle;
