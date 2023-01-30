import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";
import PaySuccess from "../../assets/Images/success.gif";

export default function PleaseWait(props) {
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
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={5} xs={4}></Col>
              <Col md={2} xs={4} id="Paymentsuccess_animatedgif">
                {" "}
                <img src={PaySuccess} alt="" style={{ width: "100%" }} />{" "}
              </Col>
            </Row>
            <Row>
              <Col md={3} xs={0}></Col>
              <Col md={6} xs={12} id="paymentsuccessful_text">
                {" "}
                Please Wait.............{" "}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        {/* <Modal.Footer id="sfm2">
          <Button id="sfm7">Submit</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
