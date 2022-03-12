export default function displayed_questions(state="1",action){
    switch(action.type){
        case "TOGGLE":
            return action.value
        case "SIGN_OUT":
            return "1"
        default:
            return state

    }
}
