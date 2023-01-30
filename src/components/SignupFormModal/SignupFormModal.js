import React from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./SignupFormModal.css";

export default function SignupFormModal(props) {
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
        <Modal.Header closeButton id="sfm1">
          {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div id="sfm3">Welcome to NOVA Prolabs</div>
          <div id="sfm4">
            Enter your details. Let us quickly get to know you so that we can
            get you the best help :)
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label id="sfm6">Full Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" id="sfm5" />
              <Form.Control type="text" placeholder="Last Name" id="sfm5" />
              <Form.Label id="sfm6">Date of Birth</Form.Label>
              <Form.Control type="date" placeholder="DD/MM/YYYY" id="sfm5" />
            </Form.Group>

            <Form.Label id="sfm6">Gender</Form.Label>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Other"
                  name="gender"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}

            {/* <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label id="sfm6">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@example.com"
                id="sfm5"
              />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer id="sfm2">
          <Button id="sfm7">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
