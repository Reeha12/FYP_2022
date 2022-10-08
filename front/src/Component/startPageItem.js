import React, { useState } from "react";
import { defaultColor } from "../assets/utils/colors";
import { NavLink } from "react-router-dom";
import "./startPage.css";

const classes = "font-weight-bold col-2 d-flex flex-column align-items-center";

const checkPath = (p) => {
  return window.location.pathname === p;
};

function StartPageItem({ path, name }) {
  return (
    <NavLink
      className={(isActive) =>
        checkPath(path) ? `text-link active-link mx-2` : `text-link mx-2`
      }
      to={path}
    >
      <div className="">
        <span className="d-block mb-1">{name}</span>
      </div>
    </NavLink>
  );
}

export default StartPageItem;
