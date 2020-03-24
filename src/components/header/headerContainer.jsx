import React from "react";
// import * as axios from "axios";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserDataThunk } from '../redux/auth-reducer';
// import { authAPI } from '../../api/api'

class HeaderContainer extends React.Component {
    componentDidMount() {
      this.props.getAuthUserDataThunk();
      }
  render() {
    return <Header {...this.props}/>;
  }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect (mapStateToProps, {getAuthUserDataThunk})(HeaderContainer);
