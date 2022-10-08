import React from "react";
import { lightBackground } from "../assets/utils/colors";

const About = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "350px",
          backgroundColor: lightBackground,
        }}
        className="rounded d-flex align-items-center justify-content-center"
      >
        <div
          className="btn d-flex justify-content-center align-items-center "
          style={{ width: "100%", height: "100%" }}
        >
          <span style={{ fontSize: 25, fontWeight: "normal" }}>
            {" "}
            Coming Soon ...
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
