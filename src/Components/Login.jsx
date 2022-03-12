import React from "react";
import select_user from "../Actions/generate_select_user_action";
import sign_in from "./../Actions/generate_sign_in_action";
import Navbar from "./Navbar";
import connect from "react-redux/lib/connect/connect";
//--------------------------------------------------------------//
class Login extends React.Component {
  handle_user_select = (e) => {
    const { dispatch } = this.props;
    const selected_user_name = e.currentTarget.children[1].innerText;
    dispatch(select_user(selected_user_name));
  };
  handle_sign_in = (e) => {
    e.preventDefault();
    const { selected_user_name, users, questions, dispatch, history } =
      this.props;
    dispatch(sign_in(selected_user_name, users, questions));
    if (history.location.pathname === "/") {
      history.push("/Home");
    }
  };
  render() {
    const { users, selected_user_name, location } = this.props;
    //-------------------------------------------------------//
    //--------------------------------------------------------//
    const ConnectedNavbar = connect((state) => ({
      signed_in: state.signed_in,
      location,
    }))(Navbar);
    //-------------------------------------------------------//
    return (
      <React.Fragment>
        <ConnectedNavbar />
        <div id="Box2">
          <div id="Box2_1">
            <h3>Welcome to the Would You Rather APP !</h3>
            <p>Please sign in to continue</p>
          </div>
          <div id="Box2_2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JZbqke4luYxSOgvogNZDIPYiJvM6yNO4tQ&usqp=CAU"
              alt=""
              width="200"
              height="200"
              style={{ borderRadius: "50%" }}
            ></img>
          </div>
          <div id="Box2_3">
            <div id="Box2_3_1">
              <input
                className="form-select"
                placeholder="Select user"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                style={{ cursor: "pointer" }}
                value={selected_user_name}
                readOnly
              ></input>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li style={{ cursor: "pointer" }}>
                  <button className="dropdown-item disabled">
                    Select user
                  </button>
                </li>
                {users.map((user) => (
                  <li
                    key={user.id}
                    style={{ cursor: "pointer" }}
                    onClick={this.handle_user_select}
                    className="dropdown-item"
                  >
                    <img
                      src={user.avatarURL}
                      width="20"
                      height="20"
                      alt=""
                    ></img>
                    <span>{user.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div id="Box2_3_2">
              <button onClick={this.handle_sign_in} className="btn btn-primary">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
