import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Route, Routes } from "react-router-dom";
import AllQuestions from "../Pages/allQuestions";
import AllReviews from "../Pages/allReviews";
import Overview from "../Pages/overview";
import ReviewAnalysis from "../Pages/reviewAnalysis";
import ModalComponentItem from "./modalComponentItem";
import { defaultColor, closeBlue } from "../assets/utils/colors";

export default function ModalComponent({ openModal, closeModal, modalIsOpen }) {
  let arr2 = [
    { name: "Overview", path: "/" },
    { name: "All Reviews", path: "/all-review" },
    { name: "All Questions", path: "/all-questions" },
    { name: "Review Analysis", path: "/review-analysis" },
  ];

  const customStyles = {
    content: {
      // top: "50%",
      // left: "50%",
      // right: "auto",
      // bottom: "auto",
      // marginRight: "-50%",
      // transform: "translate(-50%, -50%)",
      // border: "0.1px solid gray",
      padding: "0px",
    },
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div
          className="d-flex align-items-center justify-content-between "
          style={{
            height: "50px",
            backgroundColor: defaultColor,
          }}
        >
          <h6
            style={{
              fontSize: 20,
              color: "white",
              margin: "10px",
            }}
          >
            Review Insights
          </h6>
          <button
            className="btn  rounded-circle d-flex justify-content-between"
            style={{
              fontSize: 10,
              margin: "10px",
              backgroundColor: closeBlue,
              color: "white",
            }}
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <div>
          <div className="container-fluid my-3 d-flex">
            {arr2.map((item) => (
              <ModalComponentItem path={item.path} name={item.name} />
            ))}
          </div>
        </div>
        <div style={{ padding: "10px" }}>
          <Routes>
            <Route path="/" element={<Overview />}></Route>
            <Route path="/all-review" element={<AllReviews />}></Route>
            <Route path="/all-questions" element={<AllQuestions />}></Route>
            <Route path="/review-analysis" element={<ReviewAnalysis />}></Route>
          </Routes>
        </div>
      </Modal>
    </div>
  );
}
