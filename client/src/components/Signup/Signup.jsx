import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { Redirect } from "react-router";
import AlumniSignup from "./AlumniSignup";
import CompanySignup from "./CompanySignup";
import useInput from "./use-input";

// This components has 6 children (Basic_Info, Dance_Preference,
// Location_Experience, More_About_You, Partner_Physical_Info
// User_Physical_Info Components) and 1 external function (use-input)
function SignUp() {
  // "show" becomes "true" when user clicks "signup" button or vice versa
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setShowAlumniInput(false);
    setShowCompanyInput(false);
  };

  const handleShow = () => setShow(true);

  // useInput function is called to assign the event.target values
  // to the following variables
  const name = useInput(""); // String
  const surname = useInput(""); // String
  const companyName = useInput(""); // String
  const email = useInput(""); // String
  const password = useInput(""); // String

  // If post request returns with user data "signedUp" variable turns "true"
  const [signedUp, setSignedUp] = useState(false);

  const [showAlumniInput, setShowAlumniInput] = useState(false);
  const toggleAlumniInput = () => setShowAlumniInput(true);

  const [showCompanyInput, setShowCompanyInput] = useState(false);
  const toggleCompanyInput = () => {
    setShowCompanyInput(true);
  };

  // Send all the input to backend via axios post request
  function submitForm() {
    axios
      .post("https://hyf-class6-dancewithme.herokuapp.com/api/users", {
        name: name.value,
        surname: surname.value,
        email: email.value,
        password: password.value,
        companyName: companyName.value,
      })
      .then((e) => {
        if (e.data.token) {
          // user token and ID is stored in local storage in order to use them
          // when user wants to see matched users in profile page or wants to log out
          localStorage.setItem("token", e.data.token);
          localStorage.setItem("ID", e.data.user._id);
          setSignedUp(true);
        } else {
          setSignedUp(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      {signedUp ? (
        <Redirect to="/users/me" />
      ) : (
        <div>
          <Button variant="outline-primary" onClick={handleShow}>
            Sign Up
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitForm();
                }}
                action="/newaccount"
                method="post"
                className="was-validated"
              >
                {!showAlumniInput && !showCompanyInput ? (
                  <div>
                    <p style={{ textAlign: "center" }}>Create an account as</p>
                    <Container>
                      <Row className="justify-content-md-center">
                        <Col xs lg="2">
                          <span onClick={toggleAlumniInput}>Alumni</span>
                        </Col>
                        <Col md="auto">|</Col>
                        <Col xs lg="2">
                          <span onClick={toggleCompanyInput}>Company</span>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                ) : (
                  showAlumniInput && (
                    <>
                      <AlumniSignup
                        name={name}
                        surname={surname}
                        email={email}
                        password={password}
                      />

                      <div className="container my-3">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Submit and verify your email
                        </button>
                      </div>
                    </>
                  )
                )}

                {showCompanyInput && (
                  <>
                    <CompanySignup
                      name={name}
                      surname={surname}
                      companyName={companyName}
                      email={email}
                      password={password}
                    />

                    <div className="container my-3">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Submit and verify your email
                      </button>
                    </div>
                  </>
                )}
                {/* <AlumniSignup
                  name={name}
                  surname={surname}
                  email={email}
                  password={password}
                />

                <div className="container my-3">
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit and verify your email
                  </button>
                </div> */}
              </form>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </div>
  );
}
export default SignUp;
