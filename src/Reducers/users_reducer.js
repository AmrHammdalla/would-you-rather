export default function users(state = [], action) {
  switch (action.type) {
    case "RECIEVE_DATA":
      return Object.values(action.users);
    default:
      return state;
  }
}
