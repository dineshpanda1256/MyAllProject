import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Labcardcomponent.css";
import microscope from "../../assets/microscopeicon.png";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiBuilding } from "react-icons/bi";
import { RiTestTubeLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { useState } from "react";

export default function Labcard(props) {

  const [seemore, setSeemore] = useState(50);

  const seeMoreFun = () => {
    setSeemore(seemore+40);

  }

  return (
    <Container >
      <Row>
        <Col id="labcard1">
          <Row>
            <Col md={8} xs={12} id="labcard2">
              <img src={microscope} id="labcardimg" />
              {props.Dignosticsname}
            </Col>
            <Col md={1}></Col>
            <Col md={3} xs={12} id="labcard3">
              {props.ratinA === 1 ? (
                <>
                  <BsStarFill color="orange" />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </>
              ) : props.ratinA === 2 ? (
                <>
                  <BsStarFill color="orange" />
                  <BsStarFill color="orange" />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </>
              ) : props.ratinA === 3 ? (
                <>
                  <BsStarFill color="orange" />
                  <BsStarFill color="orange" />
                  <BsStarFill color="orange" />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </>
              ) : props.ratinA === 4 ? (
                <>
                  <BsStarFill color="orange" />
                  <BsStarFill color="orange" />
                  <BsStarFill color="orange" />
                  <BsStarFill color="orange" />
                  <AiOutlineStar />
                </>
              ) : props.ratinA === 5 ? (
                <>
                  <BsStarFill color="orange" />
                  <BsStarFill color="orange" />
                  <BsStarFill color="orange" />
                  <BsStarFill color="orange" />
                  <BsStarFill color="orange" />
                </>
              ) : null}
            </Col>
          </Row>

          <Row id="labcard4">
            <Col>
              <AiOutlineFieldTime id="icon1" />
              {props.timeopening} - {props.timeclosing} | {props.weekstart} -{" "}
              {props.weekend}
            </Col>
          </Row>

          <Row id="labcard4">
            <Col>
              <div>
                <div id="labcard7">
                  <RiTestTubeLine id="icon1" />
                  Specialization
                </div>
                <div id="labcard5">{props.testtype}</div>
              </div>
            </Col>
            <Col
              md={2}
              xs={3}
              id="labcardviewbutton"
              onClick={props.viewLabDetails}
              style={{ cursor: "pointer", fontFamily: 'Exo' }}
            >
              <div onClick={props.viewLabDetails}>View</div>
            </Col>
          </Row>

          <Row id="labcard4">
            <Col xs={12} md={12}>
              <div id="labcard10">
                <BiBuilding id="icon1" />
                Facilites
              </div>
              <div id="labcard5">{props.facilities.split("").slice(0,seemore).join("")} {props.facilities.length > 50 ?  <span id="seemoreTxt" onClick={()=> seeMoreFun()}>See More...</span>: null}</div>
            </Col>
            <Col xs={7} md={1}></Col>
            {/* <Col md={3} xs={5} id="labcard6">
              <div id="labcardlocbuttion">
                <GiEarthAfricaEurope id="earthicon" />
                Locate
              </div>
            </Col> */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
