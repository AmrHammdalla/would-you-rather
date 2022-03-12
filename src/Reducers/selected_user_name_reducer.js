export default function selected_user_name(state="",action){
    switch(action.type)
    {
        case "SELECT_USER":
            return action.selected_user_name
        default:
            return state
    }
}