export const ADD_SENSOR = "http://localhost:3009/sensor";
export const EDIT_SENSOR = (id: string) => `http://localhost:3009/sensor/${id}`;
export const GET_SENSOR_DETAIL = (id: string) =>
  `http://localhost:3009/sensor/${id}`;
export const GET_SENSOR = "http://localhost:3009/sensor";
export const GET_SENSOR_STATES = "http://localhost:3009/sensor/stats";
export const GET_SENSOR_WEEKLY = (id: string) =>
  `http://localhost:3009/sensor/${id}/stats/weekly`;
  export const GET_SENSOR_WEEKLY_AVG = (id: string) =>
    `http://localhost:3009/sensor/${id}/stats/weekly_avg`;
export const GET_SENSOR_LOGS = (id: string) =>
  `http://localhost:3009/sensor/${id}/logs`;
export const GET_SENSOR_EVENTS = (id: string) =>
  `http://localhost:3009/sensor/${id}/events`;