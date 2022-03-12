// This function run between the dispatch function and calling the reducer function
const user_checker = (store) => (next) => (action) => {
  if(action.type==="SIGN_IN" && !action.selected_user_name){
        alert("Please,select a user")
  }
  else  
      next(action)
};

export default user_checker;
