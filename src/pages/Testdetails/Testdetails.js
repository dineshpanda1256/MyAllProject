import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import "./Testdetails.css";
import { BsDashCircleFill } from "react-icons/bs";
import { FaMicroscope } from "react-icons/fa";
import TestCard from "../../components/TestCard/TestCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../Redux/Slice/cartSlice";
import { gettoken } from "../../Redux/Slice/userSlice";
import { toast } from "react-toastify";
import { MdDeleteOutline } from "react-icons/md";
import emptycartImg from "../../assets/emptycart.gif";

export default function Testdetails() {
  const [isLoading, setIsLoading] = useState(true);

  const cart = useSelector((state) => state.cart);
  const token = useSelector(gettoken);

  // console.log("Cart Items in Cart.js from state", cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [cartItems, setCartItems] = useState([cart.cartItems]);

  // useEffect(() => {
  //   setCartItems(cart.cartItems);
  // }, [cart.cartItems]);

  const proceedToCheckout = () => {
    // gettoken();
    if (token) {
      navigate("/checkout");
    } else {
      eToast("Please Login");
    }
  };

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

  return (
    <Container>
      {cart.length > 0 ? (
        <Container>
          {/* <Row>
        <Col md={12}>
          <Form.Control
            id="searchbar"
            type="search"
            placeholder="&#128269; Search for a lab"
            className="me-2"
            aria-label="Search"
          />
        </Col>
      </Row> */}

          <Row id="test30">
            <Col md={5} xs={12}>
              {/* add test on clicking add to cart */}
              {cart?.map((item, index) => (
                <div id="test1" key={index}>
                  <Row>
                    <Col md={10} xs={10}>
                      <div id="test2">{item.test_name}</div>
                    </Col>
                    <Col
                      md={2}
                      xs={2}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are You Sure Want To Remove This Item"
                          )
                        ) {
                          dispatch(removeItem(item._id));
                        }
                      }}
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MdDeleteOutline
                        style={{ marginTop: "0.5rem" }}
                        size={30}
                        color="red"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col id="test11" md={2} xs={2}>
                      <div></div>
                    </Col>
                    <Col></Col>
                  </Row>

                  <Row>
                    <Col>
                      <div id="test6">{item.description}</div>
                    </Col>
                  </Row>
                  <Row id="test12">
                    <Col>
                      <div id="test9">
                        <div>
                          <BsDashCircleFill id="test7" />
                        </div>
                        <div id="anySpecialRequirementsTxt">
                          Any Special Requirements : {item.preparation_details}
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row id="test9">
                    <Col>
                      <div id="test4">
                        MRP <div id="test3">$ {item.actual_price}</div>{" "}
                        <div id="test5">{item.discount}% off</div>
                      </div>{" "}
                    </Col>
                  </Row>
                  <Row id="test8">
                    <Col id="discountedPrice">
                      $ {item.actual_price - item.discount_price}{" "}
                    </Col>
                  </Row>
                  <Row>
                    <Col id="test20">
                      Extra $ {item.discount_price} Cashback{" "}
                    </Col>
                  </Row>
                  {/* <Row id="test10">
                <Col>Effective price : $ 280</Col>
              </Row> */}
                </div>
              ))}
              {/* <div id="test1">
            <Row>
              <Col>
                <div id="test2">Blood Test</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div id="test6">Blood sugar test, Blood-cholesterol test</div>
              </Col>
            </Row>
            <Row>
              <Col id="test11" md={2} xs={2}>
                <div></div>
              </Col>
              <Col></Col>
            </Row>
            <Row id="test12">
              <Col>
                <div id="test9">
                  <div>
                    <BsDashCircleFill id="test7" />
                  </div>
                  <div>No special preparation is required</div>
                </div>
              </Col>
            </Row>
            <Row id="test9">
              <Col>
                <div id="test4">
                  MRP <div id="test3">$ 380</div> <div id="test5">19% off</div>
                </div>{" "}
              </Col>
            </Row>
            <Row id="test8">
              <Col>$ 300</Col>
            </Row>
            <Row>
              <Col id="test20">Extra $ 31 Cashback </Col>
            </Row>
            <Row id="test10">
              <Col>Effective price : $ 280</Col>
            </Row>
          </div>
          <div id="test1">
            <Row>
              <Col>
                <div id="test2">Blood Test</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div id="test6">Blood sugar test, Blood-cholesterol test</div>
              </Col>
            </Row>
            <Row>
              <Col id="test11" md={2} xs={2}>
                <div></div>
              </Col>
              <Col></Col>
            </Row>
            <Row id="test12">
              <Col>
                <div id="test9">
                  <div>
                    <BsDashCircleFill id="test7" />
                  </div>
                  <div>No special preparation is required</div>
                </div>
              </Col>
            </Row>
            <Row id="test9">
              <Col>
                <div id="test4">
                  MRP <div id="test3">$ 380</div> <div id="test5">19% off</div>
                </div>{" "}
              </Col>
            </Row>
            <Row id="test8">
              <Col>$ 300</Col>
            </Row>
            <Row>
              <Col id="test20">Extra $ 31 Cashback </Col>
            </Row>
            <Row id="test10">
              <Col>Effective price : $ 280</Col>
            </Row>
          </div> */}
              {/* add test on clicking add to cart end */}
            </Col>
            <Col md={7} xs={12}>
              <div id="test27">
                <Row>
                  <Col>
                    <div id="test9">
                      <div>
                        <FaMicroscope id="test14" />
                      </div>
                      <div id="test14">{cart[0]?.pathology_id.lab_name}</div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div id="test18">Total Test Includes: {cart?.length}</div>
                    <div id="test16">
                      {cart.map((i) => (
                        <>{i.test_name}, </>
                      ))}
                    </div>
                  </Col>
                </Row>
              </div>

              {/* <div id="test27">
                <Row id="test19">
                  <Col> About </Col>
                </Row>

                <Row id="test28">
                  <Col>
                    <div id="test9">
                      <div>
                        <FaMicroscope id="test14" />
                      </div>

                      <div>
                        <div id="test17">Sample</div>
                        <div id="test25">Blood</div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div id="test9">
                      <div>
                        <FaMicroscope id="test14" />
                      </div>

                      <div>
                        <div id="test17">Age group</div>
                        <div id="test25">All age group</div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div id="test9">
                      <div>
                        <FaMicroscope id="test14" />
                      </div>

                      <div>
                        <div id="test17">Gender</div>
                        <div id="test25">All gender</div>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row id="test17">
                  <Col md={11}>
                    The HbA1c blood test measures your average level of blood
                    sugar over the past 90 days. It is also called glycated
                    haemoglobin because most monosaccharide
                  </Col>
                  <Col></Col>
                </Row>

                <Row id="test23">
                  <Col></Col>
                  <Col md={2} xs={4}>
                    Read More..{" "}
                  </Col>
                </Row>
              </div> */}
              

              <Row id="test29">
                <Col md={6} xs={6}>
                  <Button
                    id="addMoreBtnBackground"
                    onClick={() => navigate(-1)}
                  >
                    + Add More
                  </Button>
                  {/* <TestCard />
              <TestCard />
              <TestCard />
              <TestCard />
              <TestCard />
              <TestCard /> */}
                </Col>
                <Col md={6} xs={6}>
                  {/* <Link to="/checkout"> */}
                  <Button id="test31" onClick={proceedToCheckout}>
                    Proceed to Checkout
                  </Button>
                  {/* </Link> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <>
        <Container>
          <Row>
            <Col md={12} id="test32">
         
            <Image src={emptycartImg}  alt="empty cart" />
         
          </Col>
          </Row>
          <Row>
          <Col id="test33" >
            Oops Nothing Here ..!! add a test please  {" "}
            
            </Col>
          </Row>
          <Row > <Col id="test34"> <Link to="/lab" style={{textDecoration:'none'}} >Explore Labs Near you</Link></Col></Row>
          </Container>
        </>
      )}
    </Container>
  );
}
