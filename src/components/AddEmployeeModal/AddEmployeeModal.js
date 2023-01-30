import React from "react";
import { useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./AddEmployeeModal.css";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { getId } from "../../Redux/Slice/userSlice";
import Loader from "../Loader/Loader";

function AddEmployeeModal(props) {
  // const [organizationId, setOrganizationId] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const UserId = useSelector(getId);

  const [isLoading, setIsLoading] = useState(false);

  //   regular expressions to show
  var regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  var regNum = /^\d{10}$/;

  // const [errOrganizationId, setErrOrganizationId] = useState(false);
  const [errFullName, setErrFullName] = useState(false);
  const [errGender, setErrGender] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPhoneNum, setErrPhoneNum] = useState(false);
  const [errDob, setErrDob] = useState(false);
  const [errAge, setErrAge] = useState(false);

  const dataAdded = async (e) => {
    // if (organizationId.length > 3) {
    //   setErrOrganizationId(false);
    if (fullName.length > 0) {
      setErrFullName(false);
      if (gender.length > 0) {
        setErrGender(false);
        if (regEmail.test(email)) {
          setErrEmail(false);
          if (regNum.test(phoneNum)) {
            setErrPhoneNum(false);
            if (dob.length > 0) {
              setErrDob(false);

              // post api add employee of organization
              e.preventDefault();
              setIsLoading(true);
              var data = JSON.stringify({
                organization_id: UserId,
                employe_user_name: fullName,
                employe_user_gender: gender,
                employe_user_email: email,
                employe_user_phone: phoneNum,
                employe_user_dob: dob,
                age: age,
              });
              // console.log("Data is", data);
              // alert(JSON.stringify(data));
              const res = await apicaller(
                "employe-organization",
                data,
                "POST",
                null
              );
              if (res.status === 201 || res.status === 200) {
                setIsLoading(false);
                window.location.reload();
                //   setOrganizationId("");
                setFullName("");
                setEmail("");
                setPhoneNum("");
                setDob("");
                setAge("");
              }
            } else {
              setErrDob(true);
            }
          } else {
            setErrPhoneNum(true);
          }
        } else {
          setErrEmail(true);
        }
      } else {
        setErrGender(true);
      }
    } else {
      setErrFullName(true);
    }
    // } else {
    //   setErrOrganizationId(true);
    // }
  };

  // to calculate age of user
  const calculateAge = () => {
    let newDate = new Date();
    let DOB = new Date(dob);
    let newMonth = newDate.getMonth();
    let DOBmonth = DOB.getMonth();
    let nowDate = newDate.getDate();
    let DOBdate = DOB.getDate();
    let newAge = newDate.getFullYear() - DOB.getFullYear();
    // console.log(newAge);
    if (DOBmonth > newMonth || DOBdate > nowDate) {
      newAge--;
    }
    setAge(newAge);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* <Form.Group className="mb-3" controlId="formGroupEmail"> */}
          {/* <Form.Label id="addEmployeeLabel">Organisation Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Organization Id"
            id="addEmployeeInputFields"
            value={organizationId}
            onChange={(e) => setOrganizationId(e.target.value)}
          /> */}
          {/* to show error */}
          {/* {errOrganizationId && (
            <div style={{ fontSize: "0.8rem", color: "red" }}>
              Enter Organization Id
            </div>
          )} */}

          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label id="addEmployeeLabel">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  id="addEmployeeInputFields"
                  placeholder="Enter Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {/* to show error */}
                {errFullName && (
                  <div style={{ fontSize: "0.8rem", color: "red" }}>
                    Enter a valid name
                  </div>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label id="sfm6">Gender</Form.Label>
                <Row>
                  <Col md={3} xs={3} onClick={() => setGender("Male")}>
                    <div
                      id="genderAddEmployeeModal"
                      style={
                        gender === "Male"
                          ? { backgroundColor: "green", color: "#fff" }
                          : { backgroundColor: " ", color: " " }
                      }
                    >
                      Male
                    </div>
                  </Col>
                  <Col md={3} xs={3} id="" onClick={() => setGender("Female")}>
                    <div
                      id="genderAddEmployeeModal"
                      style={
                        gender === "Female"
                          ? { backgroundColor: "green", color: "#fff" }
                          : { backgroundColor: " ", color: " " }
                      }
                    >
                      Female
                    </div>
                  </Col>
                  <Col md={3} xs={3} id="" onClick={() => setGender("Other")}>
                    <div
                      id="genderAddEmployeeModal"
                      style={
                        gender === "Other"
                          ? { backgroundColor: "green", color: "#fff" }
                          : { backgroundColor: " ", color: " " }
                      }
                    >
                      Other
                    </div>
                  </Col>
                </Row>

                {/* to show error */}
                {errGender && (
                  <div style={{ fontSize: "0.8rem", color: "red" }}>
                    Select your gender
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Label id="addEmployeeLabel">Email</Form.Label>
              <Form.Control
                type="text"
                id="addEmployeeInputFields"
                placeholder="Enter Your Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* to show error */}
              {errEmail && (
                <div style={{ fontSize: "0.8rem", color: "red" }}>
                  Enter a valid mail id
                </div>
              )}
            </Col>
            <Col md={6}>
              <Form.Label id="addEmployeeLabel">Phone Number</Form.Label>
              <Form.Control
                type="text"
                id="addEmployeeInputFields"
                placeholder="Enter Your Phone Number"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
              {/* to show error */}
              {errPhoneNum && (
                <div style={{ fontSize: "0.8rem", color: "red" }}>
                  Enter phone number
                </div>
              )}
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Label id="addEmployeeLabel">DOB</Form.Label>
              <Form.Control
                id="addEmployeeInputFields"
                type="date"
                placeholder="DD/MM/YYYY"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                  calculateAge();
                }}
              />
              {/* to show error */}
              {errDob && (
                <div style={{ fontSize: "0.8rem", color: "red" }}>
                  Enter your Date of Birth
                </div>
              )}
            </Col>
            <Col md={6}>
              <Form.Label id="addEmployeeLabel">Age (in years)</Form.Label>
              {/* <div id="addEmployeeAgeField" onClick={() => calculateAge()}>
                {age}
              </div> */}
              <Form.Control
                id="addEmployeeInputFields"
                // type="date"
                placeholder="Age"
                value={age}
                disabled
                // onChange={(e) => setDob(e.target.value)}
              />
            </Col>
          </Row>
          {/* </Form.Group> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={dataAdded} id="up4" style={{ width: "15%" }}>
          {isLoading ? <Loader /> : "Add"}
        </Button>
        <Button onClick={props.onHide} id="up4">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddEmployeeModal;
