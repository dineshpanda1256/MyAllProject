import React from "react";
import "./Orderdetails.css";
import { GiReturnArrow } from "react-icons/gi";
import { FiClock } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsCircleFill, BsStar, BsStarFill } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import StarRating from "../../components/StarRating/StarRating";
import StepProgressbar from "../../components/StepProgressbar/StepProgressbar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { getId } from "../../Redux/Slice/userSlice";

function Orderdetails() {
  const location = useLocation();
  const orderDetails = location?.state.item;
  const user = useSelector(getId);
  // console.log(orderDetails);
  // console.log(orderDetails.status);

  // console.log("Order Detail is", orderDetails);

  const navigate = useNavigate();

  const Pdfdownload = () => {};

  const addReview = (value) => {
    const data = {
      pathology_id: orderDetails?.pathology_id?._id,
      rating: value,
      review: "Lorem ipsum",
      from_user: user,
    };
    apicaller("rating", data, "post", null)
      // .then((res) => console.log(res))
      // .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={1}> </Col>
          <Col md={4} id="orderdetails_returnmaindiv">
            {" "}
            {/* <div id="orderdetails_returnicon">
              <GiReturnArrow />
            </div>
            <div id="orderdetails_return">Return</div>{" "} */}
          </Col>
        </Row>

        <Row>
          <Col md={1}></Col>
          <Col md={5}>
            <Row>
              {" "}
              <div id="orderdetails_labname">
                {" "}
                {orderDetails.pathology_id.lab_name}
              </div>{" "}
            </Row>
            <Row id="orderdetails_timedate">
              <Col md={4}>
                {" "}
                <FiClock /> {orderDetails?.order_id?.booking_time}
              </Col>
              <Col md={4}>
                {" "}
                <AiOutlineCalendar /> {orderDetails?.slot?.slot_date}
              </Col>
            </Row>
            <Row id="orderdetails_type">
              <Col>
                {" "}
                <BsCircleFill style={{ color: "#394E76" }} /> Ordered On :-
                {/* {new Date(orderDetails?.createdAt)} */}
                {new Date(orderDetails.createdAt)?.toLocaleString()}
              </Col>
            </Row>
            <Row id="orderdetails_type">
              <Col>
                {" "}
                <BsCircleFill style={{ color: "#394E76" }} /> Test Name :-
                {orderDetails.test_category_id?.category_name}(
                {orderDetails.lab_test_id?.test_name})
                {/* FIXME:BackendIssue
                (showing null) */}
              </Col>
            </Row>
            <Row id="orderdetails_type">
              <Col>
                {" "}
                <BsCircleFill style={{ color: "#394E76" }} /> Booking For :-{" "}
                {orderDetails.booking_for_other
                  ? orderDetails.booking_for_other?.employe_user_name
                  : "Self"}
              </Col>
            </Row>

            {/* step progrssbar */}
            <Row className="step-wizard">
              <ul className="step-wizard-list">
                <li
                  className={
                    orderDetails.status === "order confirmed" ||
                    orderDetails.status === "sample collected" ||
                    orderDetails.status === "test completed"
                      ? "step-wizard-item"
                      : "step-wizard-item current-item"
                  }
                >
                  <span className="progress-count">1</span>
                  <span className="progress-label">Order Confirmed</span>
                </li>
                <li
                  className={
                    orderDetails.status === "sample collected" ||
                    orderDetails.status === "test completed"
                      ? "step-wizard-item"
                      : "step-wizard-item current-item"
                  }
                >
                  <span className="progress-count">2</span>
                  <span className="progress-label">Sample Collected</span>
                </li>
                <li
                  className={
                    orderDetails.status === "test completed"
                      ? "step-wizard-item"
                      : "step-wizard-item current-item"
                  }
                >
                  <span className="progress-count">3</span>
                  <span className="progress-label">Test Completed</span>
                </li>
              </ul>
            </Row>

            {/* <Row>
              {" "}
              <StepProgressbar />{" "}
            </Row> */}

            {orderDetails.status === "test completed" && (
              <Row>
                {" "}
                <button
                  onClick={() =>
                    navigate("/pdf", { state: { id: orderDetails?._id } })
                  }
                  id="orderdetail_downloadbtn"
                >
                  {" "}
                  View Reports
                </button>{" "}
              </Row>
            )}
          </Col>
          <Col md={5}>
            <Row id="orderdetail_paymentdetail"> Payment Details</Row>
            <Row id="orderdetail_testandprice">
              <Col> Price</Col>
              <Col>$ {orderDetails?.order_id?.actual_price} </Col>
            </Row>
            <Row id="orderdetail_testandprice">
              <Col> Discount</Col>
              <Col> $ {orderDetails?.order_id?.discount_price} </Col>
            </Row>
            {/* <Row id="orderdetail_testandprice">
              <Col> Thyroid Test</Col>
              <Col>$500.00 </Col>
            </Row> */}
            <hr style={{ width: "65%" }} />

            <Row id="orderdetail_testandprice2">
              <Col> Total</Col>
              <Col>$ {orderDetails?.order_id?.final_price} </Col>
            </Row>
            <Row id="orderdetail_testandprice">
              <Col> Tax & Other</Col>
              <Col>$ {orderDetails?.order_id?.gst}</Col>
            </Row>
            <hr style={{ width: "65%" }} />
            <Row id="orderdetail_testandprice2">
              <Col> Grand Total</Col>
              <Col>$ {orderDetails?.order_id?.total_amount}</Col>
            </Row>

            {orderDetails.status === "test completed" && (
              <Row id="starrating_maindiv">
                <Col md={3} xs={12} id="rateus_text">
                  {" "}
                  Rate us{" "}
                </Col>
                <Col md={8} xs={12} id="rateus_star">
                  {" "}
                  {/* <StarRating />{" "} */}
                  <Rating
                    onClick={(value) => addReview(value)}
                    emptySymbol={<BsStar size={30} color="white" />}
                    fullSymbol={<BsStarFill size={30} color="orange" />}
                  />
                </Col>
                <Col md={2} style={{ background: "none" }}></Col>
              </Row>
            )}
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Orderdetails;
