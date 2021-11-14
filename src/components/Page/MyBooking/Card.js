import axios from "axios";
import React from "react";
import swal from "sweetalert";
const Card = ({ bookingId, data, updateState }) => {
  const { img1, title, price, hostName } = data;

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
          .post("http://localhost:5000/bookings/delete", { id: bId })
          .then((res) => {
            if (res.data.deletedCount === 1) {
              swal("Aww! Your Booking has been deleted!", {
                icon: "success",
              }).then((res) => {
                if (res) {
                  updateState();
                }
              });
            } else {
              swal("Opps! Can't delete please refresh!", {
                icon: "warning",
              });
            }

            console.log(res);
          });
      } else {
        swal("Your Booking is safe!");
      }
    });
  };

  return (
    <div className="col-lg-6">
      <div className="card mb-3">
        <div className="row gy-3">
          <div className="col-md-4">
            <img
              src={img1}
              className="rounded-start"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body border-top-0">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                <small className="text-muted">Price: {price}</small>
                {" | "}
                <span>Hosted by {hostName}</span>
              </p>
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
