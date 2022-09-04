import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, Col, Row } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { GET_SENSOR_DETAIL } from "utils/APIUrls";
import { UseGetDetails } from "hooks";
import Loading from "components/common/Loading";
import WeeklyLineChart from "components/sensor/WeeklyLineChart";
import EventTimeline from "components/sensor/EventTimeline";
import ActivityCard from "components/sensor/ActivityCard";
import WeeklyAreaChart from "components/sensor/WeeklyAreaChart";

type resultType = {
  device_id: string;
  last_online: string;
  last_temp: number;
  customer: string;
  location: string;
  overview: {
    total_messages: number;
    down_time: number;
    alerts: number;
  };
};
function SensorDetail() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { loading, result }: { loading: boolean; result: resultType } =
    UseGetDetails(`${GET_SENSOR_DETAIL(id)}`);

  return loading ? (
    <Loading />
  ) : (
    <section className="p-2">
      <FontAwesomeIcon
        size="2x"
        icon={faBackward}
        onClick={() => navigate(-1)}
      />
      <span className="fs-2 ms-4">Sensor-{result.device_id}</span>
      <Row>
        <Col md="6">
          <Card style={{ height: "30vh" }} className="mt-3">
            <CardBody className="p-0">
              <section className="p-3 d-flex justify-content-between border-bottom">
                <div>
                  <h6 className="text-uppercase">total meassages</h6>
                  <p>Total message this week</p>
                </div>
                <span className="display-6">
                  {result.overview?.total_messages}
                </span>
              </section>
              <section className="p-3 d-flex justify-content-between border-bottom">
                <div>
                  <h6 className="text-uppercase">down time</h6>
                  <p>Total down time</p>
                </div>
                <span className="display-6">{result.overview?.down_time}</span>
              </section>
              <section className="p-3 d-flex justify-content-between">
                <div>
                  <h6 className="text-uppercase">alerts</h6>
                  <p>System alerts this week</p>
                </div>
                <span className="display-6">{result.overview?.alerts}</span>
              </section>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card className="mt-3 p-2" style={{ height: "30vh" }}>
            <WeeklyAreaChart />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Card className="mt-3 p-2" style={{ height: "30vh" }}>
            <WeeklyLineChart />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Card className="mt-3 p-2" style={{ height: "20vh" }}>
            <EventTimeline />
          </Card>
        </Col>
        <Col md="6">
          <Card className="mt-3 p-2" style={{ height: "20vh" }}>
            <ActivityCard />
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default SensorDetail;
