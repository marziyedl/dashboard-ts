import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ButtonWithText } from "components/common/button/ButtonWithText";
import FieldInput from "components/common/fields/FieldInput";
import FieldRadio from "components/common/fields/FieldRadio";
import { Form, Formik } from "formik";
import { UsePost } from "hooks";
import { useSchema } from "hooks/other/useSchema";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardFooter, CardTitle, Col, Row } from "reactstrap";
import { ADD_SENSOR } from "utils/APIUrls";
import { IusePost } from "utils/types";

type FormValueType = {
  customer: string;
  location: string;
  min_temp_limit: number;
  monitor_min_temp: boolean;
  max_temp_limit: number;
  monitor_max_temp: boolean;
};
const initialValue: FormValueType = {
  customer: "",
  location: "",
  min_temp_limit: 0,
  monitor_min_temp: false,
  max_temp_limit: 0,
  monitor_max_temp: false,
};

const AddSensor = () => {
  const navigate = useNavigate();
  const { addSensorValidation } = useSchema();

  const [postData, setPostData] = useState<IusePost>({
    url: "",
    callBack: () => {},
    body: {},
    hideToast: true,
    onError: () => {},
  });
  const { postLoading } = UsePost(postData);

  const addSensor = (values: FormValueType) => {
    setPostData({
      url: ADD_SENSOR,
      callBack: () => {
        navigate("/");
      },
      body: { ...values },
      hideToast: true,
      onError: () => {},
    });
  };
  return (
    <Card className="mt-5">
      <Row className="p-3">
        <Col sm="8">
          <h2 className="border-bottom">New Sensor</h2>
        </Col>
        <Col sm="4">
          <h2 className="border-bottom">Alert</h2>
        </Col>
      </Row>
      <CardBody>
        <Formik
          initialValues={{ ...initialValue }}
          validationSchema={addSensorValidation}
          onSubmit={(values) => addSensor(values)}
        >
          <Form
            autoComplete="off"
            className="flex-column justify-content-around"
          >
            <Row className="justify-content-between">
              <Col sm="8">
                <FieldInput
                  type="text"
                  disabled={postLoading}
                  className="col-6"
                  placeholder="Customer"
                  name="customer"
                />
                <FieldInput
                  type="text"
                  disabled={postLoading}
                  className="col-6"
                  placeholder="Location"
                  name="location"
                />
              </Col>

              <Col sm="4">
                <FieldInput
                  type="text"
                  disabled={postLoading}
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
                  disabled={postLoading}
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
                disabled={postLoading}
                loading={postLoading}
              />
              <ButtonWithText
                onClick={() => navigate("/")}
                type="danger"
                className="col-2"
                text="Cancel"
                disabled={postLoading}
                loading={postLoading}
              />
            </Row>
          </Form>
        </Formik>
      </CardBody>
    </Card>
  );
};

export default React.memo(AddSensor);
