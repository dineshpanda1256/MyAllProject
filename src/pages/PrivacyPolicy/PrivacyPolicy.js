import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PrivacyPolicy.css";
import { apicaller } from "../../utils/api";

export default function Terms() {
  const [policyData, setPolicyData] = useState([]);
  useEffect(() => {
    getPolicyData();
  }, []);

  const getPolicyData = () => {
    apicaller("get-privacy", null, "get", null)
      .then((res) => {
        setPolicyData(res.data.privacy);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <div>
      <Container style={{ minHeight: "50vh" }}>
        {policyData?.map((list) => (
          <Row>
            <Col>
              <div id="privacyone">{list?.title}</div>
              <div id="privacytwo">{list?.description}</div>
              {/* <div id="privacythree">
                In these Terms, ‘us’, ‘we’ and ‘our’ means the Company, and
                ‘you’ means an Employer or User as defined below.
              </div> */}
            </Col>
          </Row>
        ))}
        {/* <Row>
          <Col>
            <div id="privacyfour">No representation or warranty in relation to services</div>
            <div id="privacyfive">
              The Site is a platform where users (Users) may complete
              company-sponsored online learning programs (Online Programs)
              posted by course providers (Course Providers). The Company makes
              no representation, undertaking or warranty whatsoever as to:
            </div>
            <div id="privacysix">No representation or warranty in relation to services</div>
            <div id="privacyseven">
              whether the Online Programs will be helpful, useful, suitable,
              appropriate or otherwise beneficial to the User; any connection
              between the User completing an Online Program and the User
              securing employment as a result of completing the Online Program;
              and the accuracy, validity, legality, quality or applicability of
              the content of the Site, including any content in the Online
              Programs. To the maximum extent permitted by law, Forage will not
              be liable for any claims or damages that may arise in connection
              to the Online Programs.
            </div>
            <div id="privacyeight">
              By accessing and/or using the Site or its related products or
              services, you hereby release and agree to hold harmless Forage,
              its directors, shareholders, members, successors, advisors, the
              Course Providers and any other corporate or not-for-profit
              partners from any and all causes of action, claims of any nature
              and damages resulting from the Site.
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="privacynine">Registration for Online Programs </div>
            <div id="privacyten">
              You must be a registered user to complete an Online Program.
            </div>
            <div id="privacyitem1">
              When you register and activate your account, you may provide us
              with personal information including but not limited to your name,
              email address, details regarding your education, place of
              employment, previous work history, and current work status /
              preferences. You must ensure that this information is accurate and
              current. We will handle all personal information we collect in
              accordance with our Privacy Policy (which can be accessed at
              www.theforage.com/privacy).
            </div>
            <div id="privacyitem2">
              When you register and activate your account, you will need to
              create a user name and password. You are responsible for keeping
              this user name and password secure and are responsible for all use
              and activity carried out under this user name.
            </div>
          </Col>
        </Row> */}
        {/* 
        <Row>
          <Col>
            <div id="privacyitem3">To create an account, you must be:</div>
            <div id="privacyitem4">
              at least 16 years of age (or, if you are under 16 years of age,
              you must have permission from your parent or legal guardian to
              create an account); possess the legal right and ability to enter
              into a legally binding agreement with us; and agree and warrant to
              use the Site in accordance with these Terms. Collection Notice.
            </div>
            <div id="privacyitem4">
              We collect personal information about you in order to process your
              registration, to enable you to complete Online Programs if you are
              a User, to enable you to access the enterprise system if you are a
              Course Provider and for purposes otherwise set out in our Privacy
              Policy (available at www.theforage.com/privacy).
            </div>
            <div id="privacyitem5">
              We may disclose that information to third parties that help
              facilitate the provision of services (including information
              technology suppliers, communication suppliers and our business
              partners) or as required by law. In particular, where you provide
              consent to share your personal data with a Course Provider as part
              of the process of enrolling in that Course Provider’s program, we
              may:
            </div>
            <div id="privacyitem6">
              provide your personal information to that Employer to allow them
              to review your profile and contact you about job opportunities or
              networking programs; and provide any work you complete as part of
              the Online Program to the Course Provider sponsoring that Online
              Program.
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}
