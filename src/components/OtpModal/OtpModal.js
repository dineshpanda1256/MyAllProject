import React, { useState } from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./OtpModal.css";
import logo from "../../assets/NovaLogo.png";
import SignupFormModal from "../SignupFormModal/SignupFormModal";

export default function OtpModal(props) {
  const [signupForm, setSignupForm] = useState(false);
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton id="otp1">
          {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div>
            <div id="otp3">Nice</div>
            <div id="otp4">
              Now type in the OTP sent to you for authentication
            </div>
            <Row>
              <Col>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" id="otp5" />
                  </Form.Group>
                </Form>
              </Col>
              <Col id="otp6">
                <BsArrowRightCircleFill
                  id="otp5"
                  onClick={() => setSignupForm(true)}
                />
                <SignupFormModal
                  show={signupForm}
                  onHide={() => setSignupForm(false)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <div id="otp7"></div>
              </Col>
              <Col></Col>
            </Row>
            <div id="otp8">Resend OTP</div>
          </div>
        </Modal.Body>
        <Modal.Footer id="otp2">
          <Image src={logo} alt="img" style={{ height: "3rem" }} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
