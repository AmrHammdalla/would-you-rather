import React from "react";
import Navbar from "./Navbar";
import handle_answering_question from "../Handlers/handle_answering_question";
import connect from "react-redux/lib/connect/connect";
import Notfound from './Notfound';
class Poll extends React.Component {
  //--------------------------------------------------------//
  handle_submit = (e) => {
    e.preventDefault();
    const choice = this.optionOne.checked === true ? "optionOne" : "optionTwo";
    //--------------//
    const { questions, signed_in, history, match, dispatch, store } =
      this.props;
    const { user } = { ...signed_in };
    const { id } = { ...match.params };
    //--------------//
    const question = questions.filter(
      (question) => question.id === match.params.id
    )[0];
    //-------------//
    const obj = { authedUser: user.id, qid: question.id, answer: choice };
    //-------------//
    dispatch(handle_answering_question(obj, store, history, id));
    //------------//
  };
  render() {
    const { location, match, users, questions, signed_in } = this.props;
    //-----------------------------------------------------------//
    const ConnectedNavbar = connect((state) => ({
      signed_in: state.signed_in,
      location,
    }))(Navbar);
    //----------------------------------------------------------//
    const question = questions.filter(
      (question) => question.id === match.params.id
    )[0];
    //----------------------------------------------------------//
    if (question) {
      const optionOne_count = question.optionOne.votes.length;
      const optionTwo_count = question.optionTwo.votes.length;
      const total_votes = optionOne_count + optionTwo_count;
      const optionOne_percentage =
        (optionOne_count * 100) / (optionOne_count + optionTwo_count);
      const optionTwo_percentage =
        (optionTwo_count * 100) / (optionOne_count + optionTwo_count);
      const unanswered = signed_in.unanswered_questions.filter(
        (unanswred_question) => unanswred_question.id === question.id
      );
      //------------------------------------------------------------//
      return unanswered.length > 0 ? (
        <React.Fragment>
          <ConnectedNavbar />
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{question.author} Asks</h5>
              </div>
              <div id="poll_middle_box" className="modal-body">
                <div id="poll_image">
                  <img
                    src={
                      users.filter((user) => user.name === question.author)[0]
                        .avatarURL
                    }
                    width="100"
                    height="100"
                    alt=""
                  ></img>
                </div>
                <div id="poll_header">
                  <h5>Would you rather...</h5>
                </div>
                <div id="poll_option1" className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="choice"
                    id="optionOne"
                    ref={(input) => (this.optionOne = input)}
                    defaultChecked
                  ></input>
                  <label className="form-check-label" htmlFor="optionOne">
                    {question.optionOne.text}
                  </label>
                </div>
                <div id="poll_option2" className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="choice"
                    id="optionTwo"
                    ref={(input) => (this.optionTwo = input)}
                  ></input>
                  <label className="form-check-label" htmlFor="optionTwo">
                    {question.optionTwo.text}
                  </label>
                </div>
              </div>
              <div id="poll_footer" className="modal-footer">
                <button
                  onClick={this.handle_submit}
                  className="btn btn-outline-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        //----------------------------------------------RESULTS--------------------------------------------//
        <React.Fragment>
          <ConnectedNavbar />
          <div className="modal-dialog">
            <div className="modal-content">
              {/* -------------------Tyler asks---------------------------- */}
              <div className="modal-header">
                <h5 className="modal-title">{question.author} Asks</h5>
              </div>
              {/* --------------------AVATAR------------------------- */}
              <div id="poll_middle_box" className="modal-body">
                <div id="poll_image">
                  <img
                    src={
                      users.filter((user) => user.name === question.author)[0]
                        .avatarURL
                    }
                    width="100"
                    height="100"
                    alt=""
                  ></img>
                </div>
                {/* -------------------------RESULTS:---------------------- */}
                <div id="poll_header">
                  <h5>Results:</h5>
                </div>
                {/* ------------------------card_1--------------------------- */}
                <div id="card_option1" className="card text-dark bg-light mb-3">
                  <div className="card-header">
                    {question.optionOne.text + "?"}
                  </div>
                  <div className="card-body">
                    <div className="progress card-title">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: optionOne_percentage.toString() + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {optionOne_percentage + "%"}
                      </div>
                    </div>
                    <p className="card-text" id="card_votes">
                      {optionOne_count + " out of " + total_votes + " votes"}
                    </p>
                  </div>
                </div>
                {/* ------------------------card_2-------------------------- */}
                <div id="card_option2" className="card text-dark bg-light mb-3">
                  <div className="card-header">
                    {question.optionTwo.text + "?"}
                  </div>
                  <div className="card-body">
                    <div className="progress card-title">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: optionTwo_percentage.toString() + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {optionTwo_percentage + "%"}
                      </div>
                    </div>
                    <p className="card-text" id="card_votes">
                      {optionTwo_count + " out of " + total_votes + " votes"}
                    </p>
                  </div>
                </div>
                {/*-------------------------------------------------*/}
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return <Notfound location={location} />;
    }
  }
}

export default Poll;
