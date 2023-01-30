import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./AddnewmemberModal.css";

export default function AddnewmemberModal(props) {
  return (
    <div> 
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header id="addnew1" closeButton></Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="addnew4">Name</Form.Label>
            <Form.Control id="addnew3" type="email" placeholder="Full Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="addnew4">Phone Number</Form.Label>
            <Form.Control id="addnew3" type="number" placeholder="+91" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="addnew4">Gmail id</Form.Label>
            <Form.Control
              id="addnew3"
              type="email"
              placeholder="xyz@gmail.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="addnew4">DOB</Form.Label>
            <Form.Control id="addnew3" type="email" placeholder="dd/mm/yy" />
          </Form.Group>

          <Row id="addnew5">
            <Col>Gender</Col>
          </Row>
          <Row>
            <Col md={2} xs={3}>
              <div id="addnew2">Male</div>
            </Col>
            <Col md={2} xs={3}>
              <div id="addnew6">Female</div>
            </Col>
            <Col md={2} xs={3}>
              <div id="addnew6">Others</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div id="addnew7">Add</div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}
