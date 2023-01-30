import React from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";
import SelectLocation from "../../pages/SelectLocation/SelectLocation";
import "./SignupFormModal.css";

export default function LocationModal(props) {
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
        <Modal.Header id="sfm1">
          <Modal.Title id="contained-modal-title-vcenter">
            Please Choose Your Location
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SelectLocation />
        </Modal.Body>
        {/* <Modal.Footer id="sfm2">
          <Button id="sfm7">Submit</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
