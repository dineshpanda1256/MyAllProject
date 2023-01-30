import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./DownloadreportModal.css";
import Novalogo from "../../assets/NovaLogo.png";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function DownloadreportModal(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header id="modal1" closeButton></Modal.Header>
        <Modal.Body>
          <div id="modal5">
            <img src={Novalogo} id="modal4" alt="image" />

            <Container>
              <Row id="modal2">
                <Col>Member One</Col>
              </Row>
            </Container>

            <Container>
              <Row id="modal3">
                <Col md={6} xs={12} id="modal7">
                  1. Blood test & Blood grouping test report{" "}
                </Col>
                <Col id="modal8">22/02/2022</Col>
                <Col id="modal6">Download Report</Col>
              </Row>
              <Row id="modal3">
                <Col md={6} xs={12} id="modal7">
                  1. Blood test & Blood grouping test report{" "}
                </Col>
                <Col id="modal8">22/02/2022</Col>
                <Col id="modal6">Download Report</Col>
              </Row>
              <Row id="modal3">
                <Col md={6} xs={12} id="modal7">
                  1. Blood test & Blood grouping test report{" "}
                </Col>
                <Col id="modal8">22/02/2022</Col>
                <Col id="modal6">Download Report</Col>
              </Row>
              <Row id="modal3">
                <Col md={6} xs={12} id="modal7">
                  1. Blood test & Blood grouping test report{" "}
                </Col>
                <Col id="modal8">22/02/2022</Col>
                <Col id="modal6">Download Report</Col>
              </Row>
              <Row id="modal3">
                <Col md={6} xs={12} id="modal7">
                  1. Blood test & Blood grouping test report{" "}
                </Col>
                <Col id="modal8">22/02/2022</Col>
                <Col id="modal6">Download Report</Col>
              </Row>
            </Container>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
