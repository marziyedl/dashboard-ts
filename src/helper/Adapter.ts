import axios from "axios";
import { ErrorHandlerAdaptor } from "./ErrorHandlerAdaptor";
import { ResponseType } from "../utils/types";

const qs = require("qs");

export const Adapter = axios.create({
  timeout: 30000,
  paramsSerializer: function (params: any) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

Adapter.interceptors.response.use(
  (response: ResponseType) => {
    return response;
  },
  async (error: any) => {
    ErrorHandlerAdaptor(error);
    return Promise.reject(error);
  },
);
