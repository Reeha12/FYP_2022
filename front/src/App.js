import ModalComponent from "./Component/modalComponent";
import StartPage from "./Component/startPage";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    navigate("/");
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <StartPage openModal={openModal} />
      <ModalComponent
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
}

export default App;
