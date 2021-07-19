import {
  signUpSuccess,
  signInSuccess,
  signUpFailure,
  signUpStart,
  setCurrentUser,
  setUserToken,
  SignInStart,
  signInFailure,
  signOutSuccess,
  signUpGetCountries,
  signUpGetCountriesFailure,
  // signOutFailure
} from "../actions/auth.action";
import { apiPost, apiGet } from "../../helpers";

//Intern
export const SignUp = (user) => {
  return (dispatch) => {
    dispatch(signUpStart(user));
    return apiPost(`create`, user)
      .then((response) => {
        if (response.statusCode === 200) {
          console.log(response.data.message);
          dispatch(setCurrentUser(response.data.message.user));
          dispatch(setUserToken(response.data.message.token));
          dispatch(signUpSuccess(response.data.message));
          // setTimeout(function () {
          //   window.location.reload();
          // }, 3000);
          // window.location.href = "/dashboard";
        } else {
          dispatch(signUpFailure());
        }
      })
      .catch((e) => {
        dispatch(signUpFailure(e));
      });
  };
};




export const SignIn = (user) => {
  return (dispatch) => {
    dispatch(SignInStart(user));
    return apiPost(`login`, user)
      .then((response) => {
        const { data } = response.data;
        console.log(data);
        if (response.statusCode === 200) {
          dispatch(signInSuccess(data));
          dispatch(setCurrentUser(data.user));
          dispatch(setUserToken(data.access_token));

          setTimeout(() => {
            // window.location.href = "/dashboard";
          }, 1000);
        }
      })
      .catch((e) => {
        dispatch(signInFailure(e));
      });
  };
};

export const getCountries = () => {
	return (dispatch) => {
	  return apiGet(`countries`, )
		.then((response) => {
		  const { data } = response.data;
		  if (response.statusCode === 200) {
			dispatch(signUpGetCountries(data));
		  }
		})
		.catch((e) => {
		  dispatch(signUpGetCountriesFailure(e));
		});
	};
  };

//Recruiter

// export const UpdateUserCredentials = (updatedUserCredentials) => {
// 	return (dispatch) => {
// 		dispatch(editProfileStart(updatedUserCredentials));
// 		return apiPatch(`${updateIntern}/profile`, updatedUserCredentials)
// 			.then((res) => {
// 				if (res.statusCode === 200) {
// 					dispatch(editProfileSuccess(res.data.message));
// 					dispatch(getCompanyProfile());
// 				}
// 			})
// 			.catch((e) => {
// 				dispatch(editProfileFailure(e));
// 			});
// 	};
// };

// export const ForgotPasswordOperation = (userCredentials) => {
// 	return (dispatch) => {
// 		dispatch(forgotPasswordStart(userCredentials));
// 		return apiPost(`${auth}/forgot-password`, userCredentials)
// 			.then((res) => {
// 				if (res.statusCode === 200) {
// 					dispatch(forgotPasswordSuccess(res.data.message));
// 				}
// 			})
// 			.catch((e) => {
// 				dispatch(forgotPasswordFailure(e));
// 			});
// 	};
// };

export const signOut = () => {
  return (dispatch) => {
    dispatch(signOutSuccess());
    setTimeout(() => {
      window.location.href = "/signin/intern";
    }, 1000);
  };
};
