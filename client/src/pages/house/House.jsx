import React from "react";
import { useState, useEffect } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

import "./House.css";

export const House = () => {
  const navigate = useNavigate();

  var isLoggedIn = false;

  function setLoggedIn(bool) {
    isLoggedIn = bool;
  }

  if (localStorage.getItem("loggedIn")) setLoggedIn(true);
  else setLoggedIn(false);

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  });

  return (
    <>
      <div className="house">
        {isLoggedIn ? (
          <>
            <Sidebar />
            <div>
              <Header />
              <Outlet />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default House;
