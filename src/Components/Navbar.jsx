import React from "react";
import { Link } from "react-router-dom";
import sign_out from "./../Actions/generate_sign_out_action";
class Navbar extends React.Component {
  handle_logout = () => {
    const { dispatch } = this.props;
    dispatch(sign_out());
  };
  get_class_name_Home = () => {
    return this.props.location.pathname === "/Home"
      ? "nav-item nav-link active"
      : "nav-item nav-link";
  };
  get_class_name_New = () => {
    return this.props.location.pathname === "/Add"
      ? "nav-item nav-link active"
      : "nav-item nav-link";
  };
  get_class_name_Leader = () => {
    return this.props.location.pathname === "/LeaderBoard"
      ? "nav-item nav-link active"
      : "nav-item nav-link";
  };
  render() {
    const { signed_in } = this.props;
    const { user, logged } = { ...signed_in };
    return (
      <div id="Box1">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary"
          id="Boxes_Wrapper"
        >
          <div>
            <Link className="navbar-brand" to="/Home">
              Would You Rather?
            </Link>
          </div>
          <div>
            <div className="navbar-nav">
              <Link className={this.get_class_name_Home()} to="/Home">
                Home<span className="sr-only">(current)</span>
              </Link>

              <Link className={this.get_class_name_New()} to="/add">
                New Question
              </Link>

              <Link className={this.get_class_name_Leader()} to="/leaderboard">
                Leader Board
              </Link>
              {logged && (
                <Link className="nav-item nav-link active" to="/Home">
                  {"Hello, " + user.name + "     "}
                  {
                    <img
                      src={user.avatarURL}
                      width="25"
                      height="25"
                      alt=""
                    ></img>
                  }
                </Link>
              )}
              {logged && (
                <Link
                  onClick={this.handle_logout}
                  className="nav-item nav-link "
                  to="/"
                >
                  Logout
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
