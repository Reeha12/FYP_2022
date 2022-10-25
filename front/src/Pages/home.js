import React from "react";
import { lightBackground } from "../assets/utils/colors";
import review from "../assets/images/review.png";
import ModalComponent from "../Component/modalComponent";

const Home = ({ openModal }) => {
  return (
    <div onClick={() => openModal(true)}>
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
          <img
            src={review}
            className="rounded-5 me-2"
            style={{ width: "50px", height: "50px" }}
          />

          <span style={{ fontSize: 25, fontWeight: "normal" }}>
            Review Insights
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
