import React from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import "./EditEmployeeProfile.css";
import { BiEdit } from "react-icons/bi";
import logo from "../../assets/NovaLogo.png";

export default function EditEmployeeProfile(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton id="eep1">
          {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
        </Modal.Header>
        <Modal.Body style={{ padding: "2rem" }}>
          <Row>
            <Col id="eep3">Employee one</Col>
            <Col></Col>
            <Col id="eep5">
              <BiEdit id="eep4" />
            </Col>
          </Row>
          <div id="eep6"></div>
          <Row>
            <Col id="eep7">UID : 3423 4534 5345</Col>
            <Col></Col>
            <Col id="eep5">
              <BiEdit id="eep4" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select aria-label="Default select example">
                <option value="1">male</option>
                <option value="2">female</option>
                <option value="3">other</option>
              </Form.Select>
            </Col>
            <Col id="eep12">DOB</Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="date" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col id="eep8">+91-1234567890</Col>
            <Col>
              <Button id="eep9">Verify</Button>
            </Col>
            <Col id="eep5">
              <BiEdit id="eep4" />
            </Col>
          </Row>
          <div id="eep6"></div>
          <Row>
            <Col id="eep8">1234</Col>
          </Row>
          <div id="eep6"></div>
          <Row>
            <Col id="eep8">codekart@codekart.com</Col>
            <Col>
              <Button id="eep9">Verify</Button>
            </Col>
            <Col id="eep5">
              <BiEdit id="eep4" />
            </Col>
          </Row>
          <div id="eep6"></div>
          <Row>
            <Col id="eep8">1234</Col>
          </Row>
          <div id="eep6"></div>
          {/* <Row>
            <Col id="eep8">Address</Col>
            <Col></Col>
            <Col id="eep5"><BiEdit id="eep4" /></Col>
          </Row>
          <div id="eep6"></div> */}
        </Modal.Body>
        <Modal.Footer id="eep2">
          <div>
            <Button id="eep10">Save</Button>
          </div>
          <div id="eep11">
            <Image src={logo} alt="logo" style={{ height: "3rem" }} />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
