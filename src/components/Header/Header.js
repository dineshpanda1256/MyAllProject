import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "./Header.css";
import { GrTwitter } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import logo from "../../assets/NovaLogo.png";
import ProfileModal from "../ProfileModal/ProfileModal";
import SignupWithOtpModal from "../SignupWithOtpModal/SignupWithOtpModal";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
// for toast start
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// fortoast end
import { AiFillProfile } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  getFirst_name,
  getLast_name,
  getPhone_number,
  gettoken,
  getUser_type,
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
import { MdPhone } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function Header() {
  const [modalShow, setModalShow] = useState(false);
  const [modalSignupShow, setModalSignupShow] = useState(false);

  // fortoast start
  const toastnoti = () => toast("Wow so easy !");
  // fortoast end

  // const auth = useSelector((state) => state.auth);

  const cartItems = useSelector((state) => state.cart);
  const userToken = useSelector(gettoken);
  const userType = useSelector(getUser_type);
  const userFirstName = useSelector(getFirst_name);
  const userLastName = useSelector(getLast_name);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {/* nav bar1 */}
      <Navbar id="header1">
        <Container>
          <Navbar.Brand id="header2">
            Hello, welcome to NOVA Prolabs
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text id="header2">
              <div id="header23">
                <div id="header21">
                  <div id="header22">
                    <MdPhone />
                  </div>
                  <div>
                    <a href="tel:+16783040395" id="header24">
                      +16783040395
                    </a>
                  </div>
                </div>
                <div id="header21">
                  <div id="header22">
                    <BsClockHistory />
                  </div>
                  <div>Mon-Fri (8am - 6pm)</div>
                </div>
                <div id="header21">
                  <div id="header22">
                    <FiMail />
                  </div>
                  <div>
                    <a href="mailto:info@novaprolabs.com" id="header24">
                      info@novaprolabs.com
                    </a>
                  </div>
                </div>

                <a
                  href="https://twitter.com/i/flow/login"
                  target="_blank"
                  id="header10"
                >
                  <GrTwitter id="header4" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  id="header10"
                >
                  <RiInstagramFill id="header4" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  id="header10"
                >
                  <FaFacebook id="header4" />
                </a>
                <Link to="/contact" id="header10">
                  <MdCall />
                </Link>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* navbar1 end */}
      {/* navbar2 */}
      <Navbar>
        <Container fluid id="header5">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-center"
                alt="Nova logo"
                id="header6"
              />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* navbar2 end */}
      {/* navbar 3 */}
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} collapseOnSelect="true">
          <Container fluid>
            <Navbar.Brand>&nbsp;</Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              id="header8"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image src={logo} alt="logo" style={{ height: "2rem" }} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link id="header7" eventKey="1">
                    <Link to="/" id="header9">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link id="header7" eventKey="2">
                    <Link to="/lab" id="header9">
                      Labs
                    </Link>
                  </Nav.Link>
                  <Nav.Link id="header7" eventKey="3">
                    <Link to="/contact" id="header9">
                      Contact us
                    </Link>
                  </Nav.Link>
                  {/* <Nav.Link id="header7">Download Reports</Nav.Link> */}
                  <Nav.Link id="header7" eventKey="4">
                    <Link to="/about" id="header9">
                      About Us
                    </Link>
                  </Nav.Link>
                  <SignupWithOtpModal
                    show={modalSignupShow}
                    onHide={() => setModalSignupShow(false)}
                  />
                  {/* <Nav.Link id="header7">Signin</Nav.Link> */}
                  <ProfileModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  <div id="header12">
                    <Nav.Link id="header11">
                      {userToken && userType && userFirstName ? (
                        <div>
                          {userFirstName}

                          <div className="dropdown-content">
                            <div id="header13"></div>
                            <div id="header14">
                              <div id="header15">
                                {userFirstName + " " + userLastName}
                              </div>
                              {/* <div id="header16">UID: 2432456501</div> */}
                              <Nav.Link
                                style={{
                                  textDecoration: "none",
                                  background: "transparent",
                                  padding: "0px",
                                }}
                                eventKey="7"
                              >
                                <Link
                                  to={"/profile"}
                                  style={{
                                    textDecoration: "none",
                                    background: "transparent",
                                  }}
                                >
                                  <div id="header17">
                                    <AiFillProfile /> My Profile
                                  </div>
                                </Link>
                              </Nav.Link>
                              <div
                                id="header18"
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      "Are You Sure Want To Logout"
                                    )
                                  ) {
                                    // dispatch(clear());

                                    dispatch(setUser_type(""));
                                    dispatch(setFirst_name(""));
                                    dispatch(setLast_name(""));
                                    dispatch(setGender(""));
                                    dispatch(setDob(""));
                                    dispatch(setId(""));
                                    dispatch(setEmail(""));
                                    dispatch(setOrganizationName(""));
                                    dispatch(setPhone_number(""));
                                    dispatch(setToken(""));
                                    navigate("/");
                                    window.location.reload();
                                  }
                                }}
                              >
                                <TbLogout /> Logout
                              </div>
                              <div>
                                <Button id="header19">
                                  Download our Official App
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div onClick={() => setModalSignupShow(true)}>
                          {" "}
                          Log In / Sign Up
                        </div>
                      )}
                    </Nav.Link>
                  </div>
                  <Nav.Link id="header7" eventKey="6">
                    <Link to={"/cart"} id="header9">
                      <div>
                        <IoMdCart
                          style={{ height: "1.5em", width: "1.5em" }}
                          // onClick={toastnoti}
                        />

                        <sup id="header20">{cartItems.length}</sup>
                      </div>
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* navbar 3 end */}

      {/* fortoast start */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* fortoast end */}
    </>
  );
}
