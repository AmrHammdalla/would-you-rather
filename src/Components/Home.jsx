import React from "react";
import Navbar from "./Navbar";
import Polls from "./Polls";
import toggle_un_an from "../Actions/generate_toggle_un_an_action";
import connect from "react-redux/lib/connect/connect";
class Home extends React.Component {
  handle_toggle = (e) => {
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(toggle_un_an(e.currentTarget.value));
  };
  get_class_name_un = () => {
    const { displayed_questions } = this.props;
    return displayed_questions === "1"
      ? "btn btn-primary"
      : "btn btn-outline-primary";
  };
  get_class_name_an = () => {
    const { displayed_questions } = this.props;
    return displayed_questions === "2"
      ? "btn btn-primary"
      : "btn btn-outline-primary";
  };
  render() {
    //-------------------------------------------------------------/
    const { location, history, signed_in, displayed_questions } = this.props;
    const { answered_questions, unanswered_questions, users } = {
      ...signed_in,
    };
    //-------------------------------------------------------------//
    const ConnectedNavbar = connect((state) => ({
      signed_in: state.signed_in,
      location,
    }))(Navbar);
    //------------------------------------------------------------//
    return (
      <React.Fragment>
        <ConnectedNavbar />
        <div id="Box3">
          <ul id="Box3_1" className="nav-pills nav justify-content-center">
            <div className="d-grid gap-1 col-3 ">
              <button
                value="1"
                onClick={(e) => this.handle_toggle(e)}
                className={this.get_class_name_un()}
                type="button"
              >
                Unanswered Questions
              </button>
            </div>
            <div className="d-grid gap-1 col-3 ">
              <button
                value="2"
                onClick={(e) => this.handle_toggle(e)}
                className={this.get_class_name_an()}
                type="button"
              >
                Answered Questions
              </button>
            </div>
          </ul>
        </div>
        {displayed_questions === "1" && (
          <Polls
            history={history}
            questions_to_map={unanswered_questions}
            users={users}
          />
        )}
        {displayed_questions === "2" && (
          <Polls
            history={history}
            questions_to_map={answered_questions}
            users={users}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Home;
