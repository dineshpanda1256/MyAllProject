import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Homecompfour.css";
import doc from "../../assets/Images/doctorimg.png";
import People from "../../assets/Images/Peoplecard.png";
import { apicaller } from "../../utils/api";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import "react-phone-number-input/style.css";
import PhoneInput, { formatPhoneNumber } from "react-phone-number-input";

function Homecompfour() {
  const [chooseUsData, setChooseUsData] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [reasonForContact, setReasonForContact] = useState("");
  const [loading, setLoading] = useState(false);

  const newContactNumber = contactNumber?.split("").slice(1).join("");

  // toasts
  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
    });
  };
  const sToast = (msg) => {
    toast.success(msg, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const submitFormValidation = () => {
    if (firstName.length < 3) {
      eToast("Enter your first name");
      return false;
    } else if (lastName.length < 3) {
      eToast("Enter your last name");
      return false;
    } else if (formatPhoneNumber(contactNumber)?.length === 0) {
      eToast("Enter your contact number");
      return false;
    } else if (newContactNumber?.length < 11 || newContactNumber?.length > 12) {
      eToast("Enter a valid Phone Number");
      return false;
    } else if (reasonForContact.length < 5) {
      eToast("Enter Reason for contact");
      return false;
    } else {
      return true;
    }
  };

  const submitForm = async () => {
    if (submitFormValidation()) {
      setLoading(true);

      var data = {
        firstname: firstName,
        lastname: lastName,
        phone_number: contactNumber,
        reason: reasonForContact,
      };
      await apicaller("send-your-queries", data, "post", null)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            setLoading(false);
            sToast("Sent Successfully");
            setFirstName("");
            setLastName("");
            setContactNumber("");
            setReasonForContact("");
          }
        })
        // .catch((err) => console.log("err while sending query is ", err));
    }
  };

  useEffect(() => {
    getWhyChooseUsData();
  }, []);

  const getWhyChooseUsData = () => {
    apicaller("get-why-choose-us", null, "get", null)
      .then((res) => {
        setChooseUsData(res.data.WhyChooseUs);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <div>
      <Container fluid className="Homecompfour_bg">
        <Container>
          <Row>
            <Col md={5} xs={12}>
              {" "}
              <img src={doc} style={{ width: "100%" }} />{" "}
            </Col>
            <Col md={7} xs={12}>
              <Row className="Homecompfour_whychoose">WHY CHOOSE US </Row>
              <Row className="Homecompfour_whatmakes">
                What Makes Nova Health <br />
                Services Unique?
              </Row>
              {/* {chooseUsData.map((item) => (
              <Row className="Homecompfour_description">
                <Col md={4} style={{ color: "#1e1e1e" }}>
                  {" "}
                  {item.title}
                </Col>
                <Col md={8}>
                  {" "}
                  {item.description}
                </Col>
              </Row>
              ))} */}

              <Row className="Homecompfour_description">
                <Col md={4} style={{ color: "#1e1e1e" }} id="homecompfour11">
                  {" "}
                  Drug Testing For Health Care Workers
                </Col>
                <Col md={8}>
                  {" "}
                  Health care employers should conduct the standard five-panel
                  test for marijuana, cocaine, PCP, amphetamines and opiate
                  metabolites
                </Col>
              </Row>

              <Row className="Homecompfour_description">
                <Col md={4} style={{ color: "#1e1e1e" } } id="homecompfour11">
                  {" "}
                  Drug Testing For Athletes
                </Col>
                <Col md={8}>
                  {" "}
                  Drug or anti-doping testing is conducted in sports to ensure
                  that athletes are not using performance enhancing drugs (PEDs)
                  to gain an unfair advantage over their competitors.
                </Col>
              </Row>
              <Row className="Homecompfour_description">
                <Col md={4} style={{ color: "#1e1e1e" }} id="homecompfour11">
                  {" "}
                  Drug Testing For Corporate
                </Col>
                <Col md={8}>
                  {" "}
                  Drug testing is an employer's measure to check if their
                  employees are using drugs or not.{" "}
                </Col>
              </Row>
            </Col>
            <Col> </Col>
          </Row>
        </Container>
        <Container className="Homecompfour_formaindiv">
          <Row>
            <Col md={6} xs="">
              <Row id="homecompfour_need">
                {" "}
                NEED SOME ADVICE FROM OUR EXPERTS?
              </Row>
              <Row id="homecompfour_request">
                {" "}
                Request a Call Back <br />
                Today Now!
              </Row>
              <Row id="homecompfour_we">
                We will make a single attempt to contact you from a withheld{" "}
                <br />
                number, usually within 24 hours of your request.
              </Row>
              <Row>
                <Col md={3} id="homecompfour_shorcutimg">
                  {" "}
                  <img src={People} alt="" />
                </Col>
                <Col md={8} id="homecompfour_thequickest">
                  {" "}
                  The quickest way to get in contact is to telephone
                  +16783040395
                </Col>
              </Row>
            </Col>

            <Col md={6} xs="">
              <Row>
                <input
                  type="text"
                  placeholder="Your First Name*"
                  id="Homecompfour_input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Your Last Name*"
                  id="Homecompfour_input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {/* <input
                  type="number"
                  placeholder="Contact number*"
                  id="Homecompfour_input"
                  value={contactNumber}
                  onChange={setContactNumber}
                /> */}
                <div id="Homecompfour_input_contact">
                  <PhoneInput
                    placeholder="Contact number*"
                    id="phoneInpHomeCompFour"
                    defaultCountry="US"
                    value={contactNumber}
                    onChange={setContactNumber}
                  />
                </div>
                {/* <div>{newContactNumber}</div>
                <div>formatPhoneNumber: {formatPhoneNumber(contactNumber)}</div> */}
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Reason for Contact*"
                  id="Homecompfour_input1"
                  value={reasonForContact}
                  onChange={(e) => setReasonForContact(e.target.value)}
                />
              </Row>
              <Row>
                <Col md={12} id="homecompfour_sendbtnrow">
                  <button
                    id="homecompfour_sendusbtn"
                    onClick={() => submitForm()}
                  >
                    {loading ? <Loader /> : "Send"}
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Homecompfour;
