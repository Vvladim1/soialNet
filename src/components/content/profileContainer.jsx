import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import { getUserProfileThunk} from '../redux/profile-reducer'
import { withRouter, Redirect } from "react-router-dom";



class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) userId = 6092;
    this.props.getUserProfileThunk(userId);
  }
  render() {
    if(!this.props.isAuth) return <Redirect to={'/login'} />

    return (
      <div>
        <Content {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfileThunk}) (WithUrlDataContainerComponent);
