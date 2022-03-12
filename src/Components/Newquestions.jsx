import React from "react";
import Navbar from "./Navbar";
import connect from "react-redux/lib/connect/connect";
import handle_new_question from "../Handlers/handle_new_question";
class Newquestions extends React.Component {
  handle_submit = (e) => {
    const optionOne = this.optionOne.value;
    const optionTwo = this.optionTwo.value;
    //--------------------------//
    this.optionOne.value = "";
    this.optionTwo.value = "";
    //--------------------------//
    const { signed_in, history, dispatch, store } = this.props;
    const { user } = { ...signed_in };
    //--------------------------//
    const obj = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: user.name,
    };
    //---------------------------//
    dispatch(handle_new_question(obj,user.id, store, history));
    //--------------------------//
  };
  render() {
    const { location} = this.props;
    //--------------------------------------------------------------//
    const ConnectedNavbar = connect((state) => ({
      signed_in: state.signed_in,
      location,
    }))(Navbar);
    //------------------------------------------------------------//
    return (
      <React.Fragment>
        <ConnectedNavbar />
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Create New Question</h3>
            </div>
            <div className="modal-body">
              <h5>Would you rather...</h5>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="optionOne"
                  placeholder="Enter Option One Text Here"
                  ref={(input) => {
                    this.optionOne = input;
                  }}
                ></input>
              </div>
              <hr></hr>
              <h5 id="OR">OR</h5>
              <hr></hr>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="optionTwo"
                  placeholder="Enter Option Two Text here"
                  ref={(input) => {
                    this.optionTwo = input;
                  }}
                ></input>
              </div>
            </div>
            <div id="New_Question_Submit" className="modal-footer">
              <button
                onClick={(e) => this.handle_submit(e)}
                className="btn btn-outline-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Newquestions;
