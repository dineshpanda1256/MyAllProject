import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Homecompfive.css";
import doctor from "../../assets/Images/doc.png";
import Mobile from "../../assets/Images/Mobile.png";
import playstore from "../../assets/Images/playstore.png";
import applestore from "../../assets/Images/applestore.png";
function Homecompfive() {
  return (
    <div>
      <Container>
        <Row lg={12} md={12} xs={12} className="homecompfive_savetime">
          SAVE TIME. FEEL BETTER.
        </Row>
        <Row lg={12} md={12} xs={12} className="homecompfive_skip">
          Skip The Waiting Room! <br />
          Register Online Before You Arrive.
        </Row>

        <Row className="rowthree" style={{ marginTop: "3rem", marginBottom:"2rem" }}>
          {/* <Col md={1} xs={0}></Col> */}
          {/* <Col md={4} xs={12}>
            {" "}
            <div id="home_doctorimage2">
              <img src={doctor} alt="" style={{ width: "100%" }} />{" "}
            </div>
          </Col> */}

          <Col md={4} xs={12}>
            <div className="homecompfive_discover"> Drug Testing</div>
            <div className="homecompfive_paragraph">
              {" "}
              Urine Analysis Drug Testing Panels Breath Alcohol Testing Hair
              Follicle Drug Testing Blood Serum Drug Testing Medical Review
              Officer (MRO) Analysis Electronic Scheduling and Reporting
            </div>
            {/* <div className="homecompfive_learnmore"> Learn more..</div> */}
          </Col>
          <Col md={4} xs={12}>
            <div className="homecompfive_discover"> Features</div>
            <div className="homecompfive_paragraph">
              {" "}
              Customizable solutions to fit your needs. Web-based system,
              available 24/7 to order and track drug testing requests/results.
              Flexible ordering and reporting capabilities to support the
              process that works for you. Random drug testing application to
              manage the selection of employees for random tests
            </div>
            {/* <div className="homecompfive_learnmore"> Learn more..</div> */}
          </Col>
          <Col md={4} xs={12}>
            <div className="homecompfive_discover"> We Promise</div>
            <div className="homecompfive_paragraph">
              {" "}
              understand your needs and deliver the right solutions. provide
              everyone we serve with respectful and compassionate care; reassure
              and empower people to make informed health decisions that can have
              a positive impact on their lives; inspire confidence through every
              interaction
            </div>
            {/* <div className="homecompfive_learnmore"> Learn more..</div> */}
          </Col>
        </Row>

        <Row>
          <Col md={4} xs={1}>
            {" "}
          </Col>
          <Col md={4} xs={10}>
            <img src={Mobile} style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>

      <Container fluid className="Homecompfive_graddiv">
        <Container>
          <Row className="Homecompfive_Downloadtext">
            DOWNLOAD OUR OFFICIAL APP
          </Row>
          <Row>
            <Col md={2} xs={1}>
              {" "}
            </Col>
            <Col md={4} xs={5}>
              {" "}
              <a href="https://thecodekart.com" target="_blank" id="applestoreplaystore"><img src={playstore} style={{ width: "100%" }} /> </a>{" "}
            </Col>
            <Col md={4} xs={5}>
              {" "}
              <a href="https://novaprolab.com" target="_blank" id="applestoreplaystore"><img
                src={applestore}
                style={{ width: "100%", marginTop: "4px" }}
              /> </a>{" "}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Homecompfive;
