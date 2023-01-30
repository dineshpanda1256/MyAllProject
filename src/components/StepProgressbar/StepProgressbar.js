import React from "react";
import { Container, Row } from "react-bootstrap";
import "./StepProgressbar.css";
function StepProgressbar() {
  return (
    <div>
      <Container>
        <Row className="step-wizard">
          <ul className="step-wizard-list">
            <li className="step-wizard-item">
              <span className="progress-count">1</span>
              <span className="progress-label">Order Confirmed</span>
            </li>
            <li className="step-wizard-item ">
              <span className="progress-count">2</span>
              <span className="progress-label">Sample Collected</span>
            </li>
            <li className="step-wizard-item current-item">
              <span className="progress-count">3</span>
              <span className="progress-label">Test Completed</span>
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  );
}

export default StepProgressbar;
