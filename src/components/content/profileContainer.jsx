import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import { getUserProfileThunk} from '../redux/profile-reducer'
import { withRouter } from "react-router-dom";
import { AuthRedirect } from "../../hoc/authRedirect";



class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) userId = 6092;
    this.props.getUserProfileThunk(userId);
  }
  render() {

    return (
      <div>
        <Content {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}


let AuthRedirectComponent = AuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfileThunk}) (WithUrlDataContainerComponent);
