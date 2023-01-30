import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import billbackground from "../../assets/Images/billbackground.png";
import { TiArrowBack } from "react-icons/ti";
import "./Bill.css";
function Bill() {
  return (
    <div>
      <Container>
        <Row>
          <Row>
            <Col md={6} xs={12}>
              <Row>
                <Col>
                  <div className="iconbg_bill">
                    <TiArrowBack
                      style={{
                        background: "#394E76",
                        padding: ".2rem",
                        fontSize: "3rem",
                        borderRadius: "1rem",
                        color: "white",
                      }}
                    />{" "}
                    Return Home
                  </div>
                </Col>

                <Row>
                  {" "}
                  <Col id="bill_ordernumber"> Order Id : NOVA3234 </Col>{" "}
                </Row>
                <Row id="bill_02"> Your booking has been confirmed</Row>
                <Row id="bill_02"> Booking Details</Row>
                <Row id="bill_02">
                  Pathology Name : New gen Patholab <br />
                  Address : Khandagiri, Bhubaneswar-751032 <br />
                  Slot Date : 03/September/2022 <br />
                  Slot Time : 2.30AM
                </Row>
                <Row id="bill_03"> Payment Details </Row>

                <Row id="bill_02">
                  <Col style={{ padding: "0px" }}>Urine Test </Col>
                  <Col style={{ padding: "0px" }}> $800.00</Col>
                </Row>
                <Row id="bill_02">
                  <Col style={{ padding: "0px" }}>Urine Test </Col>
                  <Col> $800.00</Col>
                </Row>
                <Row id="bill_02">
                  <Col style={{ padding: "0px" }}>Urine Test </Col>
                  <Col> $800.00</Col>
                </Row>

                <Row id="bill_03">
                  <Col style={{ padding: "0px" }}>Total </Col>
                  <Col> $2400.00</Col>
                </Row>
                <Row id="bill_02">
                  <Col style={{ padding: "0px" }}>GST </Col>
                  <Col style={{ padding: "0px" }}> $350.00</Col>
                </Row>

                <Row id="bill_03">
                  <Col style={{ padding: "0px" }}>Grand Total </Col>
                  <Col style={{ padding: "0px" }}> $2750</Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Bill;
