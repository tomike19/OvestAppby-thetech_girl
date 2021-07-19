import { useState, useEffect } from "react";
import axios from "axios";
import { store } from "../redux/store";

const baseUrl = "https://ovest.paym.com.ng/api/user";

function select(state) {
  return state.user ? state.user.token : "";
}

function listener() {
  let token = select(store.getState());
  // TODO: Store this in a cookie
  localStorage.authToken = token;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
store.subscribe(listener);

const handleError = (error) => {
  let errorResponseData;
  let status;

  if (error.response !== undefined) {
    errorResponseData = error.response.data;
    status = error.response.status;
  } else if (error.data !== undefined) {
    errorResponseData = error.data;
    status = error.status;
  } else {
    return { statusCode: 500, status: "error", message: error.message };
  }
  return { statusCode: status, ...errorResponseData };
};
function setHeaders(headers = false) {
  let headerData = {
    "content-type": "application/json",
    Accept: "application/json",
    // "Content-type": "multipart/form-data",
  };
  if (headers) {
    headerData = { ...headerData, ...headers };
  }
  return headerData;
}

function setBody(method, data) {
  if (method === "get" || method === "delete") {
    return { params: data };
  } else {
    return { data: data };
  }
}

function setUrl(url) {
  return `${baseUrl}/${url}`;
}
function callApi(url, data, method, header) {
  let headers = setHeaders(header);
  let body = setBody(method, data);
  let apiUrl = setUrl(url);

  return new Promise((resolve, reject) => {
    axios({
      url: apiUrl,
      ...body,
      headers: headers,
      method: method,
    })
      .then((data) => {
        resolve({ statusCode: data.status, ...data });
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
}

export const apiGet = (url, data, header = false) => {
  return callApi(url, data, "get", header);
};

export const apiPost = (url, data, header = false) => {
  return callApi(url, data, "post", header);
};
export const apiPatch = (url, data, header = false) => {
  return callApi(url, data, "patch", header);
};

export const apiPut = (url, data, header = false) => {
  return callApi(url, data, "put", header);
};

export const apiDelete = (url, data, header = false) => {
  return callApi(url, data, "delete", header);
};

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        await setResponse(data);
        setIsLoading(false);
      } catch (error) {
        await setError(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { response, error, isLoading };
};
