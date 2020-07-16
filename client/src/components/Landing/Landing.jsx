import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Carousel,
  Container,
  Row,
  Col,
  Jumbotron,
} from "react-bootstrap";
import SignUp from "../Signup/Signup";
import Login from "../Login/Login";
import First from "../Landing/First.jpg";
import Second from "../Landing/Second.jpg";
import hyf from "../Landing/hyf.png";

// This is the landing page of the application
// Is has two children (Login Component and Signup Component)
function Landing() {
  return (
    <div>
      <Navbar fixed="top" bg="light" variant="light">
        <Navbar.Brand href="https://hackyourfuture.be">
          <img
            alt=""
            src={hyf}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          HYF Alumni Platform
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="https://hackyourfuture.be">Home</Nav.Link>
          <Nav.Link href="about.html">About</Nav.Link>
        </Nav>
        <Form inline>
          <Login text="Login" color="outline-primary" />
          <SignUp />
        </Form>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={First} alt="First slide" />
          <Carousel.Caption className="h-50">
            <h3>
              <Login text="Find Your Future Employee" color="primary" />
            </h3>
            <p className="text-danger font-weight-bold h-25">
              Meet Your Best Canditates!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Second} alt="Second slide" />

          <Carousel.Caption className="h-50"></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5">
        <Row>
          <Col sm={4}>
            <Jumbotron fluid>
              <Container>
                <h3 className="text-info">Some Text</h3>
                <hr></hr>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </Container>
            </Jumbotron>
          </Col>
          <Col sm={4}>
            <Jumbotron fluid>
              <Container>
                <h3 className="text-info">Some Text</h3>
                <hr></hr>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </Container>
            </Jumbotron>
          </Col>
          <Col sm={4}>
            <Jumbotron fluid>
              <Container>
                <h3 className="text-info">Some Text</h3>
                <hr></hr>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>

      <footer className="border rounded container pt-4">
        <div className="container">
          <ul className="text-center py-2">
            <li className="list-inline-item">
              <h5 className="pt-1 text-info">Register for free</h5>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="btn btn-outline-white btn-rounded">
                <SignUp />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="">Hackyourfuture Belgium</a>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
