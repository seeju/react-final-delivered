import { createStore } from "redux";
import calculatorReducer from "../reducer/reducer";

export default createStore(
    calculatorReducer,
);