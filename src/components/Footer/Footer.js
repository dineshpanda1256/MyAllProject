import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import footerlogo from "../../assets/Images/footerlogo.png";
import { IoLogoTwitter } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { FiMail } from "react-icons/fi";
function Footer() {
  return (
    <div>
      <Container fluid className="footer_bg">
        <Container>
          <Row style={{ paddingBottom: "1rem" }}>
            <Col md={1} xs={0}></Col>
            <Col md={2} xs={12}>
              {" "}
              <Row>
                <Link to="/">
                  <img
                    src={footerlogo}
                    style={{ width: "60%", marginTop: "1.8rem" }}
                  />
                </Link>
              </Row>
              <Row>&nbsp;</Row>
              <Row id="footer_icondiv">
                <Col id="footer_socialicons">
                  <a href="https://twitter.com/i/flow/login" target="_blank">
                    <IoLogoTwitter style={{ color: "#36DFEE" }} />
                  </a>

                  <a href="https://www.instagram.com/" target="_blank">
                    <FiInstagram
                      style={{ color: "#36DFEE", marginLeft: "1rem" }}
                    />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    <BsFacebook
                      style={{ color: "#36DFEE", marginLeft: "1rem" }}
                    />
                  </a>
                  <Link to="/contact">
                    <FiPhoneCall
                      style={{ color: "#36DFEE", marginLeft: "1rem" }}
                    />
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col md={2} xs={6}>
              {" "}
              <Row className="footer_heading"> Quick Links </Row>
              <Row>
                <Link to="/lab" className="footertext_green">
                  Lab
                </Link>
              </Row>
              {/* <Row>
                <Link to="/promotion" className="footertext_green">
                  Promotion & discounts
                </Link>
              </Row> */}
              <Row>
                <Link to="/faq" className="footertext_green">
                  FAQ
                </Link>
              </Row>
            </Col>
            <Col md={2} xs={12}>
              {" "}
              <Row className="footer_heading"> About Nova</Row>
              <Row>
                <Link to="/about" className="footertext_green">
                  About Us
                </Link>
              </Row>
              {/* <Row>
                <Link to="/news" className="footertext_green">
                  News
                </Link>
              </Row> */}
              {/* <Row>
                <Link to="/career" className="footertext_green">
                  Career
                </Link>
              </Row> */}
            </Col>
            <Col md={2} xs={12}>
              {" "}
              <Row className="footer_heading">Legal</Row>
              {/* <Row>
                <Link to="/locate" className="footertext_green">
                  Locate Us
                </Link>
              </Row> */}
              <Row>
                <Link to="/terms" className="footertext_green">
                  Terms & Conditions
                </Link>
              </Row>
              <Row>
                <Link to="/privacyp" className="footertext_green">
                  Privacy Policies
                </Link>
              </Row>
            </Col>
            <Col md={2} xs={6}>
              {" "}
              <Row className="footer_heading"> Contact Us </Row>
              <Row>
                <div id="footer_contactus">
                  <div id="footer_locationicon">
                    <HiLocationMarker />
                  </div>{" "}
                  <div>
                    <a  className="footertext_green" target="_blank" href="https://www.google.com/maps/place/1509+Lady+St,+Columbia,+SC+29201,+USA/@34.0046833,-81.030952,17z/data=!3m1!4b1!4m5!3m4!1s0x88f8a52ade2e2f3b:0x8fc115c00f65bd53!8m2!3d34.0046833!4d-81.0287633"
                    >1509 Lady St, Columbia, SC 29201, USA</a>
                  </div>
                </div>
                <div id="footer_contactus">
                  <div id="footer_locationicon">
                    <MdPhone />
                  </div>
                  <div>
                    {" "}
                    <a href="tel:+16783040395" className="footertext_green">
                      +16783040395
                    </a>
                  </div>
                </div>
                <div id="footer_contactus">
                  <div id="footer_locationicon">
                    <FiMail />
                  </div>
                  <div>
                    <a
                      href="mailto:info@novaprolabs.com"
                      className="footertext_green"
                    >
                      info@novaprolabs.com
                    </a>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="footer_copyrights">
        {/* <Row className='shortlink'>
        <Col md={3} xs={0}></Col>
        <Col md={2} xs={12}>Privacy Statement</Col>
        <Col md={2} xs={12}>Terms of use</Col>
        <Col md={2} xs={12}>Notice of Descrimnation</Col>
        <Col md={3} xs={0}></Col>
          </Row> */}
        <Row className="copyright_text">
          {" "}
     
            {" "}
            © 2022 All right Reserved by NOVA Prolabs | Designed by <a href=" https://www.thecodekart.com/"  target="_blank" id="footer_codekart">Codekart Solutions Pvt. Ltd.</a> 
          
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
