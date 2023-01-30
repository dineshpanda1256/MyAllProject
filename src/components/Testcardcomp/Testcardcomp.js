import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Testcardcomp.css";
import { BsDashCircleFill } from "react-icons/bs";
import { FaMicroscope } from "react-icons/fa";

export default function Testcardcomp() {
  return (
    <Container>
      <Row>
        <Col md={4} xs={12}>
          <div id="test1">
            <Row>
              <Col>
                <div id="test2">Blood Test</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div id="test6">Blood sugar test, Blood-cholesterol test</div>
              </Col>
            </Row>
            <Row>
              <Col id="test11" md={2} xs={2}>
                <div></div>
              </Col>
              <Col></Col>
            </Row>
            <Row id="test12">
              <Col>
                <div id="test9">
                  <div>
                    <BsDashCircleFill id="test7" />
                  </div>
                  <div>No special preparation is required</div>
                </div>
              </Col>
            </Row>
            <Row id="test9">
              <Col>
                <div id="test4">
                  MRP <div id="test3">$ 380</div> <div id="test5">19% off</div>
                </div>{" "}
              </Col>
            </Row>
            <Row id="test8">
              <Col>$ 300</Col>
            </Row>
            <Row>
              <Col id="test20">Extra $ 31 Cashback </Col>
            </Row>
            <Row id="test10">
              <Col>Effective price : $ 280</Col>
            </Row>
          </div>
        </Col>
        <Col md={8} xs={12}>
          <div id="test27">
            <Row>
              <Col>
                <div id="test9">
                  <div>
                    <FaMicroscope id="test14" />
                  </div>

                  <div>
                    <div id="test18">Total test includes (2)</div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row id="test16">
              <Col> Blood sugar test, Blood-cholesterol test</Col>
            </Row>
            <Row id="test15">
              <Col>2 tests includes</Col>
            </Row>
          </div>

          <div id="test27">
            <Row id="test19">
              <Col> About </Col>
            </Row>

            <Row id="test28">
              <Col>
                <div id="test9">
                  <div>
                    <FaMicroscope id="test14" />
                  </div>

                  <div>
                    <div id="test17">Sample</div>
                    <div id="test25">Blood</div>
                  </div>
                </div>
              </Col>
              <Col>
                <div id="test9">
                  <div>
                    <FaMicroscope id="test14" />
                  </div>

                  <div>
                    <div id="test17">Age group</div>
                    <div id="test25">All age group</div>
                  </div>
                </div>
              </Col>
              <Col>
                <div id="test9">
                  <div>
                    <FaMicroscope id="test14" />
                  </div>

                  <div>
                    <div id="test17">Gender</div>
                    <div id="test25">All gender</div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row id="test17">
              <Col md={11}>
                The HbA1c blood test measures your average level of blood sugar
                over the past 90 days. It is also called glycated haemoglobin
                because most monosaccharide
              </Col>
              <Col></Col>
            </Row>

            <Row id="test23">
              <Col></Col>
              <Col md={2} xs={4}>
                Read More..{" "}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
