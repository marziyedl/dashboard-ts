import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ButtonWithText } from "components/common/button/ButtonWithText";
import FieldInput from "components/common/fields/FieldInput";
import FieldRadio from "components/common/fields/FieldRadio";
import Loading from "components/common/Loading";
import { Form, Formik } from "formik";
import { UseGetDetails, UsePost, UsePut } from "hooks";
import { useSchema } from "hooks/other/useSchema";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";
import { GET_SENSOR_DETAIL } from "utils/APIUrls";
import { IusePut } from "utils/types";
import { EDIT_SENSOR } from "../../utils/APIUrls";

type FormValueType = {
  customer: string;
  location: string;
  min_temp_limit: number;
  monitor_min_temp: boolean;
  max_temp_limit: number;
  monitor_max_temp: boolean;
};

function EditSensor() {
  const navigate = useNavigate();
  const { id = "" } = useParams();
  const [putData, setPutData] = useState<IusePut>({
    url: "",
    callBack: () => {},
    body: {},
    hideToast: false,
    onError: () => {},
    Trigger: false,
  });
  const { editLoading } = UsePut(putData);
  const { loading, result }: any = UseGetDetails(`${GET_SENSOR_DETAIL(id)}`);

  const editSensor = (values: FormValueType) => {
    setPutData({
      url: EDIT_SENSOR(id),
      callBack: () => {},
      body: { ...values },
      hideToast: true,
      onError: () => {},
      Trigger: true,
    });
  };
  const { addSensorValidation } = useSchema();
  return (
    <Card className="mt-5">
      <Row className="p-3">
        <Col sm="8">
          <h2 className="border-bottom">edit Sensor</h2>
        </Col>
        <Col sm="4">
          <h2 className="border-bottom">Alert</h2>
        </Col>
      </Row>
      <CardBody>
        {!loading ? (
          <Formik
            initialValues={{
              customer: result.result.customer,
              location: result.result.location,
              min_temp_limit: 0,
              monitor_min_temp: false,
              max_temp_limit: 0,
              monitor_max_temp: false,
            }}
            validationSchema={addSensorValidation}
            onSubmit={(values) => editSensor(values)}
          >
            <Form
              autoComplete="off"
              className="flex-column justify-content-around"
            >
              <Row className="justify-content-between">
                <Col sm="8">
                  <FieldInput
                    type="text"
                    disabled={editLoading}
                    className="col-6"
                    placeholder="Customer"
                    name="customer"
                  />
                  <FieldInput
                    type="text"
                    disabled={editLoading}
                    className="col-6"
                    placeholder="Location"
                    name="location"
                  />
                </Col>

                <Col sm="4">
                  <FieldInput
                    type="text"
                    disabled={editLoading}
                    className="col-10"
                    placeholder="Min temp. Threshold"
                    name="min_temp_limit"
                  />
                  <FieldRadio
                    dataOption={{
                      name: "monitor_min_temp",
                      value: false,
                      label: "Monitor min tempreture",
                    }}
                    disabled={false}
                  />
                  <FieldInput
                    type="text"
                    disabled={editLoading}
                    className="col-10"
                    placeholder="Max temp. Threshold"
                    name="max_temp_limit"
                  />
                  <FieldRadio
                    dataOption={{
                      name: "monitor_max_temp",
                      value: false,
                      label: "Monitor max tempreture",
                    }}
                    disabled={false}
                  />
                </Col>
              </Row>
              <Row className="mt-3 pt-3 border-top">
                <ButtonWithText
                  mode="submit"
                  type="primary"
                  className="me-2 col-2"
                  text="Add sensor"
                  disabled={editLoading}
                  loading={editLoading}
                />
                <ButtonWithText
                  onClick={() => navigate("/")}
                  type="danger"
                  className="col-2"
                  text="Cancel"
                  disabled={editLoading}
                  loading={editLoading}
                />
              </Row>
            </Form>
          </Formik>
        ) : (
          <Loading />
        )}
      </CardBody>
    </Card>
  );
}

export default EditSensor;
