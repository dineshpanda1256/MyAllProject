import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import OPCarousel from "../../components/OPCarousel/OPCarousel";
import "./OrganizationProfile.css";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoInformationCircle } from "react-icons/io5";
import EditOrganizationProfile from "../../components/EditOrganizationProfile/EditOrganizationProfile";
import EditEmployeeProfile from "../../components/EditEmployeeProfile/EditEmployeeProfile";
import AddnewmemberModal from "../../components/AddnewmemberModal/AddnewmemberModal";
import DownloadreportModal from "../../components/DownloadreportModal/DownloadreportModal";
import ConfirmdeleteModal from "../../components/ConfirmdeleteModal/ConfirmdeleteModal";
import BookingdetailModal from "../../components/BookingdetailModal/BookingdetailModal";
import { Link } from "react-router-dom";

export default function OrganizationProfile() {
  const [organization, setOrganization] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [member, setMember] = useState(false);
  const [report, setReport] = useState(false);
  const [cdelete, setCdelete] = useState(false);
  const [booking, setBooking] = useState(false);

  return (
    <>
      <Container>
        <OPCarousel />
        <Row id="op1">
          <Col xs={6} md={6} id="op2">
            Hi Codekart
          </Col>
          <Col xs={2} md={2} id="op4">
            <Button id="op3" onClick={() => setOrganization(true)}>
              Edit <MdOutlineModeEditOutline />
            </Button>
            <EditOrganizationProfile
              show={organization}
              onHide={() => setOrganization(false)}
            />
          </Col>
          <Col xs={4} md={4} id="op4">
            <Button id="op3" onClick={() => setMember(true)}>
              Add member <AiOutlineUserAdd />
            </Button>
            <AddnewmemberModal show={member} onHide={() => setMember(false)} />
          </Col>
        </Row>
        <Row>
          <Col id="op5">
            Always caring about your employee’s health, we are here to help you!
          </Col>
        </Row>
        <Row>
          <Col>
            <Form className="d-flex" id="op6">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="op7"
              />
              <FiSearch id="op8" />
            </Form>
          </Col>
        </Row>

        <Container id="op9">
          <Table>
            <thead>
              <tr id="op10">
                <th>Member name</th>
                <th>DOB</th>
                <th>Contact</th>
                <th>Email</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr id="op11">
                <td>Member-1</td>
                <td>01/01/2001</td>
                <td>+91-1234567890</td>
                <td>codeekart@codekart.com</td>
                <td>
                  <IoInformationCircle
                    style={{ color: "#009CFF" }}
                    onClick={() => setBooking(true)}
                  />
                  <BookingdetailModal
                    show={booking}
                    onHide={() => setBooking(false)}
                  />
                </td>
                <td>
                  <Button id="op12">
                    <Link to="/lab" id="op13">
                      Book
                    </Link>
                  </Button>
                  <Button id="op12" onClick={() => setReport(true)}>
                    Reports
                  </Button>
                  <DownloadreportModal
                    show={report}
                    onHide={() => setReport(false)}
                  />
                  <Button id="op12" onClick={() => setEmployee(true)}>
                    Edit
                  </Button>
                  <EditEmployeeProfile
                    show={employee}
                    onHide={() => setEmployee(false)}
                  />
                  <Button id="op12" onClick={() => setCdelete(true)}>
                    Delete
                  </Button>
                  <ConfirmdeleteModal
                    show={cdelete}
                    onHide={() => setCdelete(false)}
                  />
                </td>
              </tr>

              <tr id="op11">
                <td>Member-1</td>
                <td>01/01/2001</td>
                <td>+91-1234567890</td>
                <td>codeekart@codekart.com</td>
                <td>
                  <IoInformationCircle style={{ color: "#009CFF" }} />
                </td>
                <td>
                  <Button id="op12">Book</Button>
                  <Button id="op12">Reports</Button>
                  <Button id="op12">Edit</Button>
                  <Button id="op12">Delete</Button>
                </td>
              </tr>
              <tr id="op11">
                <td>Member-1</td>
                <td>01/01/2001</td>
                <td>+91-1234567890</td>
                <td>codeekart@codekart.com</td>
                <td>
                  <IoInformationCircle style={{ color: "#009CFF" }} />
                </td>
                <td>
                  <Button id="op12">Book</Button>
                  <Button id="op12">Reports</Button>
                  <Button id="op12">Edit</Button>
                  <Button id="op12">Delete</Button>
                </td>
              </tr>
              <tr id="op11">
                <td>Member-1</td>
                <td>01/01/2001</td>
                <td>+91-1234567890</td>
                <td>codeekart@codekart.com</td>
                <td>
                  <IoInformationCircle style={{ color: "#009CFF" }} />
                </td>
                <td>
                  <Button id="op12">Book</Button>
                  <Button id="op12">Reports</Button>
                  <Button id="op12">Edit</Button>
                  <Button id="op12">Delete</Button>
                </td>
              </tr>
              <tr id="op11">
                <td>Member-1</td>
                <td>01/01/2001</td>
                <td>+91-1234567890</td>
                <td>codeekart@codekart.com</td>
                <td>
                  <IoInformationCircle style={{ color: "#009CFF" }} />
                </td>
                <td>
                  <Button id="op12">Book</Button>
                  <Button id="op12">Reports</Button>
                  <Button id="op12">Edit</Button>
                  <Button id="op12">Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
}
