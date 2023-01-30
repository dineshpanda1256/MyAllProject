import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./HomeImgCarousel.css";
import slider1 from "../../assets/slider1.png";
import { apicaller } from "../../utils/api";
import Loader from "../Loader/Loader";

export default function HomeImgCarousel() {
  const [advBanner, setAdvBanner] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAdvBannerData();
  }, []);

  const getAdvBannerData = () => {
    apicaller("get-advertisement", null, "get", null)
      .then((res) => {
        setAdvBanner(res.data.Advertisement);
        setIsLoading(false);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <>
      <Carousel id="hic1">
        {isLoading && (
          <div
            style={{
              margin: "auto",
              width: "0%",
              marginTop: 80,
              marginBottom: 80,
            }}
          >
            <Loader />
          </div>
        )}
        {advBanner.map((item, i) => (
          <Carousel.Item interval={2000} key={i}>
            <img className="d-block w-100" id="hic2" src={item.image} alt="slide's" />
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
