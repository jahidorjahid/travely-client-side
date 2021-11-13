import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  // add title for this webpage
  useEffect(() => {
    document.title = "Contact Us - Travely";
  }, []);

  const onSubmit = (data) => {
    data.subject = "Contact from Travely";
    data.to = "contact@travely.com";
    swal(JSON.stringify(data, null, "\t"));
    // do reset the form
    reset();
  };

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
            <div className="text-center">
              <h3>Contact with - Travely</h3>

              <p>Feel free to contact with us</p>
            </div>

            {/* begin form*/}
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                id="react-form"
                className="react-form react"
              >
                <input
                  className="react-input name-input white-input"
                  placeholder="Full Name*"
                  type="text"
                  {...register("name", { required: true })}
                />
                <input
                  className="react-input name-email white-input"
                  placeholder="Email*"
                  type="email"
                  {...register("from", { required: true })}
                />

                <textarea
                  className="react-input white-input"
                  rows="5"
                  cols="20"
                  placeholder="Message"
                  {...register("body", { required: true })}
                ></textarea>

                <input
                  value="Send Message"
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

export default Contact;
