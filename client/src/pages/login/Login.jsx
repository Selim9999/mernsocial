import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const url = "http://localhost:5000/api/auth/login";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  let isLoggedIn = false;

  function login(e) {
    e.preventDefault();
    axios
      .post(url, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.status == 200) {
          let user = res.data;
          localStorage.setItem("loggedIn", JSON.stringify(user));
          console.log("logged In");
          isLoggedIn = true;
          console.log(isLoggedIn);
          navigate("/");
        }
      });
  }

  const loggedIn = localStorage.getItem("loggedIn");

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="d-flex flex-column align-items-center col-md-6 mt-3">
        <Container>
          <h3
            className="h3 mt-5"
            style={{ color: "#d6d8ff", fontSize: 50, marginLeft: 900 }}
          >
            Draxocial
          </h3>
          <h2
            className="h2"
            style={{
              color: "#ed0952",
              fontSize: 50,
              paddingTop: 50,
              marginLeft: 940,
            }}
          >
            Login
          </h2>
          <Form>
            <Row>
              <Form.Group>
                <Form.Label
                  style={{
                    color: "#d6d8ff",
                    fontSize: "30px",
                    marginLeft: "850px",
                    paddingTop: "50px",
                  }}
                >
                  Email:{" "}
                </Form.Label>
                <Form.Control
                  onChange={(e) => handle(e)}
                  id="email"
                  value={data.email}
                  className="w-25"
                  style={{ marginLeft: "850px", padding: 20 }}
                  type="email"
                  placeholder="Email"
                ></Form.Control>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group>
                <Form.Label
                  style={{
                    color: "#d6d8ff",
                    fontSize: "30px",
                    marginLeft: "850px",
                    paddingTop: "50px",
                  }}
                >
                  Password:{" "}
                </Form.Label>
                <Form.Control
                  onChange={(e) => handle(e)}
                  id="password"
                  value={data.password}
                  className="w-25 p-3"
                  style={{ marginLeft: 850 }}
                  type="email"
                  placeholder="Password"
                ></Form.Control>
              </Form.Group>
            </Row>
          </Form>
          <Button
            onClick={(e) => login(e)}
            className="mt-5"
            style={{
              backgroundColor: "#3485f7",
              fontSize: 20,
              marginLeft: 930,
            }}
          >
            Sign In
          </Button>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button
              className="mt-5"
              style={{
                backgroundColor: "#7373f5",
                fontSize: 20,
                marginLeft: 905,
              }}
            >
              Register new accont
            </Button>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default Login;
