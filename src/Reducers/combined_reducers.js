import { combineReducers } from "redux";
import users from "./users_reducer";
import questions from "./questions_reducer";
import signed_in from "./signed_in_reducer";
import selected_user_name from './selected_user_name_reducer';
import displayed_questions from './displayed_questions_reducer';
const combined_reducers = combineReducers({ users, questions,signed_in,selected_user_name,displayed_questions});
export default combined_reducers;
