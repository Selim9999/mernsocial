import { ClosedCaptionDisabledRounded } from "@mui/icons-material";
import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";

export const Home = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        <button className="buttonFeed">Feed</button>
      </div>
      <div>
        <button onClick={() => setShow(!show)} className="buttonPost">
          Post
        </button>
      </div>
      <div>
        {show ? (
          <div class="box">
            <h3 className="profileName2">Profile Name</h3>
            <h6 className="joined">Joined date</h6>
            <textarea className="textarea">
              It was a dark and stormy night...
            </textarea>
            <button className="buttonSubmit">Submit</button>
          </div>
        ) : null}
      </div>
      <div></div>
    </div>
  );
};

export default Home;
