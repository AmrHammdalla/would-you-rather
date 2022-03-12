import React from "react";
import Login from "./Login";
import Home from "./Home";
import Poll from "./Poll";
import Newquestions from "./Newquestions";
import Leaderboard from "./Leaderboard";
import Notfound from "./Notfound";
import connect from "react-redux/lib/connect/connect";
import { Switch, Route, Redirect } from "react-router-dom";
import handle_recieve_data from "../Handlers/handle_recieve_data";
class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    //console.log(this.props)
    dispatch(handle_recieve_data());
  }
  render() {
    //---------------------------------------------------//
    const ConnectedHome = connect((state) => ({
      displayed_questions: state.displayed_questions,
      signed_in: state.signed_in,
    }))(Home);
    //--------------------------------------------------//
    const ConnectedNewquestions = connect((state) => ({
      signed_in: state.signed_in,
    }))(Newquestions);
    //--------------------------------------------------//
    const ConnectedLeaderboard = connect((state) => ({
      signed_in: state.signed_in,
    }))(Leaderboard);
    //--------------------------------------------------//
    const ConnectedPoll = connect((state) => ({
      signed_in: state.signed_in,
      questions: state.questions,
      users: state.users,
    }))(Poll);
    //--------------------------------------------------//
    const ConnectedLogin = connect((state) => ({
      selected_user_name: state.selected_user_name,
      questions: state.questions,
      users: state.users,
    }))(Login);
    //--------------------------------------------------//
    const { signed_in } = this.props;
    //----------------------------------------------------//
    return (
      <div className="container-fluid">
        <Switch>
          {/* ----------------------Home---------------------------- */}
          {signed_in.logged && (
            <Route
              path="/Home"
              exact
              render={(props) => (
                <ConnectedHome
                  history={props.history}
                  location={props.location}
                />
              )}
            />
          )}
          {/* -----------------------New_Question-------------------------- */}
          {signed_in.logged && (
            <Route
              path="/add"
              exact
              render={(props) => (
                <ConnectedNewquestions
                  history={props.history}
                  store={this.props.store}
                  location={props.location}
                />
              )}
            />
          )}
          {/* --------------------Leader_Board------------------------- */}
          {signed_in.logged && (
            <Route
              path="/leaderboard"
              exact
              render={(props) => (
                <ConnectedLeaderboard location={props.location} />
              )}
            />
          )}
          {/* -----------------------Poll------------------------ */}
          {signed_in.logged && (
            <Route
              path="/questions/:id"
              exact
              render={(props) => (
                <ConnectedPoll
                  history={props.history}
                  match={props.match}
                  location={props.location}
                  store={this.props.store}
                />
              )}
            />
          )}
          {/* ------------------------Login-------------------------- */}
          {!signed_in.logged && (
            <Route
              path="/"
              render={(props) => (
                <ConnectedLogin
                  history={props.history}
                  location={props.location}
                />
              )}
            />
          )}
          {/* ------------------------Notfound-------------------------- */}
          <Route
            path="/Notfound"
            exact
            render={(props) => (
              <Notfound location={props.location} />
            )}
          ></Route>
          <Redirect to="/Notfound"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default App;
