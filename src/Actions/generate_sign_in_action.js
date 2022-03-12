export default function sign_in(selected_user_name,users,questions) {
  return {
    type: "SIGN_IN",
    selected_user_name,
    users,
    questions,
  };
}
