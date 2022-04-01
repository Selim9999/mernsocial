import React from 'react'
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, Button, Alert} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';


export const Register = () => {
    const url ="http://localhost:5000/api/auth/register";
    const [data, setData] = useState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
    const [render, setRender] = useState(false);

    function handle(e) {
      const newData = { ...data }
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(newData);
    }

    function submit(e) {
      e.preventDefault();
      axios.post(url, {
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        password: data.password,
      })
      .then(res => {
        console.log(res.data)
      })
      setRender({render: !render});
    }

    

    
    
  

  
  

  




  return (
    <div className='d-flex flex-column align-items-center col-md-6 mt-3'>
        <Container md>
           <h3 className="h3 mt-5" style={{color: "#d6d8ff", fontSize: 50, marginLeft: 900}}>Draxocial</h3>
           <h2 className="h2" style={{color: "#ed0952", fontSize: 30, paddingTop: 50 ,marginLeft: 935 }}>Sign Up</h2>
           <Form>
             <Row>
               <Form.Group controlId="formFirstName">
                 <Form.Label style={{color: "#d6d8ff", fontSize: "30px", marginLeft: "850px", paddingTop: "50px" }}>First Name: </Form.Label>
                 <Form.Control onChange={(e) => handle(e)} id="firstName" value={data.firstName} className="w-25" style={{marginLeft: "850px", padding: 20}} type="text" placeholder="First Name"></Form.Control>
               </Form.Group>
             </Row>
             <Row>
               <Form.Group controlId="formlasttName">
                 <Form.Label style={{color: "#d6d8ff", fontSize: "30px", marginLeft: "850px", paddingTop: "50px" }}>Last Name: </Form.Label>
                 <Form.Control onChange={(e) => handle(e)} id="lastName" value={data.lastName} className="w-25" style={{marginLeft: "850px", padding: 20}} type="text" placeholder="First Name"></Form.Control>
               </Form.Group>
             </Row>
             <Row>
               <Form.Group controlId="formUsername">
                 <Form.Label style={{color: "#d6d8ff", fontSize: "30px", marginLeft: "850px", paddingTop: "50px" }}>Username : </Form.Label>
                 <Form.Control data={data.username} onChange={(e) => handle(e)} id="username" value={data.username} className="w-25" style={{marginLeft: "850px", padding: 20}} type="text" placeholder="Username"></Form.Control>
               </Form.Group>
             </Row>
             <Row>
               <Form.Group controlId="formEmail">
                 <Form.Label style={{color: "#d6d8ff", fontSize: "30px", marginLeft: "850px", paddingTop: "50px" }}>Email: </Form.Label>
                 <Form.Control onChange={(e) => handle(e)} id="email" value={data.email} className="w-25 p-3" style={{ marginLeft: 850}} type="email" placeholder="Example@gmail.com"></Form.Control>
               </Form.Group>
             </Row>
             <Row>
               <Form.Group controlId="formPassword">
                 <Form.Label style={{color: "#d6d8ff", fontSize: "30px", marginLeft: "850px", paddingTop: "50px" }}>Password: </Form.Label>
                 <Form.Control onChange={(e) => handle(e)} id="password" value={data.password} className="w-25 p-3" style={{ marginLeft: 850}} type="password" placeholder="Password"></Form.Control>
               </Form.Group>
             </Row>
           </Form>
           <Button onClick={(e) => submit(e)} type="submit" className="mt-5" style={{backgroundColor: "#1e79ba", fontSize: 30, marginLeft: 920}} >Submit</Button>
           {render && <h6 style={{marginLeft: 920, fontSize: 15, marginTop: 30, marginBottom: -10, color: "#f7205d"}}>Go to login now</h6>}
           <Link to="/login" style={{ textDecoration: "none", color: 'black' }}>
           <Button  className="mt-5" style={{backgroundColor: "#7373f5", fontSize: 20, width: 150 ,marginLeft: 905}} >Back to login</Button>
           </Link>
       </Container>
    </div>
  )
  }

export default Register;
