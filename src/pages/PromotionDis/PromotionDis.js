import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./PromotionDis.css";
import promotion from "../../assets/promotion.png";
import { apicaller } from "../../utils/api";
import { useState } from "react";
import { useEffect } from "react";

export default function PromotionDis() {
  {
    /* return (
    <>
        <Container>
            <Row id="pd1">
                <Col xs={12} md={4} id="pd5"><Image src={promotion} alt="img" id="pd2" style={{width:'100%', height:'auto'}}/></Col>
                <Col xs={12} md={4} id="pd3">50% <br/>OFF</Col>
                <Col xs={12} md={4} id="pd4">ON <br/>FIRST<br/>BOOKING</Col>
            </Row>
        </Container>
        <Container fluid>
        <Row id="pd6">
                <Col id="pd7">
                    <Row>
                        <Col id="pd8">Refer & earn</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button id="pd9">Share</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  ) */
  }

  const [getPromotionDisData, setGetPromotionDisData] = useState([]);

  useEffect(() => {
    getPromotionDisFunc();
  }, []);

  const getPromotionDisFunc = () => {
    apicaller("get-Promotion", null, "get", null)
      .then((res) => {
        setGetPromotionDisData(res.data.Promotion);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <>
      <Container>
        {getPromotionDisData.map((item) => (
          <Row id="pd1">
            <Col xs={12} md={4} id="pd5">
              <Image src={promotion} alt="img" id="pd2" />
            </Col>
            <Col xs={12} md={4} id="pd3">
              {item.percentage}% <br />
              off
            </Col>
            <Col xs={12} md={4} id="pd4">
              {item.bookings_type}
            </Col>
          </Row>
        ))}
      </Container>
      <Container fluid>
        <Row id="pd6">
          <Col id="pd7">
            <Row>
              <Col id="pd8">Refer & earn</Col>
            </Row>
            <Row>
              <Col>
                <Button id="pd9">Share</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
