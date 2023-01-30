import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalPriceSelector } from "../Redux/selectors/selectors";
import {
  getEmail,
  getId,
  getOrderIds,
  getOrderIdsTwo,
  setMyOrderId,
  setMyOrderIdTwo,
} from "../Redux/Slice/userSlice";
import { clearCart } from "../Redux/Slice/cartSlice";
import { apicaller } from "../utils/api";
import { useNavigate } from "react-router-dom";
import PleaseWait from "../components/PleaseWaitModal/PleaseWait";

export default function Stripe() {
  const totalPriceO = useSelector(cartTotalPriceSelector) * 100;
  const cart = useSelector((state) => state.cart);
  const orderIds = useSelector(getOrderIds);
  const orderIdsTwo = useSelector(getOrderIdsTwo);
  const [modalShow, setModalShow] = useState(false);

  const userId = useSelector(getId);
  const userEmail = useSelector(getEmail);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onToken = (token) => {
    setModalShow(true);
    // console.log("Stripe token is", token);
    const body = {
      amount: totalPriceO + totalPriceO * 0.18,
      token: token,
      user_id: userId,
      // order_id: ["6369f9e649a0f9a8b45a7b75", "6369f9e649a0f9a8b45a7b76"],
      order_id: orderIdsTwo,
    };
    // console.log("Create-payment data is", body);
    axios
      .post("https://api.novaprolabs.com/api/create-payment", body)
      .then((response) => {
        // console.log(response);
        const data = {
          payment_status: "paid",
          payment_id: response.data.payment_id,
          order_id: orderIds,
        };
        // console.log("after payment", data);
        apicaller("order", data, "put", null)
          .then((res) => {
            // alert("Payment Success");
            setModalShow(false);
            navigate("/success");

            dispatch(clearCart());

            dispatch(setMyOrderId([]));
            dispatch(setMyOrderIdTwo([]));
          })
          .catch((err) => alert(err));
      })
      .catch((error) => {
        // console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  return (
    <div>
      <StripeCheckout
        name="Nova Co." // the pop-in header title
        // description="Big Data Stuff" // the pop-in header subtitle
        image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
        ComponentClass="div"
        label="Pay Now" // text inside the Stripe button
        panelLabel="Pay Now" // prepended to the amount in the bottom pay button
        amount={totalPriceO + totalPriceO * 0.18} // cents
        currency="USD"
        // stripeKey="pk_live_51LlDR1GcdtsDFr6Spm2w3WiSE7LZoqObyMQgofXKjUUnv7ofnjnlXfxM0VNpkAnZ9zSGpB17KzHzAEHEBYTbIN2B00FEnBRM7h"
        stripeKey="pk_test_51LlDR1GcdtsDFr6SqfHouiMEF2MPPANnEJyddoEfmI2skjsBfqIk08sgH6yFsXkspp0WLpuTvrPOtJ40iRUtIvbC00OAO8uUbu"
        locale="en"
        email={userEmail}
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        // shippingAddress
        billingAddress={false}
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={false}
        // alipay // accept Alipay (default false)
        // bitcoin // accept Bitcoins (default false)
        allowRememberMe // "Remember Me" option (default true)
        token={onToken} // submit callback
        // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
        // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
        // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
        // you are using multiple stripe keys
        reconfigureOnUpdate={false}
        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
        // useful if you're using React-Tap-Event-Plugin
        triggerEvent="onClick"
      />

      <PleaseWait show={modalShow} onHide={() => setModalShow(false)} />
      {/* <button className="btn btn-primary">Stripe</button> */}
    </div>
  );
}
