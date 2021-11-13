import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const AddRoom = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.hostName = user.displayName;
    data.hostEmail = user.email;
    data.hostImg = user.photoURL;
    console.log(data);

    axios
      .post("https://travely-server.herokuapp.com/rooms", data)
      .then((res) => {
        if (res.data.insertedId) {
          // room added success
          swal("Success!", "Room added successfull!", "success");
          // reset form
          reset();
        } else {
          swal("Failed!", "Room added failed!", "danger");
        }
      });
  };

  // add title for this webpage
  useEffect(() => {
    document.title = "Add Room - Travely";
  }, []);

  return (
    <div>
      <div className="container">
        <div className="my-5">
          <div
            className="react-form-wrapper bounceIn shadow"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "bounceIn",
              maxWidth: "80%",
              margin: "0 auto",
            }}
          >
            <h3>Please add an Room</h3>

            <p>
              Add a Room specialise in house extensions and loft and garage
              conversions, and could help you to transform your home.
            </p>

            {/* begin form*/}
            <div>
              {/* begin success message */}

              {/* end success message */}

              {/* begin add room form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                id="react-form"
                className="react-form react"
              >
                <input
                  className="react-input white-input"
                  placeholder="Title*"
                  type="text"
                  {...register("title", { required: true })}
                />

                <select
                  className="react-input white-input"
                  {...register("type", { required: true })}
                >
                  <option disabled selected hidden>
                    Select Type
                  </option>
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="Delux">Delux</option>
                  <option value="Couple">Couple</option>
                </select>

                <input
                  className="react-input white-input"
                  placeholder="price"
                  type="number"
                  {...register("price", { required: true })}
                />

                <textarea
                  className="react-input white-input"
                  rows="5"
                  cols="20"
                  placeholder="Description"
                  {...register("des", { required: true })}
                ></textarea>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      className="react-input white-input"
                      placeholder="Cover Image*"
                      {...register("img1", { required: true })}
                      type="text"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="react-input white-input"
                      placeholder="image 2"
                      type="text"
                      {...register("img2")}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="react-input white-input"
                      placeholder="image 3"
                      type="text"
                      {...register("img3")}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="react-input white-input"
                      placeholder="image 4"
                      type="text"
                      {...register("img4")}
                    />
                  </div>
                </div>
                <input
                  value="Confirm add a Room"
                  className="react-submit mx-auto"
                  type="submit"
                />
              </form>
              {/* end add room form */}
            </div>
            {/* end form*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
