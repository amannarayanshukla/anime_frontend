import { createStore, applyMiddleware } from "redux";
import fetchAnime from "../reducers";
import thunk from "redux-thunk";

const store = createStore(fetchAnime, applyMiddleware(thunk));

export default store;
