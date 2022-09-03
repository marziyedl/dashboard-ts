import { faDesktop, faShop, faTag } from "@fortawesome/free-solid-svg-icons";
import DetailCard from "components/common/DetailCard";
import LineChart from "components/home/LineChart";
import SensorTable from "components/home/Table";
import { Col, Row } from "reactstrap";

function Index() {
  return (
    <>
      <Row className="justify-content-center mt-3">
        <Col sm="4">
          <DetailCard number={182} text="Total sensor" icon={faShop} />
        </Col>
        <Col sm="4">
          <DetailCard number={2} text="open alerts" icon={faTag} />
        </Col>
        <Col sm="4">
          <DetailCard number={14} text="Total customer" icon={faDesktop} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col sm="12">
          <LineChart />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col sm="12" style={{ height: "30vh" }}>
          <SensorTable />
        </Col>
      </Row>
    </>
  );
}

export default Index;
