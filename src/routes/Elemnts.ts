import React from "react";

export const Home = React.lazy(() => import("pages/home"));
export const AddSensor = React.lazy(() => import("pages/sensor/AddSensor"));
export const EditSensor = React.lazy(() => import("pages/sensor/EditSensor"));
