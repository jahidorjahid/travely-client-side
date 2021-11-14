import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const Card = ({ bookingId, roomId, customer, updateState }) => {
  const [myBookingRoom, setMyBookingRoom] = useState({});

  // call only manage all booking components
  if (customer) {
    const { name, email } = customer;
  }
  // handle delete self booking data
  const handleDelete = (bId) => {
    swal({
      title: "Are you sure?",
      text: "If you click to delete you can't undo!",
      icon: "warning",
      buttons: ["Cencel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .post("https://travely-server.herokuapp.com/bookings/delete", {
            id: bId,
          })
          .then((res) => {
            if (res.data.deletedCount === 1) {
              swal("Aww! Your Booking has been deleted!", {
                icon: "success",
              }).then((res) => {
                if (res) {
                  updateState(true, { deleteId: bId });
                }
              });
            } else {
              swal("Opps! Can't delete please refresh!", {
                icon: "warning",
              });
            }
          });
      } else {
        swal("Your Booking is safe!");
      }
    });
  };

  // get my booking room data by ids
  useEffect(() => {
    // // loader true if dependency update
    // // close loader
    updateState(true);
    axios
      .post("https://travely-server.herokuapp.com/rooms/id", {
        roomId: roomId,
      })
      .then((res) => {
        // set my booking room state
        setMyBookingRoom(res.data);

        // // close loader
        updateState(false);
      });
  }, []);

  return (
    <div className="col-lg-6">
      <div className="card mb-3">
        <div className="row gy-3">
          <div className="col-md-4">
            <img
              src={myBookingRoom.img1}
              className="rounded-start"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body border-top-0">
              <Link to={`/rooms/${myBookingRoom._id}`}>
                <h5 className="card-title">{myBookingRoom.title}</h5>
              </Link>
              {customer ? (
                <>
                  <p className="card-text">
                    <small className="text-muted">
                      Host: {myBookingRoom.hostName}
                    </small>
                    {" | "}
                    <span>Client: {customer.name}</span>
                  </p>
                  <p>Client Email: {customer.email}</p>
                </>
              ) : (
                <p className="card-text">
                  <small className="text-muted">
                    Price: {myBookingRoom.price}
                  </small>
                  {" | "}
                  <span>Hosted by {myBookingRoom.hostName}</span>
                </p>
              )}
              <button
                onClick={() => {
                  handleDelete(bookingId);
                }}
                class="btn btn-danger"
              >
                Delete Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
