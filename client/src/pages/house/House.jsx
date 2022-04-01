import React from "react";
import { Router, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import Sidebar from "../../Components/Sidebar/Sidebar";

import "./House.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const House = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn, navigate]);
  return (
    <>
      <div className="house">
        <Sidebar />
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default House;
