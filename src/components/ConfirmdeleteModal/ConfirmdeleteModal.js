import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";
import "./ConfirmdeleteModal.css";

export default function ConfirmdeleteModal(props) {
  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Container id="confirm4">
            <Row id="confirm1">
              <Col>Confirm “Delete”</Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md={2} xs={3} id="confirm2">
                Confirm
              </Col>
              <Col md={1} xs={1}></Col>
              <Col md={2} xs={3} id="confirm3" onClick={props.onHide}>
                <div>Cancel</div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
