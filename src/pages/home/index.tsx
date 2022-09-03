import { faHomeAlt, faShop, faTag } from "@fortawesome/free-solid-svg-icons";
import DetailCard from "components/common/DetailCard";
import LineChart from "components/home/LineChart";
import SensorTable from "components/home/Table";
import { Col, Row } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";

function Index() {
  return (
    <>
      <Row className="justify-content-center mt-3">
        <Col sm="4">
          <DetailCard text="Total sensor" icon={faShop} />
        </Col>
        <Col sm="4">
          <DetailCard text="Total sensor" icon={faTag} />
        </Col>
        <Col sm="4">
          <DetailCard text="Total sensor" icon={faHomeAlt} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col sm="12">
          <LineChart />
        </Col>
      </Row>{" "}
      <Row className="justify-content-center mt-3">
        <Col sm="12" style={{height:"35vh"}}>
          <PerfectScrollbar>
            
            <SensorTable />
          </PerfectScrollbar>
        </Col>
      </Row>
    </>
  );
}

export default Index;
