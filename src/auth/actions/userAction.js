import axios from "axios";

export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  // axios
  //   .post("http://ovest.paym.com.ng/api/user/login", credentials, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //   .then((response) => {
  //     const { data } = response;

  //     console.log(response);
  //   })
  //   .catch((err) => console.error(err));

  axios
    .post("http://bulksmsnigeria.test/api/v2/balance/get", credentials, {
      headers: {
        "Content-Type": "application/json",
        api_token:
          "7QKagTsw2ZtNVOTFDTFwNzh6wymr1zJByAv8xvkgfEywY2ky9j4mh8Uzw5c1",
      },
    })
    .then((response) => {
      const { data } = response;

      console.log(response);
    })
    .catch((err) => console.error(err));
};

export const signUpUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {};
export const logoutUser = () => {};
