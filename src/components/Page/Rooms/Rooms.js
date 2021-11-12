import axios from "axios";
import React, { useEffect, useState } from "react";
import Room from "./Room/Room";
import Loading from "react-fullscreen-loading";

const Rooms = () => {
  const API_URL = "http://localhost:5000/rooms";
  const [rooms, setRooms] = useState([]);
  const [loader, setLoader] = useState(true);

  // add title for this webpage
  useEffect(() => {
    document.title = "Rooms - Travely";
  }, []);

  // get rooms
  useEffect(() => {
    // GET request
    axios(API_URL).then((res) => {
      // set rooms data
      setRooms(res.data);
      // close loader
      setLoader(false);
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#f5f6f6" }} className="py-5">
      <Loading loading={loader} loaderColor="#3498db" />
      <div className="container">
        <div className="bg-white py-5 shadow p-3">
          <div className="row">
            {rooms.length ? (
              rooms.map((room) => <Room data={room}></Room>)
            ) : (
              <h1 className="text-center text-muted">No Rooms Found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
