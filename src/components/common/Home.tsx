import React from "react";
import parking from "../../park.jpg";
import { H3 } from "@dnb/eufemia";

const Home = () => {
  return (
    <div className="relative">
      <img src={parking} alt="parking"></img>
      <div className="centered text-white">
        <H3> Welcome to the parking garage !!!</H3>
        <p>
          you can book a parking based on the required parking spot. Here we
          have different parking spots available, we have compact, large,
          motorcycle, handicapped parking spots.
        </p>
      </div>
    </div>
  );
};

export default Home;
