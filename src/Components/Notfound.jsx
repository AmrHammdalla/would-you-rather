import React from "react";
import Navbar from "./Navbar";
import connect from "react-redux/lib/connect/connect";
class Notfound extends React.Component {
  render() {
    const { location } = this.props;
    const ConnectedNavbar = connect((state) => ({
      signed_in: state.signed_in,
      location,
    }))(Navbar);
    return (
      <React.Fragment>
        <ConnectedNavbar />
        <h1 id="not_found">404 Not Found</h1>
      </React.Fragment>
    );
  }
}

export default Notfound;
