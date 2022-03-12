export default function questions(state = [], action) {
  switch (action.type) {
    case "RECIEVE_DATA":
      const questions =Object.values(action.questions);
      return questions.sort((a,b)=>b.timestamp-a.timestamp)
    default:
      return state;
  }
}
