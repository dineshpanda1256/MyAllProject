import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import "./Checkout.css";
import { BsDashCircleFill } from "react-icons/bs";
import { RiHandCoinFill } from "react-icons/ri";
import { IoArrowUndoOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  getId,
  gettoken,
  getUser_type,
  setMyOrderId,
  setMyOrderIdTwo,
} from "../../Redux/Slice/userSlice";
import { apicaller } from "../../utils/api";
import {
  cartTotalPriceSelector,
  cartTotalPriceSelectorTwo,
} from "../../Redux/selectors/selectors";
import Loader from "../../components/Loader/Loader";
import { clearCart } from "../../Redux/Slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Stripe from "../Stripe";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripCheckoutForm from "./StripeCheckoutForm";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51LlDR1GcdtsDFr6SqfHouiMEF2MPPANnEJyddoEfmI2skjsBfqIk08sgH6yFsXkspp0WLpuTvrPOtJ40iRUtIvbC00OAO8uUbu"
);

export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  const userType = useSelector(getUser_type);
  const pathoId = cart[0]?.pathology_id._id;
  const userToken = useSelector(gettoken);
  const userId = useSelector(getId);
  const [slot, setSlot] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
  const [timeslot, setTimeslot] = useState([]);
  const [pressed, setIsPressed] = useState("");
  const [apointmentTime, setApointmentTime] = useState("");
  const [selected, setSelected] = useState("");
  const [employee, setEmployee] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [showStripe, setShowStripe] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const UserId = useSelector(getId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // to show toast
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

  const getSlots = () => {
    apicaller(`slot-by-pathology/${pathoId}`, null, "get", userToken).then(
      (res) => {
        // console.log("Slot is", res);
        setSlot(res.data);
      }
    );
  };

  const getOrganisationEmployees = () => {
    apicaller(`employe-organization/${UserId}`, null, "get", null).then(
      (res) => {
        setEmployee(res.data);
      }
    );
  };

  function time(dates) {
    slot.map((item) => {
      if (item.slot_date === dates) {
        setTimeslot(item.slots);
      }
    });
  }

  useEffect(() => {
    getSlots();
    getOrganisationEmployees();
  }, []);

  const totalPriceO = useSelector(cartTotalPriceSelector);
  const disCountPrice = useSelector(cartTotalPriceSelectorTwo);

  const createOrder = () => {
    if (selected.length === 0) {
      eToast("Please Select A Date");
    } else if (pressed.length === 0) {
      eToast("Please Select A time");
    } else if (userType === "organization" && !selectedEmployee) {
      eToast("Please Select A employee");
    } else {
      setIsLoading(true);
      const data = JSON.stringify({
        user: userId,
        booking_type: userType === "customer" ? "user" : "organization",
        booking_time: apointmentTime,
        pathology_id: cart[0]?.pathology_id._id,
        // slot_date_id: selected,
        slot_date_id: selected,
        slot_time_id: pressed,

        orders: cart.map((item) => ({
          lab_test_id: item._id,
          test_category_id: item.test_category_id._id,
          actual_price: item.actual_price,
          discount_price: item.discount_price,
        })),

        // booking_for_other: selectedEmployee ? [selectedEmployee] : [],
        booking_for_other:
          userType === "organization" ? [selectedEmployee] : [],
      });

      // console.log("order Data is", data);

      apicaller("order", data, "post", null)
        .then((res) => {
          // console.log(res);
          setIsLoading(false);
          setShowStripe(true);
          dispatch(setMyOrderId(res.data?.map((item) => item.order_id)));
          dispatch(setMyOrderIdTwo(res.data?.map((item) => item._id)));
          // redirectToPaymentUrl();
          // dispatch(clearCart());
        })
        .catch((error) => {
          setIsLoading(false);
          eToast(
            error.response.data.data
              ? error.response.data.data
              : "Something Went Wrong, Please Try Again Later"
          );
        });
    }
  };

  useEffect(() => {
    if (!UserId) {
      navigate("/");
      eToast("Please Login");
    }
  }, []);

  const handleChange = (event) => {
    // console.log("abc", event.target.value);
    setSelectedEmployee(event.target.value);
  };

  const redirectToPaymentUrl = () => {
    const body = {
      amount: totalPriceO,

      user_id: userId,
      order_id: ["6369f9e649a0f9a8b45a7b75", "6369f9e649a0f9a8b45a7b76"],
    };
    axios
      .post("https://api.novaprolabs.com/api/create-payment", body)

      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((error) => {
        // console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  // console.log(apointmentTime);

  return (
    <>
      <Container id="checkout26">
        {/* <Button id="check18">
          <IoArrowUndoOutline /> Back
        </Button> */}
        <Row>
          <Col>
            <div id="check1">
              {/* <Row>
                <Col></Col>
                <Col xs={10} md={10}>
                  <div id="check17">
                    <Row>
                      <Col xs={4} md={6} id="check20">
                        Rudra 22, Male
                      </Col>
                      <Col xs={8} md={6} id="check21">
                        {" "}
                        3 tests included | $ 900
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col></Col>
              </Row> */}
              <Row>
                <div id="check17">
                  <Row>
                    <Col id="check20">
                      {cart[0]?.pathology_id.lab_name} ({cart.length}{" "}
                      tests)(Total : {totalPriceO})
                    </Col>
                  </Row>
                </div>
              </Row>

              {userType === "organization" && (
                <Form.Select
                  aria-label="Default select example"
                  value={selectedEmployee}
                  onChange={handleChange}
                >
                  <option>Please Select An Employee</option>
                  {employee.map((item) => (
                    <option value={item._id} key={item._id}>
                      {item.employe_user_name}
                    </option>
                  ))}
                </Form.Select>
              )}

              {/* <Row id="check7">
                <Col>Blood Test</Col>
              </Row> */}
              {/* <Row>
                <Col id="check8">
                  <BsDashCircleFill id="test7" />
                  {cart.length} tests included
                </Col>
                <Col id="check8">
                  <BsDashCircleFill id="test7" />
                  Reports within 12hrs
                </Col>
                <Col id="check8">
                  <BsDashCircleFill id="test7" />
                  No fasting is required
                </Col>
              </Row> */}
              {/* <Row>
                <Col>
                  <div id="check4">
                    MRP <div id="check2">$ 380</div>{" "}
                    <div id="check3">19% off</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div id="check5">$ 300</div>
                </Col>
              </Row> */}
              <Row>
                <Col id="check19">
                  <Table striped>
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Test Type</th>
                        <th>Test Name</th>
                        <th>Test Price</th>
                        <th>Discount</th>
                        <th>Amount Payable</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.test_category_id.category_name}</td>
                          <td>{item.test_name}</td>
                          <td>{item.actual_price}</td>
                          <td>{item.discount}%</td>
                          <td>{item.actual_price - item.discount_price} </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>

              <hr />
              <div id="checkout25">Select Appointment Date</div>
              <Row id="checkout24">
                <Col xs={12} md={12}>
                  <div id="check22">
                    {slot.map((item, index) => (
                      <div
                        id="check23"
                        style={{
                          borderColor:
                            selected === item._id ? "#5AA644" : "#9C9C9C",
                          backgroundColor:
                            selected === item._id ? "#5AA644" : "white",
                          cursor: "pointer",
                          color: selected === item._id ? "white" : "black",
                        }}
                        key={index}
                        // onClick={() => {
                        //   setSelectedDate((dt) =>
                        //     dt.includes(item.slot_date)
                        //       ? dt.filter((n) => n !=== item.slot_date)
                        //       : [item.slot_date, dt]
                        //   );
                        //   console.log("Selected Dates are", selectedDate);
                        // }}

                        onClick={() => {
                          setSelected(item._id);
                          time(item.slot_date);
                        }}
                      >
                        {item.slot_date}
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>

              <div id="checkout25">Select Appointment Time</div>

              <Row id="checkout24">
                <Col xs={12} md={12}>
                  {timeslot && (
                    <div id="check22">
                      {/* <div id="check23">1</div> */}

                      {timeslot.map((item) => {
                        return (
                          <div
                            onClick={() => {
                              setIsPressed(item._id);
                              setApointmentTime(item.slot_time);
                            }}
                            id="check23"
                            style={
                              // styles.time,
                              {
                                cursor:
                                  item.slot_capacity !== 0
                                    ? "pointer"
                                    : "not-allowed",
                                borderColor:
                                  pressed === item._id ? "#5AA644" : "#9C9C9C",
                                backgroundColor:
                                  pressed === item._id &&
                                  item.slot_capacity !== 0
                                    ? "#5AA644"
                                    : item.slot_capacity === 0
                                    ? "red"
                                    : "white",
                              }
                            }
                          >
                            <div>
                              <div
                                // numberOfLines={1}
                                // adjustsFontSizeToFit
                                style={
                                  // styles.time_txt,
                                  {
                                    color:
                                      pressed === item._id ? "white" : "black",
                                  }
                                }
                              >
                                {item.slot_time} ({item.slot_capacity})
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </Col>
              </Row>

              <Row id="check11">
                <Col md={4} xs={12}>
                  TOTAL CHARGES
                </Col>
                <Col></Col>
              </Row>

              <Row id="check12">
                <Col md={3} xs={6}>
                  TOTAL MRP
                </Col>
                <Col md={2} xs={6}>
                  $ {Math.round(totalPriceO * 100) / 100}
                </Col>
                <Col></Col>
              </Row>
              <Row id="check12">
                <Col md={3} xs={6}>
                  Tax and Others
                </Col>
                <Col md={2} xs={6}>
                  $ {Math.round(totalPriceO * 0.18 * 100) / 100}
                </Col>
                <Col></Col>
              </Row>
              <Row
                id="check12"
                style={{ backgroundColor: "#4687bf", borderRadius: "5px" }}
              >
                <Col
                  md={3}
                  xs={6}
                  style={{ color: "white", fontWeight: "bolder" }}
                >
                  TOTAL Payable
                </Col>
                <Col
                  md={2}
                  xs={6}
                  style={{ color: "white", fontWeight: "bolder" }}
                >
                  $ {Math.round((totalPriceO + totalPriceO * 0.18) * 100) / 100}
                </Col>
                <Col></Col>
              </Row>

              <Row id="check12">
                {/* <Col md={2} xs={6}>
                  Discount
                </Col>
                <Col md={2} xs={6}>
                  $ 300.00
                </Col>
                <Col></Col> */}
              </Row>

              {/* <Row id="check12">
                <Col md={2} xs={6}>
                  TOTAL CHARGES
                </Col>
                <Col md={2} xs={6}>
                  $ 300.00
                </Col>
                <Col></Col>
              </Row> */}

              <Row id="check12">
                {/* <Col md={2} xs={6}>
                  Amount To Pay
                </Col>
                <Col md={2} xs={6}>
                  $ 300.00
                </Col> */}
                <Col></Col>
              </Row>

              <Row id="check15">
                <Col>
                  {/* <RiHandCoinFill id="check16" />
                  You saved ${disCountPrice} on this booking */}
                </Col>
                <Col md="7"></Col>
                <Col
                  md="2"
                  id="check14"
                  // onClick={}
                  style={{ cursor: "pointer" }}
                >
                  {/* {isLoading ? <Loader /> : "Place Order"} */}
                  {showStripe ? (
                    <Stripe />
                  ) : isLoading ? (
                    <Loader />
                  ) : (
                    <Col
                      md="2"
                      id="check14"
                      onClick={createOrder}
                      style={{ cursor: "pointer" }}
                    >
                      Place Order
                    </Col>
                  )}

                  {/* {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                      <StripCheckoutForm />
                    </Elements>
                  )} */}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
