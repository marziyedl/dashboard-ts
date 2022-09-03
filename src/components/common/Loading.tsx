import React from "react";
import { Row, Spinner, Col, Card } from "reactstrap";

function Loading() {
  return (
    <Row>
      <Col lg="12">
        <Card className="align-items-center border-0">
          <Spinner></Spinner>
        </Card>
      </Col>
    </Row>
  );
}

export default Loading;
