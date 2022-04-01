import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { modalUnstyledClasses } from "@mui/material";

export const Header = () => {
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  const data = localStorage.getItem("data");

  return (
    <div>
      <h3 className="home">{data}</h3>
      <img src={loggedIn.profilePicture} className="avatar" />
      <h3 className="profileName1">
        {loggedIn.firstName} {loggedIn.lastName}
      </h3>
    </div>
  );
};

module.export = Header;
