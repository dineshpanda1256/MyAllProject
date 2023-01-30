import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Homecardcomp from "../../components/Homecardcomp/Homecardcomp";
import Homecompfive from "../../components/Homecompfive/Homecompfive";
import Homecompfour from "../../components/Homecompfour/Homecompfour";
import HomeImgCarousel from "../../components/HomeImgCarousel/HomeImgCarousel";
import { apicaller } from "../../utils/api";
import homecardimg from "../../assets/Images/homecardimg.png";
import "./Home.css";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import {
  getLat,
  getLong,
  getMyAddress,
  setLattitude,
  setLongitude,
  setMyAddress,
} from "../../Redux/Slice/userSlice";
import LocationModal from "../../components/LocationModal/LocationModal";

function Home() {
  const [topRating, setTopRating] = useState([]);
  const [value, setValue] = useState(null);
  const [addressObj, setAddressObj] = useState();
  const [modalLocationShow, setModalLocation] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingTwo, setIsLoadingTwo] = useState(true);
  const myAddress = useSelector(getMyAddress);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log("Google Map Api Value is", value);

  useEffect(() => {
    getTopRatingData();
  }, []);

  // const increase = () => {setCounter(counter+1)}

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  const getAddressObject = (address_components) => {
    // console.log(address_components);
    const ShouldBeComponent = {
      street_number: ["street_number"],
      postal_code: ["postal_code"],
      street: ["street_address", "route"],
      province: [
        "administrative_area_level_1",
        "administrative_area_level_2",
        "administrative_area_level_3",
        "administrative_area_level_4",
        "administrative_area_level_5",
      ],
      city: [
        "locality",
        "sublocality",
        "sublocality_level_1",
        "sublocality_level_2",
        "sublocality_level_3",
        "sublocality_level_4",
      ],
      country: ["country"],
    };

    let address = {
      street_number: "",
      postal_code: "",
      street: "",
      province: "",
      city: "",
      country: "",
    };

    address_components.forEach((component) => {
      for (var shouldBe in ShouldBeComponent) {
        if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
          if (shouldBe === "country") {
            address[shouldBe] = component.short_name;
          } else {
            address[shouldBe] = component.long_name;
          }
        }
      }
    });

    // Fix the shape to match our schema
    address.address = address.street_number + " " + address.street;
    delete address.street_number;
    delete address.street;
    if (address.country === "US") {
      address.state = address.province;
      delete address.province;
    }
    return address;
  };

  useEffect(() => {
    const func = async () => {
      const geocodeObj =
        value && value.value && (await geocodeByPlaceId(value.value.place_id));
      // console.log("geo Code  obj is", geocodeObj[0]?.geometry);
      dispatch(setLattitude(geocodeObj[0]?.geometry.viewport.Ya.hi));
      dispatch(setLongitude(geocodeObj[0]?.geometry.viewport.Ia.hi));
      getTopRatingData();
      const addressObject =
        geocodeObj && getAddressObject(geocodeObj[0].address_components);
      // console.log("addressObject", addressObject);
      setAddressObj(addressObject);
    };
    func();
  }, [value]);

  const userLat = useSelector(getLat);
  const userLong = useSelector(getLong);

  const getTopRatingData = () => {
    apicaller(
      `top-rated-pathology?longitude=${userLong}&latitude=${userLat}`,
      null,
      "get",
      null
    )
      .then((res) => {
        setIsLoading(false);
        setIsLoadingTwo(false);
        setTopRating(res.data.pathology);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  useEffect(() => {
    if (!userLat) setModalLocation(true);
    if (userLat) setModalLocation(false);
  }, [userLong]);

  const changeLocation = () => {
    getTopRatingData();
    const addr = value && value.label;
    dispatch(setMyAddress(addr));
  };

  return (
    <>
      <HomeImgCarousel />
      <LocationModal
        show={modalLocationShow}
        onHide={() => setModalLocation(false)}
      />
      <Container>
        <Row id="homefloat2">
          <div id="homefloat">
            Find a walk-in lab location near you, view hours, make payment and
            make appointments in few clicks.
          </div>
          <div>My Current Location : {myAddress}</div>
          <Col md={11} style={{ marginTop: 15 }}>
            <div>
              <GooglePlacesAutocomplete
                apiKey="AIzaSyCbX0Bznd0JJMjt3aw4yc4wYlx9s-pA13I"
                selectProps={{
                  value,
                  onChange: setValue,
                  placeholder: "Please Select Your Location",
                  isClearable: true,
                }}
                onPlaceSelected={(place) => {
                  // console.log("Lat", place.geometry.location.lat());
                  // console.log("Lng", place.geometry.location.lng());
                }}
                // onLoadFailed={(error) =>
                //   console.error("Could not inject Google script", error)
                // }
              />
            </div>
          </Col>

          <Col md={1} style={{ marginTop: 15 }}>
            <Button id="homefloat3" onClick={changeLocation} disabled={!value}>
              {" "}
              {/* {isLoadingTwo && <Spinner size="sm" />} */}
              Go
            </Button>
          </Col>
        </Row>
        <Row className="Homepage_title">
          <Col md="3" xs="0">
            {" "}
          </Col>
          <Col md="6" xs="0">
            {" "}
            Top Labs Near You
          </Col>
        </Row>
        <Row className="Homepage_toprateddesciption">
          <Col md="1" xs="0">
            {" "}
          </Col>
          <Col md="10" xs="0"></Col>
        </Row>
      </Container>
      {!isLoading && topRating?.length === 0 && userLong && (
        <h1 id="homefloat7">Ooopss!!! No Labs Available near You</h1>
      )}

      {userLong && (
        <Container>
          <Row className="Homepage_cardarrange">
            {topRating.map((item, i) => (
              <Col md="3" xs="12" key={i}>
                {" "}
                <Homecardcomp
                  number={i + 1}
                  labname={item.lab_name}
                  img={
                    item.lab_img[0]?.img ? item.lab_img[0]?.img : homecardimg
                  }
                  getDetails={() =>
                    navigate("/labdetails", { state: { id: item._id } })
                  }
                  text="View Details"
                  // img={homecardimg}
                />
              </Col>
            ))}
            {/* <Col>
            <Homecardcomp
              // number={i + 1}
              // labname={item.lab_name}
              // img={item.lab_img[0]?.img}
              text="View All"
              getDetails={() => navigate("/lab")}
              // img={homecardimg}
            />
          </Col> */}

            {topRating.length !== 0 && (
              <Col md="3" xs="12" id="homefloat4">
                <Link to={"/Lab"} style={{ textDecoration: "none" }}>
                  <div id="homefloat6">
                    <div>View More</div>
                    <div id="homefloat5">
                      <BsArrowRight />
                    </div>
                  </div>
                </Link>
              </Col>
            )}
            {/* <Col md="3" xs="12">
            {" "}
            <Homecardcomp
              Number="2"
              Labname="Bhubaneswar Testing Lab - 2"
              img={}
            />{" "}
          </Col>
          <Col md="3" xs="12">
            {" "}
            <Homecardcomp
              Number="3"
              Labname="Bhubaneswar Testing Lab - 3"
              img={}
            />{" "}
          </Col>
          <Col md="3" xs="12">
            {" "}
            <Homecardcomp
              Number="4"
              Labname="Bhubaneswar Testing Lab - 4"
              img={}
            />{" "}
          </Col> */}
          </Row>
        </Container>
      )}
      <Homecompfour />
      <Homecompfive />
    </>
  );
}

export default Home;
