import React, { useEffect } from "react";

const About = () => {
  // add title for this webpage
  useEffect(() => {
    document.title = "About Us - Travely";
  }, []);

  return (
    <div>
      <h1>about us</h1>
    </div>
  );
};

export default About;
