import React, { useEffect } from "react";

const About = () => {
  // add title for this webpage
  useEffect(() => {
    document.title = "About Us - Travely";
  }, []);

  return (
    <div style={{ backgroundColor: "#f5f6f6" }} className="py-5">
      <div className="container">
        <div className="bg-white py-5 shadow p-3">
          <h2>About us</h2>
          <p>
            There are 75,000+ reasons to join Travely—every one of our employees
            has their own. Some of us want to explore new places. Some are here
            to explore our own career potential. Some are curious about other
            cultures, while others want to make a difference where they are.
            There’s a whole world out there—and another one right here within
            Travely. Which means that whatever keeps you climbing, you’ll
            discover it with us.
          </p>
          <p>
            About Travely Customers Your audience is our audience. The average
            household income is $100,000+ Over 60 percent of Travely customers
            are college graduates More than 180 million travelers fly with
            Travely every year How You Can Reach Them Please contact our
            partners below for more information: Travely Sky Magazine / MSP
            Communications / +1 (612) 313-1788 Travely Sky Club® / Global Eagle
            Entertainment / +1 (646) 400-9060
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
