import React from "react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import "./EditOrganizationProfile.css";
import { BiEdit } from "react-icons/bi";
import logo from "../../assets/NovaLogo.png";

export default function EditOrganizationProfile(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton id="eop1">
          {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
        </Modal.Header>
        <Modal.Body style={{ padding: "2rem" }}>
          <Row>
            <Col id="eop3">Codekart</Col>
            <Col></Col>
            <Col id="eop5">
              <BiEdit id="eop4" />
            </Col>
          </Row>
          <div id="eop6"></div>
          <Row>
            <Col id="eop7">Reg no : 3423 4534 5345</Col>
            <Col></Col>
            <Col id="eop5">
              <BiEdit id="eop4" />
            </Col>
          </Row>
          <Row>
            <Col id="eop8">+91-1234567890</Col>
            <Col>
              <Button id="eop9">Verify</Button>
            </Col>
            <Col id="eop5">
              <BiEdit id="eop4" />
            </Col>
          </Row>
          <div id="eop6"></div>
          <Row>
            <Col id="eop8">1234</Col>
          </Row>
          <div id="eop6"></div>
          <Row>
            <Col id="eop8">codekart@codekart.com</Col>
            <Col>
              <Button id="eop9">Verify</Button>
            </Col>
            <Col id="eop5">
              <BiEdit id="eop4" />
            </Col>
          </Row>
          <div id="eop6"></div>
          <Row>
            <Col id="eop8">1234</Col>
          </Row>
          <div id="eop6"></div>
          <Row>
            <Col id="eop8">Address</Col>
            <Col></Col>
            <Col id="eop5">
              <BiEdit id="eop4" />
            </Col>
          </Row>
          <div id="eop6"></div>
        </Modal.Body>
        <Modal.Footer id="eop2">
          <div>
            <Button id="eop10">Save</Button>
          </div>
          <div id="eop11">
            <Image src={logo} alt="logo" style={{ height: "3rem" }} />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
