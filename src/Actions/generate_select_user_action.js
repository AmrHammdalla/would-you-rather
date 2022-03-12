export default function select_user(selected_user_name){
    return{
        type:"SELECT_USER",
        selected_user_name,
    }
}