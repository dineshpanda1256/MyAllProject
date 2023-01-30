import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, Modal, Row, Spinner } from "react-bootstrap";
import {
  BsArrowRightCircleFill,
  BsPencil,
  BsPencilSquare,
} from "react-icons/bs";
import "./SignupWithOtpModal.css";
import logo from "../../assets/NovaLogo.png";
import OtpModal from "../OtpModal/OtpModal";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions/authActions";
import { apicaller } from "../../utils/api";
import Loader from "../Loader/Loader";
import { signUp } from "../../Redux/Actions";
import { Navigate, useNavigate } from "react-router-dom";
import { SignInUser } from "../../Redux/Slice/authSlice";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { toast } from "react-toastify";

import {
  clear,
  gettoken,
  setDob,
  setEmail,
  setFirst_name,
  setGender,
  setId,
  setLast_name,
  setOrganizationName,
  setPhone_number,
  setToken,
  setUser_type,
} from "../../Redux/Slice/userSlice";
import PhoneInput, { formatPhoneNumber } from "react-phone-number-input";

export default function SignupWithOtpModal(props) {
  const [otpShow, setOtpShow] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [user_idFromLC, setUser_IdFromLc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [firstNameUser, setFirstNameUser] = useState("");
  const [lastNameUser, setLastNameUser] = useState("");
  const [dobUser, setDobUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [genderUser, setGenderUser] = useState("Male");
  const [nameOrganization, setNameOrganization] = useState("");
  const [regNumOrganization, setRegNumOrganization] = useState("");
  const [regDateOrganization, setRegDateOrganization] = useState("");
  const [addressOrganization, setAddressOrganization] = useState("");
  const [emailOrganization, setEmailOrganization] = useState("");

  const [resendOtp, setResendOtp] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [counter, setCounter] = useState(60);
  const [isResendBtnLoading, setIsResendBtnLoading] = useState(false);

  // to set errors while validation
  const [errFirstNameUser, setErrFirstNameUser] = useState(false);
  const [errLastNameUser, setErrLastNameUser] = useState(false);
  const [errDobUser, setErrDobUser] = useState(false);
  const [errEmailUser, setErrEmailUser] = useState(false);
  const [errGenderUser, setErrGenderUser] = useState(false);
  const [errNameOrganization, setErrNameOrganization] = useState(false);
  const [errRegNumOrganization, setErrRegNumOrganization] = useState(false);
  const [errRegDateOrganization, setErrRegDateOrganization] = useState(false);
  const [errAddressOrganization, setErrAddressOrganization] = useState(false);
  const [errEmailOrganization, setErrEmailOrganization] = useState(false);

  // to show toast msg
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

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const countDown = () => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = useSelector(gettoken);

  const newUserName = userName?.split("").slice(1).join("");

  const formatusername = formatPhoneNumber(userName);

  // const auth = useSelector((state) => state.auth);
  // const userRegistration = useSelector((state) => state.userRegistration);

  const userLogIn = async (e) => {
    if (password === "") {
      eToast("Please Enter Your OTP");
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      e.preventDefault();

      const user = {
        _id: userId,
        otp: password,
      };

      // dispatch(SignInUser(user));
      await apicaller("otp", user, "POST", null)
        .then((res) => {
          dispatch(setToken(res.data.token));
          if (res.data._id) {
            dispatch(setId(res.data._id));
            setShowSignUpForm(true);
          } else if (res.data.user) {
            dispatch(setUser_type(res.data.user.user_type));
            dispatch(setFirst_name(res.data.user.first_name));
            dispatch(setLast_name(res.data.user.last_name));
            dispatch(setGender(res.data.user.gender));
            dispatch(setDob(res.data.user.dob));
            dispatch(setId(res.data.user._id));
            dispatch(setEmail(res.data.user.email));
            dispatch(setOrganizationName(res.data.user.organization_name));
            dispatch(setPhone_number(res.data.user.phone_number));
            props.onHide();
            sToast("Welcome Again");
          }
        })
        .catch((e) => {
          eToast("OTP Does Not Match");
        });
    }
  };

  // console.log("Auth.user is in modal screen is ", auth.user);
  // console.log("SignUp State is in modal screen is ", userRegistration);

  const sendOtp = () => {
    if (formatusername?.length === 0) {
      eToast("Please Enter Your Mobile Number");
      return false;
    } else if (newUserName?.length < 11 || newUserName?.length > 12) {
      eToast("Please Enter A Valid Mobile Number");
    } else {
      setIsLoading(true);
      const data = { phone_number: newUserName };
      apicaller("login", data, "post", null)
        .then((res) => {
          // console.log("uid is", res.data);
          if (res.status === 201 || res.status === 200) {
            // dispatch(setPhone_number())
            setOtpShow(true);
            setUserId(res.data._id || res.data.user._id);
            setIsLoading(false);
            setStartTimer(true);
            countDown();
            setTimeout(() => {
              setResendOtp(true);
            }, 60000);
          }
        })
        .catch((e) => {
          eToast(e.response.data.error);

          setIsLoading(false);
        });
    }
  };

  const resendOtpFn = () => {
    setIsResendBtnLoading(true);
    const data = {
      _id: userId,
    };
    apicaller("resend-otp", data, "post", null)
      .then((res) => {
        // console.log("adilllll", res);
        sToast("OTP Resent Success");
      })
      .catch((e) => {
        // console.log("errrrrr", e);
        eToast("Something went wrong, please try again later");
      })
      .finally(() => {
        setIsResendBtnLoading(false);
      });
  };

  const cancelLogIn = () => {
    if (window.confirm("Are you sure want to cancel")) {
      setUserId("");
      props.onHide();
    }
  };

  const userSignUp = async () => {
    if (firstNameUser === "") {
      eToast("Please Enter First Name");
    } else if (lastNameUser === "") {
      eToast("Please Enter Last Name");
    } else if (emailUser === "") {
      eToast("Please Enter Your Email");
    } else {
      setIsLoading(true);
      const signUpForm = {
        first_name: firstNameUser,
        last_name: lastNameUser,
        dob: dobUser,
        email: emailUser,
        gender: genderUser,
        user_type: toggle ? "organization" : "customer",
        organization_name: toggle ? nameOrganization : null,
        // organization_reg_num: toggle ? regNumOrganization : null,
        // organization_reg_date: toggle ? regDateOrganization : null,
        // organization_address: toggle ? addressOrganization : null,
        // organization_email: toggle ? emailOrganization : null,
      };

      // dispatch(signUp(userToken, signUpForm));

      await apicaller("signup", signUpForm, "put", userToken)
        .then((res) => {
          // console.log("SignUp Res is", res);
          dispatch(setUser_type(res.data.user_data.user_type));
          dispatch(setFirst_name(res.data.user_data.first_name));
          dispatch(setEmail(res.data.user_data.email));
          dispatch(setLast_name(res.data.user_data.last_name));
          dispatch(setGender(res.data.user_data.gender));
          dispatch(setId(res.data.user_data._id));
          dispatch(setDob(res.data.user_data.dob));

          dispatch(setPhone_number(res.data.user_data.phone_number));
          dispatch(setOrganizationName(res.data.user_data.organization_name));
          props.onHide();
          sToast("Welcome To Nova");
        })
        .catch((err) => {
          eToast(err.response.data.err);
          // console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const cancelSignUp = () => {
    if (window.confirm("Are You Sure Want To Cancel This Process")) {
      dispatch(clear());
      window.location.reload();
    }
  };

  const changeMobileNumber = () => {
    setOtpShow(false);
    setUserId("");
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          closeButton={showSignUpForm || otpShow ? false : true}
          id="swom1"
        >
          {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {otpShow && !showSignUpForm && (
            <div>
              <div id="otp3">Nice</div>
              <div style={{ flexDirection: "row", display: "flex" }}>
                <div id="otp4">
                  OTP Sent To{" "}
                  <span
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      borderRadius: 5,
                      padding: 5,
                    }}
                  >
                    {userName}
                  </span>{" "}
                </div>
                <div style={{ marginLeft: 5 }}>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={changeMobileNumber}
                  >
                    <BsPencil color="white" size={20} />
                  </Button>
                </div>
              </div>

              <Row>
                <Col>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        id="otp9"
                        placeholder="XXXX"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        maxLength={4}
                      />
                    </Form.Group>
                  </Form>
                </Col>
                <Col id="otp6">
                  {isLoading && <Loader />}
                  {!isLoading && (
                    <BsArrowRightCircleFill id="otp5" onClick={userLogIn} />
                  )}
                  {/* <SignupFormModal
                    show={signupForm}
                    onHide={() => setSignupForm(false)}
                  /> */}
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button
                    variant="info"
                    disabled={resendOtp ? false : true}
                    onClick={resendOtpFn}
                  >
                    {isResendBtnLoading && <Spinner size="sm" />}
                    Resend OTP
                  </Button>
                </Col>
                <Col>
                  <Button variant="danger" onClick={cancelLogIn}>
                    Cancel
                  </Button>
                </Col>

                <Col></Col>
              </Row>
              {/* <Row>
                <Col>
                  <div id="otp7"></div>
                </Col>
                <Col></Col>
              </Row> */}
              {/* <div id="otp8">Resend OTP</div> */}
            </div>
          )}
          {!otpShow && !showSignUpForm && (
            <div>
              <div id="sowm3">Hi</div>
              <div id="swom4">Please enter your mobile number to login</div>
              <Row>
                <Col>
                  <Form>
                    <Form.Group className="mb-3">
                      <div id="swom5">
                        <PhoneInput
                          placeholder="Enter your mobile number"
                          id="mobileNumInpField"
                          value={userName}
                          onChange={setUserName}
                        />
                      </div>
                      {/* <div>{newUserName}</div>
                      <div>FormatMobilenumber: {formatusername}</div> */}
                    </Form.Group>
                  </Form>
                </Col>
                <Col id="swom9">
                  {isLoading && <Loader />}
                  {!isLoading && (
                    <BsArrowRightCircleFill
                      onClick={sendOtp}
                      style={{
                        height: "2em",
                        width: "2em",
                        color: "green",
                      }}
                    />
                  )}

                  {/* <OtpModal show={otpShow} onHide={() => setOtpShow(false)} /> */}
                </Col>
              </Row>
              {/* <Row>
                <Col>
                  <div id="swom7"></div>
                </Col>
                <Col></Col>
              </Row> */}
              <div id="swom8">
                OTP will be sent to{" "}
                <span
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: 5,
                    padding: newUserName?.length > 0 ? 5 : 0,
                  }}
                >
                  {userName}
                </span>{" "}
                by SMS
              </div>
              {/* <Form>
                {["checkbox"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`check-api-${type}`}
                      style={{ borderColor: "#394E76" }}
                    >
                      <Form.Check.Input
                        type={type}
                        isValid
                        style={{ backgroundColor: "#394E76" }}
                      />
                      <Form.Check.Label
                        style={{ color: "#394E76" }}
                      >{`By signin up , I agree to the Privacy policy , terms & condition of
 ${type}`}</Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
              </Form> */}
            </div>
          )}

          {showSignUpForm && (
            <>
              <div>
                <Row style={{ textAlign: "center" }}>
                  <Col id="switch1">
                    <BootstrapSwitchButton
                      onstyle="success"
                      offstyle="success"
                      width={130}
                      onlabel="Organization"
                      offlabel="User"
                      onChange={toggler}
                    />
                  </Col>
                </Row>

                {toggle ? (
                  <>
                    <div id="sfm3">Welcome to NOVA Prolabs</div>
                    <div id="sfm4">
                      Enter your details. Let us quickly get to know you so that
                      we can get you the best help 🙂
                    </div>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label id="sfm6">Full Name</Form.Label>
                        <Row>
                          <Col>
                            <Form.Control
                              type="text"
                              placeholder="First Name"
                              id="sfm5"
                              value={firstNameUser}
                              onChange={(e) => setFirstNameUser(e.target.value)}
                            />
                            {/* to show error */}
                            {errFirstNameUser && (
                              <div style={{ fontSize: "0.8rem", color: "red" }}>
                                Enter first name
                              </div>
                            )}
                          </Col>
                          <Col>
                            <Form.Control
                              type="text"
                              placeholder="Last Name"
                              id="sfm5"
                              value={lastNameUser}
                              onChange={(e) => setLastNameUser(e.target.value)}
                            />
                            {/* to show error */}
                            {errLastNameUser && (
                              <div style={{ fontSize: "0.8rem", color: "red" }}>
                                Enter last name
                              </div>
                            )}
                          </Col>
                        </Row>

                        <Form.Label id="sfm6">Organization Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Organization Name"
                          id="sfm5"
                          value={nameOrganization}
                          onChange={(e) => setNameOrganization(e.target.value)}
                        />
                        {/* to show error */}
                        {errNameOrganization && (
                          <div style={{ fontSize: "0.8rem", color: "red" }}>
                            Enter a valid name
                          </div>
                        )}

                        {/* <Form.Label id="sfm6">
                          Organization Registration number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Registration number"
                          id="sfm5"
                          value={regNumOrganization}
                          onChange={(e) =>
                            setRegNumOrganization(e.target.value)
                          }
                        /> */}
                        {/* to show error */}
                        {errRegNumOrganization && (
                          <div style={{ fontSize: "0.8rem", color: "red" }}>
                            Enter a valid name
                          </div>
                        )}

                        {/* <Form.Label id="sfm6">Registration Date</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="DD/MM/YYYY"
                          id="sfm5"
                          value={regDateOrganization}
                          onChange={(e) =>
                            setRegDateOrganization(e.target.value)
                          }
                        /> */}
                        {/* to show error */}
                        {errRegDateOrganization && (
                          <div style={{ fontSize: "0.8rem", color: "red" }}>
                            Enter a valid date
                          </div>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-3">
                        {/* <Form.Label id="sfm6">Enter Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Address"
                          rows={3}
                          id="sfm5"
                          value={addressOrganization}
                          onChange={(e) =>
                            setAddressOrganization(e.target.value)
                          }
                        /> */}
                        {/* to show error */}
                        {errAddressOrganization && (
                          <div style={{ fontSize: "0.8rem", color: "red" }}>
                            Enter a valid address
                          </div>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label id="sfm6">Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="example@example.com"
                          id="sfm5"
                          value={emailUser}
                          onChange={(e) => setEmailUser(e.target.value)}
                        />
                        {/* to show error */}
                        {errEmailOrganization && (
                          <div style={{ fontSize: "0.8rem", color: "red" }}>
                            Enter a valid email
                          </div>
                        )}
                      </Form.Group>
                    </Form>
                  </>
                ) : (
                  <>
                    <div id="sfm3">Welcome to NOVA Prolabs</div>
                    <div id="sfm4">
                      Enter your details. Let us quickly get to know you so that
                      we can get you the best help 🙂
                    </div>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label id="sfm6">Full Name</Form.Label>
                        <Row>
                          <Col>
                            <Form.Control
                              type="text"
                              placeholder="First Name"
                              id="sfm5"
                              value={firstNameUser}
                              onChange={(e) => setFirstNameUser(e.target.value)}
                            />
                            {/* to show error */}
                            {errFirstNameUser && (
                              <div style={{ fontSize: "0.8rem", color: "red" }}>
                                Enter first name
                              </div>
                            )}
                          </Col>
                          <Col>
                            <Form.Control
                              type="text"
                              placeholder="Last Name"
                              id="sfm5"
                              value={lastNameUser}
                              onChange={(e) => setLastNameUser(e.target.value)}
                            />
                            {/* to show error */}
                            {errLastNameUser && (
                              <div style={{ fontSize: "0.8rem", color: "red" }}>
                                Enter last name
                              </div>
                            )}
                          </Col>
                        </Row>

                        <Form.Label id="sfm6">Date of Birth</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="DD/MM/YYYY"
                          id="sfm5"
                          value={dobUser}
                          onChange={(e) => setDobUser(e.target.value)}
                        />
                        {/* to show error */}
                        {errDobUser && (
                          <div style={{ fontSize: "0.8rem", color: "red" }}>
                            Enter your DOB
                          </div>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label id="sfm6">Gender</Form.Label>
                        <Row>
                          <Col
                            md={3}
                            xs={4}
                            onClick={() => setGenderUser("Male")}
                          >
                            <div
                              id="genderId"
                              style={
                                genderUser === "Male"
                                  ? { backgroundColor: "green", color: "#fff" }
                                  : { backgroundColor: " ", color: " " }
                              }
                            >
                              Male
                            </div>
                          </Col>
                          <Col
                            md={3}
                            xs={4}
                            id=""
                            onClick={() => setGenderUser("Female")}
                          >
                            <div
                              id="genderId"
                              style={
                                genderUser === "Female"
                                  ? { backgroundColor: "green", color: "#fff" }
                                  : { backgroundColor: " ", color: " " }
                              }
                            >
                              Female
                            </div>
                          </Col>
                          <Col
                            md={3}
                            xs={4}
                            id=""
                            onClick={() => setGenderUser("Other")}
                          >
                            <div
                              id="genderId"
                              style={
                                genderUser === "Other"
                                  ? { backgroundColor: "green", color: "#fff" }
                                  : { backgroundColor: " ", color: " " }
                              }
                            >
                              Other
                            </div>
                          </Col>
                        </Row>
                      </Form.Group>

                      {/* <div  style={ 
                              genderUser === "Male" ?  {
                                fontSize: "1rem",
                                border: "2px solid green",
                                textAlign: "center",
                                borderRadius: "0.5rem",
                                paddingTop: "0.5rem",
                                paddingBottom: "0.5rem",
                                marginRight: "1rem",
                                cursor: "pointer",
                                backgroundColor:'green',color:'white'
                              }  : {fontSize: "1rem",
                              border: "2px solid green",
                              textAlign: "center",
                              borderRadius: "0.5rem",
                              paddingTop: "0.5rem",
                              paddingBottom: "0.5rem",
                              marginRight: "1rem",
                              cursor: "pointer",
                              backgroundColor:'white',color:'black'}
                            } >Male</div> */}

                      <div id="otp6">dinesh</div>
                      {/* <Form.Select
                        aria-label="Default select example"
                        id="sfm5"
                        value={genderUser}
                        onChange={(e) => setGenderUser(e.target.value)}
                      >
                        <option>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Form.Select> */}

                      {/* {["radio"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            inline
                            label="Male"
                            name="gender"
                            type={type}
                            id={`inline-${type}-1`}
                            value="Male"
                            Checked={genderUser === "Male"}
                            onChange={() => setGenderUser("Male")}
                          />
                          <Form.Check
                            inline
                            label="Female"
                            name="gender"
                            type={type}
                            id={`inline-${type}-2`}
                            value="Female"
                            Checked={genderUser === "Female"}
                            onChange={() => setGenderUser("Female")}
                          />
                          <Form.Check
                            inline
                            label="Other"
                            name="gender"
                            type={type}
                            id={`inline-${type}-3`}
                            Checked={genderUser === "Others"}
                            value="Others"
                            onChange={() => setGenderUser("Others")}
                          />
                        </div>
                      ))} */}
                      {/* to show error */}
                      {errGenderUser && (
                        <div style={{ fontSize: "0.8rem", color: "red" }}>
                          Select gender
                        </div>
                      )}

                      <Form.Group className="mb-3">
                        <Form.Label id="sfm6">Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="example@example.com"
                          id="sfm5"
                          value={emailUser}
                          onChange={(e) => setEmailUser(e.target.value)}
                        />
                        {/* to show error */}
                        {errEmailUser && (
                          <div style={{ fontSize: "0.8rem", color: "red" }}>
                            Enter a valid email
                          </div>
                        )}
                      </Form.Group>
                    </Form>
                  </>
                )}
              </div>
              <div id="sfm2">
                <Button id="sfm7" onClick={userSignUp}>
                  {isLoading ? <Loader /> : "Submit"}
                </Button>

                <Button
                  onClick={cancelSignUp}
                  variant="danger"
                  style={{ marginLeft: 10 }}
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer id="swom2">
          <Image src={logo} alt="img" style={{ height: "3rem" }} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
