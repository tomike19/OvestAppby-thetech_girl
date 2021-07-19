import axios from "axios";
import { merge } from "lodash";
import { Util } from "./util";

export class HTTPModule {
  constructor(config = {}) {
    this.config = config;
    this.$axios = axios.create(config);
  }
  updateRequestConfig(config) {
    this.config = merge(this.config, config);
    this.$axios = axios.create(this.config);
  }
  async request(config) {
    try {
      const { data } = await axios(config);
      return data;
    } catch (error) {
      Util.handleAxiosError(error);
    }
  }
  async get(url, config) {
    try {
      const { data } = await this.$axios.get(url, config);
      return data;
    } catch (error) {
      Util.handleAxiosError(error, url);
    }
  }
  async put(url, body, config) {
    try {
      const { data } = await this.$axios.put(url, body, config);
      return data;
    } catch (error) {
      Util.handleAxiosError(error, url);
    }
  }
  async post(url, body, config) {
    try {
      const { data } = await this.$axios.post(url, body, config);
      return data;
    } catch (error) {
      Util.handleAxiosError(error, url);
    }
  }
  async delete(url, config) {
    try {
      const { data } = await this.$axios.delete(url, config);
      return data;
    } catch (error) {
      Util.handleAxiosError(error, url);
    }
  }
  async patch(url, body, config) {
    try {
      const { data } = await this.$axios.patch(url, body, config);
      return data;
    } catch (error) {
      Util.handleAxiosError(error, url);
    }
  }
  async options(url, config) {
    try {
      const { data } = await this.$axios.options(url, config);
      return data;
    } catch (error) {
      Util.handleAxiosError(error, url);
    }
  }

  async mockCall(resolve) {
    return new Promise((res) => setTimeout(res, 200, resolve));
  }
}
