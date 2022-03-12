import { _getUsers, _getQuestions, _saveQuestionAnswer } from "../API/_DATA";
import generate_recieve_data_action from"../Actions/generate_recieve_data_actions"
import sign_in from "../Actions/generate_sign_in_action";
export default function handle_answering_question(obj, store, history, id) {
  return (dispatch) => {
    _saveQuestionAnswer(obj);
    Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
      dispatch(generate_recieve_data_action(users, questions));
      //------------//
      const {
        users: new_users,
        questions: new_questions,
        selected_user_name,
      } = store.getState();
      dispatch(sign_in(selected_user_name, new_users, new_questions));
      //-----------//
      history.push("/questions/" + id);
    });
  };
}
