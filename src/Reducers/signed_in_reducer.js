export default function signed_in(state = {}, action) {
  switch (action.type) {
    case "SIGN_IN":
      const users = [...action.users];
      const questions = [...action.questions];
      //----------------User_Questions_ids--------------------//
      const user = users.filter(
        (user) => user.name === action.selected_user_name
      )[0];
      const questions_ids = Object.keys(user.answers);
      //---------------Answered_Questions--------------------//
      let answered_questions = questions.filter((question) =>
        questions_ids.includes(question.id)
      );
      //---------------Unanswered_Questions-----------------//
      let unanswered_questions = questions.filter(
        (question) => !questions_ids.includes(question.id)
      );
      //------------------Leader_Board----------------------//
      let leader_board = users.map((user) => {
        return {
          name: user.name,
          avatarURL: user.avatarURL,
          answered_questions: Object.keys(user.answers).length,
          created_questions: user.questions.length,
          score: Object.keys(user.answers).length + user.questions.length,
        };
      });
      //----------------Sorted_Leader_Board-----------------//
      leader_board.sort((a,b)=>b.score-a.score)
      //----------------------------------------------------//
      return {
        ...signed_in,
        logged: true,
        selected_user_name: action.selected_user_name,
        user: user,
        users: users,
        answered_questions: answered_questions,
        unanswered_questions: unanswered_questions,
        displayed_questions: "1",
        leader_board:leader_board
      };
    case "SIGN_OUT":
      return { ...signed_in, logged: false };

    default:
      return state;
  }
}
