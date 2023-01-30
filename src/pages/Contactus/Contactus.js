import React, { useState } from "react";
import "./Contactus.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { apicaller } from "../../utils/api";
import { toast } from "react-toastify";
import "react-phone-number-input/style.css";
import PhoneInput, {formatPhoneNumber} from "react-phone-number-input";
import Loader from "../../components/Loader/Loader";

export default function Contactus() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [feedback, setFeedback] = useState("");

  const [loading, setLoading] = useState(false);

  const newMobileNum = mobile?.split("").slice(1).join("");

  const FormatMobilenum = formatPhoneNumber(mobile);

  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const sToast = (msg) => {
    toast.success(msg, {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const validation = () => {
    if (firstName.length === 0) {
      eToast("First Name Is Required");
      return false;
    } else if (lastName.length === 0) {
      eToast("Last Name Is Required");
      return false;
    } else if (email.length === 0) {
      eToast("Enter Your Email");
      return false;
    } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      eToast("Enter A Valid Email");
      return false;
    } else if (FormatMobilenum?.length <= 3) {
      eToast("Enter Your Mobile Number");
      return false;
    } else if (newMobileNum?.length < 11 || newMobileNum?.length > 12) {
      eToast("Enter a valid Mobile Number");
      return false;
    } else if (feedback.length <= 5) {
      eToast("Enter Feedback");
      return false;
    } else {
      return true;
    }
  };
  const contactUs = async (e) => {
    e.preventDefault();
    if (validation()) {
      setLoading(true);
      var data = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        phone_number: mobile,
        reason: feedback,
      };
      // console.log("Data is", data);
      const res = await apicaller("send-your-queries", data, "POST", null);
      if (res.status === 201 || res.status === 200) {
        setLoading(false);
        sToast("Query Sent Successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMobile("");
        setFeedback("");
      }
    }
  };

  return (
    <>
      <Container>
        <Row id="contact1">
          <Col></Col>
          <Col xs={12} md={8} id="contact2">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label id="contact4">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    id="contact3"
                    value={firstName}
                    onChange={(e) => setFirstName(e?.target?.value)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label id="contact4">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    id="contact3"
                    value={lastName}
                    onChange={(e) => setLastName(e?.target?.value)}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label id="contact4">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  id="contact3"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label id="contact4">Phone</Form.Label>
                <div id="phoneInputContactUsDiv">
                  <PhoneInput
                  
                    id="phoneInputContactUs"
                    placeholder="Enter phone number"
                    defaultCountry="US"
                    value={mobile}
                    onChange={setMobile}
                  />
                </div>
                {/* <div>{mobile?.split("").slice(1).join("")}</div>
                <div>FormatMobilenum: {FormatMobilenum}</div> */}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label id="contact4">Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="contact3"
                  value={feedback}
                  onChange={(e) => setFeedback(e?.target?.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                id="contact5"
                onClick={contactUs}
              >
                {loading ? <Loader /> : "SEND"}
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
