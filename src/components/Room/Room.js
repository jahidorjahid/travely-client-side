import React from "react";

const Room = (props) => {
  const { title, img_url, des, type, price } = props.data;

  return (
    <div className="col-md-4">
      <div className="main-services">
        <img src={img_url} className="width-100" alt="pic" />

        <h3>
          <a href="/">{title}</a>
        </h3>

        <p>{des.slice(0, 100)}</p>
        <div className="d-flex justify-content-center">
          <p>
            Rate: <span className="text-dark">{price}$</span>
          </p>
          <p>
            Type: <span className="text-dark">{type}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Room;
