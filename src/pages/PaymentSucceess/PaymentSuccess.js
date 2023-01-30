import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PaymentSuccess.css";
import PaySuccess from "../../assets/Images/success.gif";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
function PaymentSuccess() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <div>
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
            Payment Successful{" "}
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default PaymentSuccess;
