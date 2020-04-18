import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import { getUserProfileThunk, getStatusThunk, updateStatus} from '../redux/profile-reducer'
import { withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";



class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = this.props.authorizedUserId;
      if(!userId){
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }
  render() {

    return (
      <div>
        <Content {...this.props} profile={this.props.profile} 
                  status={this.props.status}
                  updateStatus={this.props.updateStatus}  
                  />
      </div>
    );
  }
}


// let WithAuthRedirectComponent = WithAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId, 
  isAuth: state.auth.isAuth
});

// let WithUrlDataContainerComponent = withRouter(WithAuthRedirectComponent)

// export default connect(mapStateToProps, {getUserProfileThunk}) (WithUrlDataContainerComponent);
export default compose(
  connect(mapStateToProps, {getUserProfileThunk, getStatusThunk, updateStatus}),
  withRouter,
  // WithAuthRedirect
)(ProfileContainer)