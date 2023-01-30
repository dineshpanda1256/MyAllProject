import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aboutuscomp from "../../components/Aboutuscomp/Aboutuscomp";
import Footer from "../../components/Footer/Footer";
import { SiMicrostrategy } from "react-icons/si";
import { VscOutput } from "react-icons/vsc";
import { GrUserExpert } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import "./Aboutus.css";
import { apicaller } from "../../utils/api";
import Loader from "../../components/Loader/Loader";

function Aboutus() {
  const [getAboutUsData, setGetAboutUsData] = useState([]);
  const [getAboutPara, setGetAboutPara] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAboutUsFunc();
  }, []);

  const getAboutUsFunc = () => {
    apicaller("get-about-us", null, "get", null)
      .then((res) => {
        setGetAboutUsData(res.data.about);
      })
      .catch((e) => {
        // console.log(e);
      });
      apicaller("get-AboutParagraph", null, "get", null)
      .then((res) => {
        setGetAboutPara(res.data);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(()=>{
        setLoading(false)
      })
  };

 

  return (
    <div  id="aboutusparentdiv">
       {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "centre",
            marginTop: 210,
            marginBottom: 210,
          }}
        >
          <Loader />
        </div>
      ) : (
        <Container fluid>
      <Container>
       
        
          {getAboutUsData?.map((item, i) => (
             <Row id="aboutus1">
            <Col md={1}> </Col>
            <Col md={10} lg={10} xs={12} sm={12} key={i}>
              <Aboutuscomp
                icon={<SiMicrostrategy />}
                title={item.title}
                text={item.description}
              />
            </Col>
            <Col md={1}> </Col>
        </Row>
          ))}

        {/* <Row>
          <Col md={3} xs={12}>
            {" "}
            <Aboutuscomp
              icon={<RiPagesLine />}
              Title="LAB"
              Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of "
            />{" "}
          </Col>
          <Col md={3} xs={12}>
            {" "}
            <Aboutuscomp
              icon={<MdPayment />}
              Title="REPORTS"
              Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of "
            />{" "}
          </Col>
          <Col md={3} xs={12}>
            {" "}
            <Aboutuscomp
              icon={<GrUserExpert />}
              Title="PAYMENT"
              Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of "
            />{" "}
          </Col>
          <Col md={3} xs={12}>
            {" "}
            <Aboutuscomp
              icon={<FaRegLightbulb />}
              Title="BOOKING"
              Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of "
            />{" "}
          </Col>
        </Row> */}
      </Container>
       </Container>)}
      
    </div>
  );
}

export default Aboutus;
