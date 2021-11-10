import React from "react";

const Room = () => {
  return (
    <div className="col-md-4">
      <div className="main-services">
        <img
          src="http://placehold.it/720x480"
          className="width-100"
          alt="pic"
        />

        <h3>
          <a href="/">Private GP Healthcare</a>
        </h3>

        <p>
          Curabitur quam etsum lacus netum netsum nulatis iaculis etsimun
          vitaemis etsum nisle varius netsum.
        </p>
        <div className="d-flex justify-content-center">
          <p>
            Rate: <span className="text-dark">345$</span>
          </p>
          <p>
            Type: <span className="text-dark">Delux</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Room;
