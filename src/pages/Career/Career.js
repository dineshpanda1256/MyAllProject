import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Career.css";
import { apicaller } from "../../utils/api";

function Career() {
  const [carrierData, setcarrierData] = useState([]);
  useEffect(() => {
    getCarrierData();
  }, []);

  const getCarrierData = () => {
    apicaller("get-career", null, "get", null)
      .then((res) => {
        setcarrierData(res.data.Career);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <div>
      <Container style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
        <Row>
          <Col>
            <div id="one">NOVA</div>
            <div id="two">
              At Forage, we believe that talent is evenly distributed, but
              opportunity is not. We want to build a world where every student
              has the opportunity to build vital career skills and industry
              knowledge for free, and in so doing, give everyone the chance to
              discover and land their dream job. Today, millions of candidates
              explore Forag.
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div id="Three">
              Today, millions of candidates explore Forage virtual experiences
              to learn more about the unique and compelling work companies have
              to offer. Hundreds of firms (e.g. Goldman Sachs, BCG, JPMorgan,
              Accenture) around the world currently showcase their work and
              career paths on Forage. Our global reach means we can make a
              direct impact on the world’s future workforce in ways no other
              company can.
            </div>
          </Col>
        </Row>

        <Row>
          <div id="Four">Current Job Openings</div>
        </Row>

        <Row>
          <div id="Five">Marketing</div>
        </Row>
        {carrierData?.map((list) => (
          <Row>
            <Col>
              <div id="Six">{list.role}</div>
              <div id="Seven">{list.location}</div>
            </Col>
          </Row>
        ))}

        {/* <Row> 
        <Col>
        <div id="Eight">Lead Data Reporter</div>
        <div id="Nine">Remote, US</div>
        </Col>
      </Row>

      <Row> 
        <Col>
      <div id="Ten">Senior Manager, CRM/Lifecycle Marketing</div>
      <div id="item1">Remote, US</div>
      </Col>
      </Row>

      <Row>
      <Col>
      <div id="item2">Operations Program Strategist, Operations</div>
      <div id="item3">United States</div>
      </Col>
      </Row>

      <Row>
        <Col> 
      <div id="item4">Software Engineering Subject Matter Expert</div>
      <div id="item5">Remote, United States, United Kingdom or Australia</div>
        </Col>
      </Row>

      <Row>
        <Col>
      <div id="item6">Product</div>
        </Col>
      </Row>

      <Row>
        <Col>
      <div id="Item7">Director of Product</div>
      <div id="Item8">Remote, US</div>
       </Col>
      </Row>

      <Row>
        <Col> 
      <div id="Item9">Sales</div>
        </Col>
      </Row>

      <Row>
        <Col>
      <div id="item10">Business Development Representative</div>
      <div id="item11">Remote, US</div>
        </Col>
      </Row>

      <Row>
        <Col> 
      <div id="item12">Global Account Director</div>
      <div id="item13">Remote, US</div>
        </Col>
      </Row>

      <Row>
        <Col> 
      <div id="item14">Global Account Director</div>
      <div id="item15">Remote, United Kingdom</div>
      </Col>
      </Row>

      <Row>
        <Col> 
      <div id="item16">Tech</div>
      </Col>
      </Row>

      <Row> 
        <Col>
      <div id="item17">Senior Software Engineer</div>
      <div id="item18">Australia or New Zealand</div>
      </Col>
      </Row> */}
      </Container>
    </div>
  );
}

export default Career;
