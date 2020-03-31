import React from "react";
import { 
  follow, 
  unfollow, 
  setCurrentPage, 
  toggleFollowingProgress,
  getUsers } from "../redux/users-reducer";
import { connect } from "react-redux";
import Users from './users'
import Preloader from "../common/preload/preload";
import {userAPI} from '../../api/api'
import { WithAuthRedirect } from "../../hoc/authRedirect";

class UsersContainer extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
 }

  render() {
    return (
      <>
      {this.props.isFetching && <Preloader />}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged} 
             users={this.props.users} 
             follow={this.props.follow}
             unfollow={this.props.unfollow}
            //  toggleFollowingProgress={this.props.toggleFollowingProgress} 
             followingInProgress={this.props.followingInProgress} />
             </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    // isAuth: state.auth.isAuth
  }
}

// let withRedirect = AuthRedirect(UsersContainer);


export default WithAuthRedirect(connect(mapStateToProps,  {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
    })(UsersContainer));

 
