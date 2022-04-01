import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Sidebar = () => {
  const navigate = useNavigate();
  const name1 = "Home";
  const name2 = "Profile";

  const logout = () => {
    localStorage.removeItem("loggedIn");
    console.log("logout");
    navigate("/login");
  };

  const handleClick1 = () => {
    localStorage.setItem("data", name1);
  };

  const handleClick2 = () => {
    localStorage.setItem("data", name2);
  };

  return (
    <div className="sidebar">
      <h3 className="tornado">Tornado</h3>
      <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
        <div onClick={handleClick1} className="homeIcon">
          <div id="icon1">
            <HomeIcon />
          </div>{" "}
          <div id="home">
            <h2>Home</h2>
          </div>
        </div>
      </Link>
      <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
        <div onClick={handleClick2} className="profileIcon">
          <div id="icon2">
            <PersonIcon />
          </div>{" "}
          <div id="profile">
            <h2>Profile</h2>
          </div>
        </div>
      </Link>
      <div className="messagesIcon">
        <div id="icon3">
          <ForumIcon />
        </div>{" "}
        <div id="messages">
          <h2>Messages</h2>
        </div>
      </div>
      <div className="notificationsIcon">
        <div id="icon4">
          <NotificationsIcon />
        </div>{" "}
        <div id="notifications">
          <h2>Notifications</h2>
        </div>
      </div>
      <div onClick={logout} className="logoutIcon">
        <div id="icon5">
          <LogoutIcon />
        </div>
        <div id="logout">
          <h2>Logout</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
