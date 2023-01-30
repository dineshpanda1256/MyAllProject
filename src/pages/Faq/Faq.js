import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Faqcomp from "../../components/Faqcomp/Faqcomp";
import "./Faq.css";
import { apicaller } from "../../utils/api";

function Faq() {
  const [faqData, setfaqData] = useState([]);
  useEffect(() => {
    getFaqData();
  }, []);

  const getFaqData = () => {
    apicaller("get-all-faqs", null, "get", null)
      .then((res) => {
        setfaqData(res.data.faq);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <div>
      <Container style={{minHeight: '50vh'}}>
        <Row id="faq_title">Frequently Asked Questions</Row>
        {faqData?.map((list) => (
          <Faqcomp title={list.question} content={list.answer} />
        ))}
        {/* <Faqcomp
          title="What platform does ACME payment gateway support ?"
          content="No, you dont need to pay instapay, where there is no transcation happening .
        With one of the lowestt transction happening . With one of the lowest transction 
        charges in the industry , pay only when you get paid ! "
        />
        <Faqcomp
          title="Doees ACME provide international payments support"
          content="No, you dont need to pay instapay, where there is no transcation happening .
        With one of the lowestt transction happening . With one of the lowest transction 
        charges in the industry , pay only when you get paid ! "
        /> */}
      </Container>
    </div>
  );
}

export default Faq;
