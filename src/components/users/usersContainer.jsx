import React from "react";
import { 
  follow, 
  unfollow, 
  setCurrentPage, 
  toggleFollowingProgress,
  requestUsers } from "../redux/users-reducer";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, 
         getFollowingInProgress } from './../redux/users-selectors'; 
import { connect } from "react-redux";
import Users from './users'
import Preloader from "../common/preload/preload";
import {userAPI} from '../../api/api'
import { WithAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
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

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   }
// }

let mapStateToProps = (state) => {
    return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
    }
  }



export default compose(
    WithAuthRedirect, 
    connect(mapStateToProps,  {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers
    }))(UsersContainer);

 
