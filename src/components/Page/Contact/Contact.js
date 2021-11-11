import React, { useEffect } from "react";

const Contact = () => {
  // add title for this webpage
  useEffect(() => {
    document.title = "Contact Us - Travely";
  }, []);
  return (
    <div>
      <h1>Contact us page</h1>
    </div>
  );
};

export default Contact;
