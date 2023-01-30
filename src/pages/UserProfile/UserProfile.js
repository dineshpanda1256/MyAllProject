import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import emoji from "../../assets/emogi.jpeg";
import "./UserProfile.css";
import { BsArrowRight } from "react-icons/bs";
import EditProfileModal from "../../components/EditProfileModal/EditProfileModal";
import { useDispatch, useSelector } from "react-redux";
import {
  getDob,
  getEmail,
  getFirst_name,
  getGender,
  getId,
  getLast_name,
  getOrganizationName,
  getPhone_number,
  gettoken,
  getUser_type,
  setDob,
  setEmail,
  setFirst_name,
  setGender,
  setLast_name,
  setOrganizationName,
} from "../../Redux/Slice/userSlice";
import { API, apicaller } from "../../utils/api";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import AddEmployeeModal from "../../components/AddEmployeeModal/AddEmployeeModal";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import { MdModeEdit } from "react-icons/md";

export default function UserProfile() {
  const [modalShow, setModalShow] = React.useState(false);
  const [editProfile, setEditProfile] = useState(false);
  // const handleClose = () => setModalShow(false);
  // const handleShow = () => setModalShow(true);

  // delete datas modal
  const [showDeleteIconModal, setShowDeleteIconModal] = useState(false);
  // const closeDeleteModal = () => setShowDeleteIconModal(false);
  // const openDeleteModal = () => setShowDeleteIconModal(true);

  // add employee modal
  const [addEmployeeModal, setAddEmployeeModal] = useState(false);

  const [orderHistory, setOrderHistory] = useState([]);

  const [employeOrganization, setEmployeeOrganization] = useState([]);

  const userMobileNumber = useSelector(getPhone_number);
  const userFirstName = useSelector(getFirst_name);
  const userLastName = useSelector(getLast_name);
  const UserId = useSelector(getId);
  const userEmail = useSelector(getEmail);
  const userDob = useSelector(getDob);
  const userType = useSelector(getUser_type);
  const userGender = useSelector(getGender);
  const organizationName = useSelector(getOrganizationName);

  const navigate = useNavigate();

  useEffect(() => {
    if (!UserId) navigate("/");
  }, []);

  // to get employee datas
  useEffect(() => {
    getOrderHistory();
    employeeOrganization();
  }, []);

  const employeeOrganization = () => {
    apicaller(`employe-organization/${UserId}`, null, "get", null)
      .then((res) => setEmployeeOrganization(res.data))
      // .catch((error) => console.log(error));
  };

  const getOrderHistory = () => {
    apicaller("order-history/" + UserId, null, "get", null)
      .then((res) => setOrderHistory(res.data))
      // .catch((error) => console.log(error));
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Are You Sure Want To Delete")) {
      var axios = require("axios");

      var config = {
        method: "delete",
        url: API + `employe-organization/${id}`,
        headers: {},
      };

      axios(config)
        .then(function (response) {
          employeeOrganization();
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={2} md={2} id="up5">
            <Image src={emoji} alt="image" id="up1" />
          </Col>
          <Col xs={8} md={8} id="up5">
            <div id="up2">Hi, {userFirstName + " " + userLastName}</div>
            <div id="up3">
              Always caring about your health, we are here to help you!
            </div>
          </Col>
          <Col xs={2} md={2} id="up5">
            {/* <Button id="up4" onClick={() => setModalShow(true)}>
              Edit
            </Button> */}
            <EditProfileModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "1rem" }}>
          <Col xs={2} md={2}></Col>
          <Col xs={8} md={8}>
            <Link to={"/lab"}>
              <Button id="up4">
                Book a Lab Test{" "}
                <BsArrowRight
                  style={{
                    marginLeft: "2rem",
                    height: "1.5em",
                    width: "1.5em",
                  }}
                />
              </Button>
            </Link>
          </Col>
          <Col xs={2} md={2}></Col>
        </Row>
        <Row style={{ marginTop: "2rem" }}>
          <Col xs={11} md={6} lg={5}>
            <div id="up6">
              <div>Personal Details </div>
              <div id="up12" onClick={() => setEditProfile(true)}>
                <MdModeEdit id="up13" />
              </div>
              <EditUserProfile
                show={editProfile}
                onHide={() => setEditProfile(false)}
              />
            </div>
            <div id="up7">Name : {userFirstName + " " + userLastName}</div>
            {/* <div id="up7">UID : {UserId} </div> */}
            {userType === "customer" && (
              <>
                <div id="up7">Gender : {userGender} </div>
                <div id="up7">
                  DOB : {new Date(userDob).getDate()}/
                  {new Date(userDob).getMonth() + 1}/
                  {new Date(userDob).getFullYear()}
                </div>
              </>
            )}
            <div id="up7">Contact no : +{userMobileNumber} </div>
            <div id="up7">Email Id : {userEmail} </div>
            {userType === "organization" && (
              <div id="up7">Organization Name : {organizationName} </div>
            )}
          </Col>
        </Row>
      </Container>

      {/* Table  */}
      {userType === "organization" && (
        <Container id="upprofile_tablemain">
          <Table
            striped
            bordered
            hover
            style={{ marginTop: "2rem", border: "0px" }}
          >
            <thead id="upprofile_thead">
              <tr style={{ border: "none" }}>
                {/* <th style={{ border: "none" }}>Sl.</th> */}
                <th>#</th>
                <th>Employee Id</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Age</th>
                {/* <th> </th> */}
                <th>
                  <Button
                    variant="dark"
                    id="up4"
                    onClick={() => setAddEmployeeModal(!addEmployeeModal)}
                  >
                    Add Employee
                  </Button>{" "}
                </th>
                {/* show add employee modal after clicking Add Employee button */}
                <AddEmployeeModal
                  show={addEmployeeModal}
                  onHide={() => setAddEmployeeModal(!addEmployeeModal)}
                />
              </tr>
            </thead>
            <tbody>
              {employeOrganization &&
                employeOrganization.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item._id}</td>
                    <td>
                      <div id="upprofile_name"> {item.employe_user_name}</div>
                    </td>
                    <td>{item.employe_user_email}</td>
                    {/* <td>
                    {" "}
                    <div id="upprofile_send"> Details</div>
                  </td> */}
                    {/* <td></td> */}
                    <td>{item.employe_user_phone}</td>
                    <td>
                      {new Date(item.employe_user_dob).toLocaleDateString()}
                    </td>
                    <td>{item.employe_user_gender}</td>
                    <td>{item.age}</td>
                    <td style={{ textAlign: "center" }}>
                      <MdDelete
                        style={{ color: "red", fontSize: "1rem" }}
                        onClick={() => deleteEmployee(item._id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      )}

      {/* Table  */}
      <Container id="upprofile_tablemain">
        <Table
          striped
          bordered
          hover
          style={{ marginTop: "2rem", border: "0px" }}
        >
          <thead id="upprofile_thead">
            <tr style={{ border: "none" }}>
              {/* <th style={{ border: "none" }}>Sl.</th> */}
              <th>#</th>
              <th>Order Id</th>
              <th>Booked For</th>
              <th>Ptholab Name</th>
              <th>Patholab Phone</th>
              <th>total Amount</th>
              <th>status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orderHistory &&
              orderHistory.map((item, index) => (
                <tr
                  key={index}
                  onClick={() =>
                    navigate("/orderdetails", { state: { item: item } })
                  }
                >
                  <td>{index + 1}</td>
                  <td>{item?.order_id?.order_id}</td>
                  <td>
                    {item?.booking_for_other
                      ? item?.booking_for_other?.employe_user_name
                      : "Self"}
                  </td>
                  <td>
                    <div id="upprofile_name">
                      {" "}
                      {item?.pathology_id?.lab_name}
                    </div>
                  </td>
                  <td>{item?.pathology_id?.phone_number}</td>
                  {/* <td>
                    {" "}
                    <div id="upprofile_send"> Details</div>
                  </td> */}
                  {/* <td></td> */}
                  <td>{item?.order_id?.total_amount}</td>
                  <td>{item?.status}</td>
                  <td>View Details</td>
                </tr>
              ))}
          </tbody>
          {orderHistory.length === 0 && <div>No Orders Yet</div>}
        </Table>
      </Container>
    </>
  );
}

function EditUserProfile(props) {
  const firstname = useSelector(getFirst_name);
  const lastname = useSelector(getLast_name);
  const useremail = useSelector(getEmail);
  const userdob = useSelector(getDob);
  const userGender = useSelector(getGender);
  const company_name = useSelector(getOrganizationName);
  // const userorganization = useSelector()
  const [updateEmail, setUpdateEmail] = useState(useremail);
  const [updateFirstName, setUpdateFirstName] = useState(firstname);
  const [updateLastName, setUpdateLastName] = useState(lastname);
  const [updateDob, setUpdateDob] = useState(new Date(userdob));
  const [updategenderUser, setUpdategenderUser] = useState(userGender);
  const [updateOrganName, setUpdateOrganName] = useState(company_name);
  const [loading, setLoading] = useState(false);
  const userToken = useSelector(gettoken);
  const userType = useSelector(getUser_type);
  const dispatch = useDispatch();

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const twoWeeksFromNow = new Date();

  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 3000,
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
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
    });
  };

  const updateUserProfile = async () => {
    function validation() {
      if (updateFirstName.length === 0) {
        eToast("Please Enter First Name");
        return false;
      } else if (updateLastName.length === 0) {
        eToast("Please Enter Last Name");
        return false;
      } else if (updateEmail.length === 0) {
        eToast("Please Enter Email");
        return false;
      } else if (userType === "customer" && updateDob.length === 0) {
        eToast("Please Enter Date Of Birth");
        return false;
      } else if (userType === "customer" && updategenderUser.length === 0) {
        eToast("Please Select Gender");
        return false;
      } else if (userType === "organization" && updateOrganName.length === 0) {
        eToast("Please Enter Organization Name");
        return false;
      } else {
        return true;
      }
    }

    if (validation()) {
      setLoading(true);
      const data = {
        first_name: updateFirstName,
        last_name: updateLastName,
        email: updateEmail,
        dob: updateDob,
        gender: updategenderUser,
        organization_name: updateOrganName,
      };
      // console.log("update data is", data);
      await apicaller("profile", data, "PUT", userToken)
        .then((res) => {
          setLoading(true);
          if (res.status === 201 || res.status === 200) {
            // console.log("user profile is ", res);
            sToast("Profile Updated Successfully");
            props.onHide();
            // window.location.reload();
            dispatch(setFirst_name(res.data.user_data.first_name));
            dispatch(setEmail(res.data.user_data.email));
            dispatch(setLast_name(res.data.user_data.last_name));
            dispatch(setDob(res.data.user_data.dob));
            dispatch(setGender(res.data.user_data.gender));
            dispatch(setOrganizationName(res.data.user_data.organization_name));
          }
        })
        .catch((error) => {
          eToast(error.response.data.err);
          // console.log("error while profile updation is ", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
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
          Update Profiles
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Enter First Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={updateFirstName}
                  onChange={(e) => setUpdateFirstName(e.target.value)}
                  placeholder="Enter First Name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Enter Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={updateLastName}
                  onChange={(e) => setUpdateLastName(e.target.value)}
                  placeholder="Enter Last Name"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Enter Email</Form.Label>
                <Form.Control
                  type="email"
                  value={updateEmail}
                  onChange={(e) => setUpdateEmail(e.target.value)}
                  placeholder="Enter Email"
                />
              </Form.Group>
            </Col>
          </Row>
          {userType === "organization" && (
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Organization Name*</Form.Label>
                  <Form.Control
                    type="text"
                    value={updateOrganName}
                    onChange={(e) => setUpdateOrganName(e.target.value)}
                    placeholder="Enter Organization Name"
                  />
                </Form.Group>
              </Col>
            </Row>
          )}
          {userType === "customer" && (
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>DOB* </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter Date of Birth"
                    id="addInputFieldsDashboard"
                    defaultValue={convert(updateDob)}
                    onChange={(e) => setUpdateDob(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          )}

          {userType === "customer" && (
            <Row>
              <Form.Group className="mb-3">
                <Form.Label id="sfm6">Gender</Form.Label>
                <Row>
                  <Col
                    md={3}
                    xs={4}
                    onClick={() => setUpdategenderUser("Male")}
                  >
                    <div
                      id="up11"
                      style={
                        updategenderUser === "Male"
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
                    onClick={() => setUpdategenderUser("Female")}
                  >
                    <div
                      id="up11"
                      style={
                        updategenderUser === "Female"
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
                    onClick={() => setUpdategenderUser("Other")}
                  >
                    <div
                      id="up11"
                      style={
                        updategenderUser === "Other"
                          ? { backgroundColor: "green", color: "#fff" }
                          : { backgroundColor: " ", color: " " }
                      }
                    >
                      Other
                    </div>
                  </Col>
                </Row>
              </Form.Group>
            </Row>
          )}

          <Row>
            <Col></Col>
            <Col>
              <Button id="up14" onClick={() => updateUserProfile()}>
                {loading ? <Loader /> : "Update"}
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
