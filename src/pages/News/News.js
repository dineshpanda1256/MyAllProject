import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./News.css";
import Newsimg from "../../assets/Images/News.png";
import Footer from "../../components/Footer/Footer";
import { apicaller } from "../../utils/api";

function News() {
  const [newsData, setnewsData] = useState([]);
  useEffect(() => {
    getNewsData();
  }, []);

  const getNewsData = () => {
    apicaller("get-news", null, "get", null)
      .then((res) => {
        setnewsData(res.data.News);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <div>
      <Container style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
        {newsData?.map((list) => (
          <Row>
            <Row>
              <Col md={2}> </Col>
              <Col md={8}>
                {" "}
                <img src={Newsimg} style={{ width: "100%" }} />{" "}
              </Col>
              <Col md={2}> </Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={8} id="Newsheadline">
                {list.heading}
              </Col>
            </Row>

            <Row>
              <Col md={2}></Col>
              <Col md={8} id="Newsdesctiption">
                {list.description}
              </Col>
            </Row>
          </Row>
        ))}

        {/* <Row>
          <Col md={2}> </Col>
          <Col md={8}>
            {" "}
            <img src={Newsimg} style={{ width: "100%" }} />{" "}
          </Col>
          <Col md={2}> </Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={8} id="Newsheadline">
            {" "}
            Sean Levey drug test drama: Jockeys call for review into saliva
            samples after false positive incident
          </Col>
        </Row>

        <Row>
          <Col md={2}></Col>
          <Col md={8} id="Newsdesctiption">
            {" "}
            Sean Levey was stood down from riding at Sandown last week after
            returing a positive sample for banned substance amphetamine; Levey
            cleared to ride after negative urine sample; BHA 'making no further
            comment' on the matter He spent a total of seven days on the
            sidelines before being cleared to return on Wednesday this week
            following a negative urine sample, which Levey claims he had to
            request himself. Speaking to Sky Sports Racing, Levey said: "I
            wasn't given the opportunity to prove myself as innocent. "It's
            given me a great deal of stress and it's tarnished my name because
            assumptions have been made and the financial aspect of it because
            I've missed out on seven days of riding." The BHA has refused to
            comment on the current drug testing system, making a brief statement
            with regards to Levey's situation.
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default News;
