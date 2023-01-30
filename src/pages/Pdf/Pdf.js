import React from "react";
import JsPDF from "jspdf";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import "./Pdf.css";
import axios from "axios";
import { useEffect } from "react";
import { apicaller } from "../../utils/api";
import { useState } from "react";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import logo from "../../assets/NovaLogo.png";

export default function Pdf() {
  const [pdfdata, setPdfdata] = useState();
  const location = useLocation();
  const id = location.state?.id;
  // console.log(location);

  useEffect(() => {
    getpdfdata();
  }, []);

  const getpdfdata = () => {
    apicaller(`report/${id}`, null, "get", null)
      .then((res) => {
        setPdfdata(res.data);
        // console.log("response is ", res.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const generatePDF = () => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.querySelector("#report")).then(() => {
      report.save("report.pdf");
    });
  };

  function printpage() {
    //Get the print button and put it into a variable
    var printButton = document.getElementById("printpagebutton");
    var downloadButton = document.getElementById("downloadpagebutton");

    //Set the print button visibility to 'hidden'
    printButton.style.visibility = "hidden";
    downloadButton.style.visibility = "hidden";
    //Print the page content
    window.print();
    //Set the print button to 'visible' again
    //[Delete this line if you want it to stay hidden after printing]
    printButton.style.visibility = "visible";
    downloadButton.style.visibility = "visible";
  }

  return (
    <div id="pdfwrapperdiv">
    <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        {" "}
        <Button
          id="downloadpagebutton"
          onClick={() => generatePDF()}
          type="button"
        >
          Download Report
        </Button>
        {/* <Button onClick={() =>window.print()}  type="button">View My Report</Button> */}
        {/* <Button onClick={() => printpage()} id="printpagebutton" type="button">
          Print Report
        </Button> */}
      </div>

      <div id="report">
        
        <div id="pdf11">
          <div>
            <Image src={logo} style={{ margin: 20, width: 60 }} />
          </div>
          <div id="pdf7">LABORATORY &nbsp; REPORT</div>
          <div id="pdf12">
          <div>info@novaprolabs.com </div>
          <div>+16783040395 </div>
          
          </div>
          
      
        </div>
        <div id="pdf16"> </div>
        <div id="pdf13"> </div>
        <div id="pdf6">Patient Information</div>
        <div id="pdf13"> </div>
        <div id="pdf9">
          <Row id="rg5">
            <Col>
              <div id="rg7">
                <span  style={{fontSize:"14px"}}id="rg6">Patient Name :</span>{" "}
                {pdfdata?.booking_for_other
                  ? pdfdata?.booking_for_other?.employe_user_name
                  : pdfdata?.user?.first_name + " " + pdfdata?.user?.last_name}
              </div>
              <div id="rg7">
                <span  style={{fontSize:"14px"}}id="rg6">Age/sex :</span>{" "}
                {pdfdata?.booking_for_other
                  ? new Date().getFullYear() -
                    new Date(
                      pdfdata?.booking_for_other?.employe_user_dob
                    ).getFullYear()
                  : new Date().getFullYear() -
                    new Date(pdfdata?.user?.dob).getFullYear()}{" "}
                /{" "}
                <span>
                  {pdfdata?.booking_for_other
                    ? pdfdata?.booking_for_other?.employe_user_gender
                    : pdfdata?.user?.gender}{" "}
                </span>
              </div>
              <div id="rg7">
                <span  style={{fontSize:"14px"}} id="rg6">Email :</span>
                {pdfdata?.booking_for_other
                  ? pdfdata?.booking_for_other?.employe_user_email
                  : pdfdata?.user?.email}
              </div>

              <div id="rg7">
                <span  style={{fontSize:"14px"}}id="rg6">Organization : </span>
                {pdfdata?.user?.organization_name
                  ? pdfdata?.user?.organization_name
                  : "N/A"}
              </div>
            </Col>
            <Col>
              <div id="rg7">
                <span style={{fontSize:"14px"}} id="rg6">Case No : </span>
                {pdfdata?.case_number}
              </div>
              <div id="rg7">
                {/* <span id="rg6">Collected on :</span>{pdfdata.createdAt} */}
                <span  style={{fontSize:"14px"}} id="rg6">Booked on :</span>
                {new Date(pdfdata?.createdAt)?.toLocaleString()}
              </div>
              <div id="rg7">
                {/* <span id="rg6">Received on :</span>{pdfdata.lab_test_id[0].createdAt} */}
                <span style={{fontSize:"14px"}} id="rg6">Contact Number :</span>
                {pdfdata?.booking_for_other
                  ? pdfdata?.booking_for_other?.employe_user_phone
                  : pdfdata?.user?.phone_number}
              </div>
            </Col>
            <Col md={3}></Col>
            <Col md={4}></Col>
          </Row>
        </div>
        <div style={{ paddingLeft:0 }}>
          <div id="pdf6">Pathology Details</div>
          <div id="pdf13"></div> 
          <div style={{ paddingLeft:14, fontSize:'14px' }}>Name : {pdfdata?.pathology_id?.lab_name}</div>
          <div style={{ paddingLeft:14, fontSize:'14px' }}>Email : {pdfdata?.pathology_id?.email}</div>
          <div style={{ paddingLeft:14 , fontSize:'14px' }}>Phone No. : {pdfdata?.pathology_id?.phone_number}</div>
        </div>

        <div>
          <div id="pdf6">Test (s) requested</div>
          <div id="pdf13"></div> 
          <div id="pdf9">
            <div id="pdf8">{pdfdata?.lab_test_id?.test_name} </div>
          </div>
        </div>

        {/* TODO: render test name */}

        {/* <div id="pdf3">
          <div>
            <div id="pdf5">TestedFor</div>
            <div id="pdf10">Alcohol - Ethy</div>
            <div id="pdf10">Alcohol - Ethy</div>
          </div>
        </div> */}

        {/* Report Table Data Start  */}

        <div id="pdf6">Test Result : </div>
        <div id="pdf13"></div> 
        
        <div id="pdf3">
          <div id="pdf5">Sl. No.</div>
          <div id="pdf5">Name</div>
          <div id="pdf5">Value</div>
        </div>

        <div>
          {pdfdata?.gross_examination?.map((item, i) => (
            <div id="pdf3" key={i}>
              <div id="pdf10">{i + 1}</div>
              <div id="pdf10">{item?.reportName}</div>
              <div id="pdf10">{item?.reportValue}</div>
            </div>
          ))}
          
        </div>
        <div id="pdf15"> </div>
        <div id="pdf17"></div>
        <div id="pdf14"> Online report generated from Novaprolabs.com | Novaprolabs Pvt. Ldt. <br/> 1509 Lady St, Columbia, SC 29201, USA</div>
        {/* Report Table Data End  */}
      </div>
      
    </div>
   
    </div>
  );
}
