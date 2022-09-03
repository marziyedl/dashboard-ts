import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, Col, Row } from "reactstrap";

function SensorDetail() {
  return (
    <section className="p-3">
      <FontAwesomeIcon size="2x" icon={faBackward} />
      <span className="fs-2 ms-4">Sensor-488</span>
      <Row>
        <Col md="6">
          <Card className="mt-3">
            <CardBody className="p-0">
              <div className="p-3 d-flex justify-content-between border-bottom">
                <span>
                  fdr
                  <p>etftf</p>
                </span>
                <span>fdr</span>
              </div>
              <div className="p-3 d-flex justify-content-between border-bottom">
                <span>
                  fdr
                  <p>etftf</p>
                </span>
                <span>fdr</span>
              </div>
              <div className="p-3 d-flex justify-content-between">
                <span>
                  fdr
                  <p>etftf</p>
                </span>
                <span>fdr</span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          {" "}
          <Card>cart</Card>
        </Col>
      </Row>
    </section>
  );
}

export default SensorDetail;
