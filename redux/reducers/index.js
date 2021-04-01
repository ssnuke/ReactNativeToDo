import { combineReducers } from "redux";
import todos from "./todos";
import imptodos from './imptodos';

export default combineReducers({ todos , imptodos })