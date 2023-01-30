import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import "./ProfileModal.css";
import {AiFillProfile} from "react-icons/ai";
import {MdPayment} from "react-icons/md";
import {TbLogout} from "react-icons/tb";

export default function ProfileModal(props) {

  return (
    <>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      id="profilemodal1"
    >
      <Modal.Header closeButton style={{borderBottom:"none"}}>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <div>
            <div id="profilemodal2">Rudra Narayan Dash</div>
            <div id="profileemodal3">UID : 3423 4534 5345</div>
            <Row id="profilemodal4">
                <Col>Male | 23</Col>
                <Col>1234567890</Col>
            </Row>
            <div id="profilemodal5"> <AiFillProfile /> Edit Profile</div>
            <div id="profilemodal6"><MdPayment /> My Payments</div>
            <div id="profilemodal6"><TbLogout /> Logout</div>
            <Button id="profilemodal7">download out official app</Button>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    </>
  )
}
