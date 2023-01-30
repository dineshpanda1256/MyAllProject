import React from "react";
import "./TestCard.css";
import kidney from "../../assets/kidney.png";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TestCard(props) {
  return (
    <>
      <Container>
        <Row>
          <Col style={{ marginBottom: "0.5rem" }}>
            <div id="testcard1">
              <div>
                <Image src={kidney} alt="image" id="testcard4" />
              </div>
              <div id="testcard2">{props.testName}</div>
              <div id="testcard3"></div>
              <div id="testcard5">
                <div id="testcard6">MRP</div>
                <div id="testcard6">
                  <strike> ${props.acPrice} </strike>
                </div>
                <div id="testcard7">{props.percentage}% off</div>
              </div>
              <div id="testcard8">$ {props.price}</div>
              <div id="testcard9">extra ${props.discount_price} Cashback</div>
              {/* <Link to="/cart"> */}
              <Button id="testcard10" onClick={props.addToCart}>
                Add to Cart
              </Button>
              {/* </Link> */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
