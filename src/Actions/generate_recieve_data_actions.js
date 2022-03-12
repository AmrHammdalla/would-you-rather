export default function generate_recieve_data_action(users,questions){
    return{
        type:"RECIEVE_DATA",
        users,
        questions
    }
}