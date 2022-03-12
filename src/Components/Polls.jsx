import React from 'react';
class Polls extends React.Component {
  handle_poll_click=(e,question_id)=>{
    e.preventDefault()
    this.props.history.push("/questions/"+question_id)
  }
    render() { 
        const { questions_to_map,users } = this.props
        return (
          <div>
            {questions_to_map.map((question) => {
              return (
                <div key={question.id}>
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{question.author} Asks</h5>
                      </div>
                      <div id="poll_middle_box" className="modal-body">
                        <div id="poll_image">
                          <img
                            src={
                              users.filter(
                                (user) => user.name === question.author
                              )[0].avatarURL
                            }
                            width="100"
                            height="100"
                            alt=""
                          ></img>
                        </div>
                        <div id="poll_header">
                          <h5>Would you rather...</h5>
                        </div>
                        <div id="poll_option1">{question.optionOne.text}</div>
                        <div id="poll_option2">{question.optionTwo.text}</div>
                      </div>
                      <div id="poll_footer" className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={(e)=>this.handle_poll_click(e,question.id)}
                        >
                          View Poll
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
    }
}
 
export default Polls;