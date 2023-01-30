import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Homecardcomp.css";
import cardimg from "../../assets/Images/homecardimg.png";
import { apicaller } from "../../utils/api";
function Homecardcomp(props) {
  return (
    <div>
      <Container style={{ cursor: "pointer" }} onClick={props.getDetails}>
        <Row className="Homecardcomp_maindiv">
          <Row className="Homecardcomp_cardtitle">
            <Col
              md="4"
              xs="4"
              style={{
                fontSize: "4rem",
                textAlign: "center",
                fontWeight: "900",
              }}
            >
              {props.number}{" "}
            </Col>
            <Col
              md="8"
              xs="8"
              style={{
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                fontSize: ".9rem",
              }}
            >
              {" "}
              {props.labname}
            </Col>
          </Row>
          <Row md="12" style={{ margin: "0px", padding: "0px" }}>
            {" "}
            <img
              src={props.img}
              style={{
                height: 150,
                width: "100%",
                margin: "0px",
                padding: "0px",
              }}
              alt="lab image"
            />
          </Row>
          <Row
            className="homecardcomp_learnmorebtn"
            style={{
              margin: 0,
              padding: "0",
              paddingTop: ".7rem",
              paddingBottom: ".7rem",
              marginBottom: "1.2rem",
            }}
          >
            {" "}
            {props.text}
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Homecardcomp;
