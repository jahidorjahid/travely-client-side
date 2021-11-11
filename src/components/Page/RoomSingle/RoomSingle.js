import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./RoomSingle.css";

const RoomSingle = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState({});
  const [bookBtnText, setbookBtnText] = useState("Confirm Book");
  const API_GET_SINGLE = `http://localhost:5000/rooms/${roomId}`;
  const API_POST_SINGLE = `http://localhost:5000/rooms`;

  // handle confirm booking
  const handleConfirmBook = () => {
    setbookBtnText("Loading");
    axios
      .post(API_POST_SINGLE, {
        roomId: room._id,
        customerName: "jahid hasan",
        customerEmail: "nahid@gmail.com",
      })
      .then((res) => {
        if (res.data.insertedId) {
          setbookBtnText("Booked");
        }
        console.log(res.data);
      });
  };

  // load room by id
  useEffect(() => {
    axios(API_GET_SINGLE).then((res) => setRoom(res.data));
  }, []);
  return (
    <div className="container my-3">
      <h1>{room.title}</h1>
      <div className="d-flex room-by mb-3">
        <p className="d-inline-block">
          Type:
          <span> {room.type} </span>
          Hosted by:<span> Jahid Hasan</span>
        </p>
        <img
          className="rounded"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
        />
      </div>
      <div className="gellary">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <img
              src={room.img_url}
              alt={room.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="row col-md-12 col-lg-6 align-content-lg-between">
            <div className="col-md-3 col-lg-6 d-none d-md-block">
              <img
                src={room.img_url}
                alt={room.title}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-3 col-lg-6 d-none d-md-block">
              <img
                src={room.img_url}
                alt={room.title}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-3 col-lg-6 d-none d-md-block">
              <img
                src={room.img_url}
                alt={room.title}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-3 col-lg-6 d-none d-md-block">
              <img
                src={room.img_url}
                alt={room.title}
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content my-3">
        <div className="row">
          <div className="col-md-8">
            {" "}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
            {room.des}
          </div>
          <div className="col-md-4 position-absyholute">
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
