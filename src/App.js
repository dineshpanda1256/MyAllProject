import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import TestCard from "./components/TestCard/TestCard";
import LabDetails from "./pages/LabDetails/LabDetails";
import UserProfile from "./pages/UserProfile/UserProfile";
import Checkout from "./pages/Checkout/Checkout";
import Lab from "./pages/Lab/Lab";
import Testdetails from "./pages/Testdetails/Testdetails";
import Aboutus from "./pages/Aboutus/Aboutus";
import Contactus from "./pages/Contactus/Contactus";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Orderdetails from "./pages/Orderdetails/Orderdetails";
import Paymentfailure from "./pages/Paymentfailure/Paymentfailure";
import PaymentSuccess from "./pages/PaymentSucceess/PaymentSuccess";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import PromotionDis from "./pages/PromotionDis/PromotionDis";
import Career from "./pages/Career/Career";
import Map from "./pages/Map/Map";
import Terms from "./pages/Terms/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Faq from "./pages/Faq/Faq";
import Bill from "./pages/Bill/Bill";
import OrganizationProfile from "./pages/OrganizationProfile/OrganizationProfile";
import GoToTop from "./components/GoToTop/GoToTop";
import { useDispatch, useSelector } from "react-redux";
import { isUserLogedIn } from "./Redux/Actions/authActions";
import { getLat, getLong } from "./Redux/Slice/userSlice";
import SelectLocation from "./pages/SelectLocation/SelectLocation";
import { Elements } from "@stripe/react-stripe-js";
import Pdf from "./pages/Pdf/Pdf";

export default function App() {
  // const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);

  const userLat = useSelector(getLat);
  const userLong = useSelector(getLong);

  // console.log("Auth State in App.js is  :  ", auth);

  // useEffect(() => {
  //   if (!auth.authenticate) {
  //     dispatch(isUserLogedIn());
  //   }
  // }, []);
  return (
    <>
      {!userLat ? (
        <Home />
      ) : (
        <>
          {/* <Router> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="lab" element={<Lab />} />
            <Route path="contact" element={<Contactus />} />
            <Route path="about" element={<Aboutus />} />
            <Route path="promotion" element={<PromotionDis />} />
            <Route path="news" element={<News />} />
            <Route path="career" element={<Career />} />
            <Route path="locate" element={<Map />} />
            <Route path="terms" element={<Terms />} />
            <Route path="faq" element={<Faq />} />
            <Route path="labdetails" element={<LabDetails />} />
            <Route path="cart" element={<Testdetails />} />

            <Route path="checkout" element={<Checkout />} />

            <Route path="privacyp" element={<PrivacyPolicy />} />
            <Route path="orgaprofile" element={<OrganizationProfile />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="orderdetails" element={<Orderdetails />} />

            <Route path="pdf" element={<Pdf/>} />


            <Route path="success" element={<PaymentSuccess />} />

          </Routes>
          <GoToTop />
          <Footer />
         
          {/* </Router> */}

          {/* <UserProfile /> */}
          {/* <PaymentSuccess/> */}
          {/* <Paymentfailure/> */}
          {/* <Orderdetails/> */}
        </>
      )}
    </>
  );
}
