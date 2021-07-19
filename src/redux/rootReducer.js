import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from "redux-persist/lib/storage";
import user from "../store/user/user.reducer";
// import authReducer from "./reducers/auth.reducer";
import DashModalReducer from "./reducers/modal.reducer";

// import { sessionReducer } from "redux-react-session";

// const encryptor = encryptTransform({
//   secretKey: "why-are-you-looking-around",
//   onError: function (error) {
//     console.log("Something went wrong from the encryptor", error);
//   },
// });

const rootPersistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user,
  DashModalReducer,
  // WithdrawalModalReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
// export default rootReducer;
