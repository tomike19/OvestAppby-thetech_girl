import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
// import { sessionService } from "redux-react-session";

const initialState = {};
const middleWares = [thunk, logger];

// if (process.env.NODE_ENV === "development") {
//   middleWares.push(logger);
// }

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWares))
);

const persistor = persistStore(store);

export { store, persistor };
