import { createStore } from "redux";
// import { ThunkMiddleware } from "redux-thunk";
import reducer from "./reducer"

const store = createStore(
    reducer,
);

export default store;