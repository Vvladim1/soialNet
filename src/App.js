import React from "react";
import "./App.css";
// import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import ProfileContainer from "./components/content/profileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, withRouter } from "react-router-dom";
import Musik from "./components/musik/musik";
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import UsersContainer from "./components/users/usersContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from './components/login/login'
import { connect } from "react-redux";
import { initializeApp } from './components/redux/app-reducer'
import { compose } from "redux";
import Preloader from "./components/common/preload/preload";

class App extends React.Component {
  // debugger;
  componentDidMount() {
    this.props.initializeApp();
    }
  render(){
    if(!this.props.initialized) {
    return (
    <Preloader />
    );
  }
  return (
    <div className="wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <DialogsContainer />}
          />
          <Route
            path="/content/:userId?"
            render={() => (
              <ProfileContainer />
            )}
          />
          <Route path="/user" render={() => ( <UsersContainer/> )}/>
          <Route path="/login" render={() => ( <Login/> )}/>

          <Route path="/news" component={News} />
          <Route path="/musik" component={Musik} />
          <Route path="/settings" component={Settings} />
        </div>
    </div>
  );
}
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});
export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
