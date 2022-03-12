import { _getUsers, _getQuestions } from "../API/_DATA";
import generate_recieve_data_action from "../Actions/generate_recieve_data_actions";
export default function handle_recieve_data() {
  return (dispatch) => {
    Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
      dispatch(generate_recieve_data_action(users, questions));
    });
  };
}
