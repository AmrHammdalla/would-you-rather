import React from "react";
import Navbar from "./Navbar";
import connect from "react-redux/lib/connect/connect";
class Leaderboard extends React.Component {
  render() {
    //-------------------------------------------------------//
    const { signed_in, location } = this.props;
    const { leader_board } = { ...signed_in };
    //--------------------------------------------------------//
    const ConnectedNavbar = connect((state) => ({
      signed_in: state.signed_in,
      location,
    }))(Navbar);
    //--------------------------------------------------------//
    return (
      <React.Fragment>
        <ConnectedNavbar />
        {leader_board.map((user) => (
          <div key={user.name} className="modal-dialog">
            <div className="modal-content">
              <div id="leaderboard" className="modal-body">
                <div id="leaderboard_image" className="mb-3">
                  <img
                    src={user.avatarURL}
                    width="100"
                    height="100"
                    alt=""
                  ></img>
                </div>
                <div id="leaderboard_name" className="mb-3">
                  <h3>{user.name}</h3>
                </div>
                <div id="details" className="mb-3">
                  <h6>
                    Answered Questions{" "}
                    <span className="badge bg-primary">
                      {user.answered_questions}
                    </span>
                  </h6>
                  <h6>
                    Created Questions{" "}
                    <span className="badge bg-primary">
                      {user.created_questions}
                    </span>
                  </h6>
                </div>
                <div id="leaderboard_score">
                  <div>
                    <h5>Score</h5>
                  </div>
                  <hr></hr>
                  <div>
                    <span className="badge bg-primary">{user.score}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    ) 
  }
}

export default Leaderboard;
