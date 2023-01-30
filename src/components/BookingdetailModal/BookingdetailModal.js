import React from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./BookingdetailModal.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function BookingdetailModal(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header id="bmodal1" closeButton></Modal.Header>
        <Modal.Body id="bmodal2">
          <Container>
            <Row id="bmodal3">
              <Col>1. Name : Employee one</Col>
            </Row>

            <Row id="bmodal4">
              <Col>UID : 245235 345345</Col>
            </Row>

            <Row id="bmodal4">
              <Col>DOB : 28/05/1971</Col>
            </Row>

            <Row id="bmodal4">
              <Col>Contact : 913244234234</Col>
            </Row>
            <Row id="bmodal4">
              <Col>Email : xyz@gmail.com</Col>
            </Row>

            <Row id="bmodal9">
              <Col md={3}>
                <div id="bmodal5">Order Status</div>
              </Col>
              <Col md={3}>
                <div id="bmodal5">Bill</div>
              </Col>
              <Col></Col>
            </Row>

            <Row>
              <Col md={12}>
                <div id="bmodal6">
                  <Row id="bmodal8">
                    <Col>
                      1. Blood test is sheduled to 23/11/2022 at{" "}
                      <div>1.00pm</div>{" "}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={4}>
                      <Button variant="dark" id="bmodal7">
                        Send Mail
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <div id="bmodal6">
                  <Row id="bmodal8">
                    <Col>
                      1. Blood test is sheduled to 23/11/2022 at{" "}
                      <div>1.00pm</div>{" "}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={4}>
                      <Button variant="dark" id="bmodal7">
                        Send Mail
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
