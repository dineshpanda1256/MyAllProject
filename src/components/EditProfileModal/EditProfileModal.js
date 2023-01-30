import React from "react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import logo from "../../assets/NovaLogo.png";
import "./EditProfileModal.css";

export default function EditProfileModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ borderBottom: "none" }}>
          {/* <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body style={{ padding: "2rem" }}>
          <div id="epm1">Codekartians</div>
          <div id="emp2"></div>
          <div id="emp3">UID : 3423 4534 5345</div>
          <div id="emp4">Male | 23</div>
          <div id="emp2"></div>
          <Row>
            <Col id="emp4">+91 8249072512</Col>
            <Col id="emp6">
              <Button id="emp5">Verify</Button>
            </Col>
          </Row>
          <div></div>
          <div id="emp4">0 4 5 6</div>
          <div id="emp2"></div>
          <Row>
            <Col id="emp4">rd43057@gmail.com</Col>
            <Col id="emp6">
              <Button id="emp5">Verify</Button>
            </Col>
          </Row>
          <div></div>
          <div id="emp4">3 5 8 6</div>
          <div id="emp2"></div>
          <div id="emp8">
            <Button id="emp7">Save</Button>
          </div>
        </Modal.Body>
        <Modal.Footer id="emp9">
          <Image src={logo} alt="logo" style={{ height: "2rem" }} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
