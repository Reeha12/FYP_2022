import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import setting from "../assets/images/setting.png";
import help from "../assets/images/help.png";
import { defaultColor } from "../assets/utils/colors";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import About from "../Pages/about";
import StartPageItem from "./startPageItem";

const StartPage = () => {
  let arr = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <div
      className="container shadow p-3 mb-5 bg-white rounded "
      style={{ height: "500px", width: "400px" }}
    >
      {/* Header */}
      <div
        className="d-flex px-3 justify-content-between border-bottom"
        style={{ height: "50px" }}
      >
        <div className="d-flex ">
          <img
            src={logo}
            className="rounded-5 "
            style={{ width: "30px", height: "30px" }}
          />
          <h6
            className="d-flex ms-2 align-items-center"
            style={{ fontSize: 20, fontWeight: "bold", color: defaultColor }}
          >
            Extension
          </h6>
        </div>

        <div className="d-flex align-items-center ">
          <img
            src={setting}
            className="rounded-5 "
            style={{ width: "20px", height: "20px" }}
          />
          <img
            src={help}
            className="rounded-5"
            style={{ width: "24px", height: "24px" }}
          />
        </div>
      </div>
      {/* Home section */}
      <div>
        <div className="container-fluid my-3 d-flex">
          {arr.map((item) => (
            <StartPageItem path={item.path} name={item.name} />
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default StartPage;
