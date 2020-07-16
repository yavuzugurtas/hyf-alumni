import React, { Component } from "react";

import Logout from "../Logout/Logout";
import Update from "../Update/Update";

import { Navbar, Nav, Form } from "react-bootstrap";
import hyf from "../Landing/hyf.png";

// This component has 4 children; UpcomingEvents, MatchUsers, Update and Logout
function Profile() {
  return (
    <div>
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
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <a href="#!" className="btn btn-outline-white btn-rounded">
              <Update />
            </a>
            <Logout />
          </Form>
        </Navbar>
      </div>
    </div>
  );
}

export default Profile;
