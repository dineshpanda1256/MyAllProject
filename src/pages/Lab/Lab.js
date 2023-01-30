import React, { useEffect, useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Labcard from "../../components/Labcardcomponent/Labcardcomponent";
import Loader from "../../components/Loader/Loader";
import { getLat, getLong } from "../../Redux/Slice/userSlice";
import { apicaller } from "../../utils/api";
import "./Lab.css";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";

export default function Lab() {
  const [labData, setLabData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchFilterData, setSearchFilterData] = useState([]);
  const [filterVal, setFilterVal] = useState();
  const [filterData, setFilterData] = useState([]);

  const lat = useSelector(getLat);
  const long = useSelector(getLong);

  const navigate = useNavigate();

  useEffect(() => {
    getLabData();
  }, []);

  const getLabData = () => {
    apicaller(
      `near-by-pathology?longitude=${long}&latitude=${lat}`,
      null,
      "get",
      null
    )
      .then((res) => {
        setIsLoading(false);
        setLabData(res.data.pathology);
        setSearchFilterData(res.data.pathology);
        setFilterData(res.data.pathology);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  // searchbar function start
  const handleFilter = (e) => {
    setFilterVal(e.target.value);
    if (e.target.value === " ") {
      setFilterData(searchFilterData);
    } else {
      const filterResult = searchFilterData.filter((item) =>
        item?.lab_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilterData(filterResult);
    }
  };
  // searchbar function end

  return (
    <Container>
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
        <Container>
          <Row id="searchbar1">
            <Col md={12} lg={12} xs={12} sm={12}>
              <Form className="d-flex">
                <InputGroup id="searchbar3">
                  <Form.Control
                    id="searchbar5"
                    type="search"
                    placeholder="Search for a lab"
                    className="me-2"
                    value={filterVal}
                    onChange={(e) => handleFilter(e)}
                  />
                  <span>
                    <Icon icon={search} id="searchbar4" />
                  </span>
                </InputGroup>
              </Form>
            </Col>
          </Row>

          {labData?.length === 0 && (
            <div id="lab3">Ooopss!!! No Labs Available near You</div>
          )}

          {labData?.length === 0
            ? null
            : filterData?.length === 0 && (
                <div id="searchbar6">No Record Found</div>
              )}

          <Row>
            {filterData?.map((item, i) => (
              <Col md={6} xs={12} key={i}>
                <Labcard
                  Dignosticsname={item?.lab_name}
                  timeopening={item?.time_start}
                  timeclosing={item?.time_end}
                  weekstart={item?.week_start}
                  weekend={item?.week_end}
                  testtype={item?.specialization}
                  ratinA={item?.rating_avg}
                  facilities={item?.facilities.join()}
                  viewLabDetails={() => {
                    navigate("/labdetails", { state: { id: item._id } });
                  }}
                />
              </Col>
            ))}
            {/* <Col md={6} xs={12}>
          <Labcard
            Dignosticsname="RAJDHANI DIAGNOSTICS"
            timeopening="7AM"
            timeclosing="7.30PM"
            week="Wednesday"
            testtype="Pathology"
          />
        </Col>
        <Col md={6} xs={12}>
          <Labcard
            Dignosticsname="RAJDHANI DIAGNOSTICS"
            timeopening="7AM"
            timeclosing="7.30PM"
            week="Wednesday"
            testtype="Pathology"
          />
        </Col>
        <Col md={6} xs={12}>
          <Labcard
            Dignosticsname="RAJDHANI DIAGNOSTICS"
            timeopening="7AM"
            timeclosing="7.30PM"
            week="Wednesday"
            testtype="Pathology"
          />
        </Col>
        <Col md={6} xs={12}>
          <Labcard
            Dignosticsname="RAJDHANI DIAGNOSTICS"
            timeopening="7AM"
            timeclosing="7.30PM"
            week="Wednesday"
            testtype="Pathology"
          />
        </Col>
        <Col md={6} xs={12}>
          <Labcard
            Dignosticsname="RAJDHANI DIAGNOSTICS"
            timeopening="7AM"
            timeclosing="7.30PM"
            week="Wednesday"
            testtype="Pathology"
          />
        </Col> */}
          </Row>

          {/* <Row>
        <Col></Col>
        <Col md={2}>
          <div id="lab1">Show More</div>
        </Col>
        <Col></Col>
      </Row> */}
        </Container>
      )}
    </Container>
  );
}
