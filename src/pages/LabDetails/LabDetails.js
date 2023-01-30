import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./LabDetails.css";
import { TbMicroscope } from "react-icons/tb";
import { BsFillClockFill, BsBuilding } from "react-icons/bs";
import { RiBodyScanFill } from "react-icons/ri";
import { ImLab } from "react-icons/im";
import { FaCity, FaRupeeSign } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import Gmap from "../../components/Gmap/Gmap";
import TestCard from "../../components/TestCard/TestCard";
import { useLocation, useNavigate } from "react-router-dom";
import { apicaller } from "../../utils/api";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Slice/cartSlice";
import {
  getSubCategoryId,
  setSubCategoryId,
} from "../../Redux/Slice/userSlice";

export default function LabDetails() {
  const location = useLocation();
  // console.log("lab detail data is", location.state.id);
  const [z, setZ] = useState();
  const subCategoryId = useSelector(getSubCategoryId);

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingO, setIsLoadingO] = useState(true);
  const [pathoDetails, setPathoDetails] = useState({});
  const [testCategoryId, setTestCategoryId] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [subCategoryTwo, setSubCategoryTwo] = useState([]);
  const [selected, setSelected] = useState(z);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(z);

  useEffect(() => {
    getLabDetails();
    getTests(subCategoryId);
  }, []);
  useEffect(() => {
    // getTests(z);
    getTestTwo();
  }, []);

  // console.log("s is", selected);
  const handleChange = (event) => {
    // console.log("abc", event.target.value);
    setSelected(event.target.value);
    getTests(event.target.value);
  };

  // console.log(
  //   `lab-test-by-category?pathology_id=${location.state.id}&test_category_id=${z}`
  // );

  const getTests = (id) => {
    apicaller(
      `lab-test-by-category?pathology_id=${location.state.id}&test_category_id=${id}`,
      null,
      "get",
      null
    ).then((res) => {
      // setIsLoadingO(false);
      // console.log("Test Category", res);

      setSubCategory(res.data);

      // console.log("sub test", subCategory[0].test_name);
    });
  };

  const getTestTwo = () => {
    apicaller(
      `lab-test-by-category?pathology_id=${location.state.id}&test_category_id=${z}`,
      null,
      "get",
      null
    ).then((res) => {
      setIsLoadingO(false);
      // console.log("Test Category", res);

      setSubCategoryTwo(res.data);

      // console.log("sub test", subCategory[0].test_name);
    });
  };

  const getLabDetails = () => {
    apicaller(`pathology/${location.state.id}`, null, "get", null).then(
      (res) => {
        setIsLoading(false);
        // console.log(res.data);
        setZ(res.data.test_category_id[0]?._id);
        dispatch(setSubCategoryId(res.data.test_category_id[0]?._id));
        setPathoDetails(res.data);
        // getTests();
      }
    );
  };

  return (
    <>
      {" "}
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "centre",
            marginTop: 200,
            marginBottom: 200,
          }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <Container fluid>
            <Row>
              <Col id="labdetails1">
                <div>
                  <TbMicroscope style={{ height: "3em", width: "3em" }} />
                </div>
                <div>
                  <div id="labdetails2">{pathoDetails.pathology.lab_name}</div>
                  <div id="labdetails3">{pathoDetails.pathology.address}</div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <div id="labdetails4">
                  <div id="labdetails7">
                    <BsFillClockFill
                      style={{
                        height: "1.5em",
                        width: "1.5em",
                        color: "#969632",
                      }}
                    />
                  </div>
                  <div>
                    <div id="labdetails5">open</div>
                    <div id="labdetails6">
                      {pathoDetails.pathology.time_start}-{" "}
                      {pathoDetails.pathology.time_end}
                    </div>
                  </div>
                </div>
                {/* <div id="labdetails4">
                  <div id="labdetails7">
                    <RiBodyScanFill
                      style={{
                        height: "1.5em",
                        width: "1.5em",
                        color: "#969632",
                      }}
                    />
                  </div>
                  <div>
                    <div id="labdetails5">Radiology</div>
                    <div id="labdetails6">Not available</div>
                  </div>
                </div> */}
                {/* <div id="labdetails4">
                  <div id="labdetails7">
                    <ImLab
                      style={{
                        height: "1.5em",
                        width: "1.5em",
                        color: "#969632",
                      }}
                    />
                  </div>
                  <div>
                    <div id="labdetails5">Pathology</div>
                    <div id="labdetails6">Available</div>
                  </div>
                </div> */}
                <div id="labdetails4">
                  <div id="labdetails7">
                    <FaCity
                      style={{
                        height: "1.5em",
                        width: "1.5em",
                        color: "#969632",
                      }}
                    />
                  </div>
                  <div>
                    <div id="labdetails5">Facilities</div>
                    <div id="labdetails6">
                      {pathoDetails.pathology.facilities?.map((i) => (
                        <span> {i},</span>
                      ))}
                      {}
                    </div>
                  </div>
                </div>
                <div id="labdetails4">
                  {/* <div id="labdetails7">
                    <FaRupeeSign
                      style={{
                        height: "1.5em",
                        width: "1.5em",
                        color: "#969632",
                      }}
                    />
                  </div> */}
                  <div>
                    {/* <div id="labdetails5">Accepted payment method</div>
                    <div id="labdetails6">Cash, UPI, POS</div> */}
                  </div>
                </div>
              </Col>
              <Col>
                <div id="labdetails4">
                  <div id="labdetails7">
                    <IoCall
                      style={{
                        height: "1.5em",
                        width: "1.5em",
                        color: "#969632",
                      }}
                    />
                  </div>
                  <div>
                    <div id="labdetails5">
                      {pathoDetails.pathology.phone_number}
                    </div>
                    <div id="labdetails6">
                      Contact us for center related information
                    </div>
                  </div>
                </div>
                <div id="labdetails4">
                  <div id="labdetails7">
                    <IoIosMail
                      style={{
                        height: "1.5em",
                        width: "1.5em",
                        color: "#969632",
                      }}
                    />
                  </div>
                  <div>
                    <div id="labdetails5">{pathoDetails.pathology.email}</div>
                    <div id="labdetails6">
                      Mail us for any information and queries
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            {/* <Row style={{ marginTop: "2rem" }}>
              <Col>
                <Form.Select size="lg" id="labdetails13">
                  <option>Select Test</option>
                  <option>Blood Test</option>
                  <option>Urine Test</option>
                  <option>Plasma Test</option>
                  <option>Haemoglobin Test</option>
                  <option>Sugar Test</option>
                </Form.Select>
              </Col>
            </Row> */}
            <Row>
              <Col md={4}></Col>
              <Col md={4}>
              <Form.Select
              style={{ marginTop: "2rem" }}
              size="lg"
              id="labdetails13"
              value={selected}
              onChange={handleChange}
            >
              <option>Please Select A Test To Continue</option>
              {pathoDetails.test_category_id?.map((i) => {
                return (
                  <option key={i._id} value={i._id}>
                    {i.category_name}
                  </option>
                );
              })}
            </Form.Select>
              </Col>
              <Col md={4}></Col>
            </Row>
            <Row id="labdetails12">
              
                {/* {isLoadingO && (
                  <div style={{ marginLeft: "45%", marginTop: 100 }}>
                    <Loader />
                  </div>
                )} */}

                {subCategory.map((i) => (
                  <Col id="labdetails11" style={{ marginTop: 30 }} md={3} xs={12} >
                  <TestCard
                    testName={i.test_name}
                    acPrice={i.actual_price}
                    price={i.actual_price - i.discount_price}
                    percentage={i.discount}
                    discount_price={i.discount_price}
                    addToCart={() => {
                      navigate("/cart");
                      dispatch(addToCart(i));
                    }}
                  />
                  </Col>
                ))}
            </Row>
            <Row>
              <Col>
                <div id="labdetails8">Value for money</div>
                <div id="labdetails9">
                  With exclusive discounts on lab tests and Health Credits worth
                  INR 100 on every test, we make sure that our lab tests are
                  accessible as well as affordable. We also offer flexible modes
                  of payment, including cash on delivery (COD). Apollo 24/7 is
                  on a mission to provide affordable lab tests at home.
                </div>

                <div id="labdetails10">Professionally Trained Technicians</div>
                <div id="labdetails9">
                  Qualified and trained phlebotomists from our NABL certified
                  Apollo Diagnostic Labs and collection centres, come to your
                  doorstep to collect the samples in a safe, hygienic and
                  hassle-free manner. Apollo 24|7 brings the best of Apollo
                  Diagnostics to your home for all your diagnostic requirements.{" "}
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}
