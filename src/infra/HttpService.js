import axios from "axios";
import HttpResponseService from "./HttpResponseService.js";
import config from "config";

class HttpService {

  axiosConfig = {};

  isLoggerEnabled = false;
  isExceptionToBeThrownWhenAPIFailed = false;
  responseTransformerCallback = null;

  constructor(url) {
    this.initAxiosConfig();
    this.axiosConfig.url = url;
  }

  initAxiosConfig() {
    this.axiosConfig = {
      method: "",
      url: "",
      params: {
      },
      headers: {},
    };
  }

  setPath(paths) {
    const pathValue = (typeof paths === "string") ? paths : paths.join("/");
    this.axiosConfig.url += `/${pathValue}`;
    return this;
  }

  setQueryStr(items) {
    let queryStr = "";
    for (const key in items) {
      queryStr += `${key}=${items[key]}&`;
    }
    this.axiosConfig.url += `?${queryStr}`;
    return this;
  }

  setKlooAPIBaseUrl() {
    this.axiosConfig.url = config.get("base_url") + "/api";
    return this;
  }

  setIsExceptionToBeThrownWhenAPIFailed(isExceptionToBeThrownWhenAPIFailed) {
    this.isExceptionToBeThrownWhenAPIFailed = isExceptionToBeThrownWhenAPIFailed;
    return this;
  }

  enableLogger() {
    this.isLoggerEnabled = true;
    return this;
  }

  setResponseTransformerCallback(callback) {
    this.responseTransformerCallback = callback;
    return this;
  }

  setPayload(payload) {
    this.axiosConfig.data = payload;
    return this;
  }

  setHeaders(headers) {
    this.axiosConfig.headers = { ...this.axiosConfig.headers, ...headers };
    return this;
  }

  setFormDataAsHeader() {
    this.axiosConfig.headers = {
      ...this.axiosConfig.headers, "Content-Type": "multipart/form-data"
    };
    return this;
  }

  setBearerToken(token) {
    this.axiosConfig.headers = { ...this.axiosConfig.headers, "Authorization": `Bearer ${token}` };
    return this;
  }

  setQueryString(queryStringObj) {
    this.axiosConfig.params = queryStringObj;
    return this;
  }

  async get() {
    this.axiosConfig.method = "get";
    const response = await this.call();
    return response;
  }

  async post(payload) {
    this.axiosConfig.method = "post";
    this.setPayload(payload);
    const response = await this.call();
    return response;
  }

  async put(payload) {
    this.axiosConfig.method = "put";
    this.setPayload(payload);
    const response = await this.call();
    return response;
  }

  async delete(payload) {
    this.axiosConfig.method = "delete";
    this.setPayload(payload);
    const response = await this.call();
    return response;
  }

  async patch(payload) {
    this.axiosConfig.method = "patch";
    this.setPayload(payload);
    const response = await this.call();
    return response;
  }

  async call() {
    let axiosResponse = null;
    try {
      const result = await axios(this.axiosConfig);
      this.initAxiosConfig();
      axiosResponse = result;
    } catch (error) {
      this.initAxiosConfig();
      axiosResponse = error;
      axiosResponse.isError = true;
    } finally {
      if (this.isLoggerEnabled) {
        console.log(axiosResponse);
      }
      const result = HttpResponseService(axiosResponse, this.responseTransformerCallback);
      if (this.isExceptionToBeThrownWhenAPIFailed) {
        throw new Error("There is an error while calling an api", result);
      }
      return result;
    }
  }
}

export default (url) => new HttpService(url);