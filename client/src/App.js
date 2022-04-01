import "./App.css";
import House from "./pages/house/House";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  navigate,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Home } from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Header } from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<House />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
