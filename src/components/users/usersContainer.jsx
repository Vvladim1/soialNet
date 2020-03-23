import React from "react";
import { followAC, unfollowAC, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress } from "../redux/users-reducer";
import { connect } from "react-redux";
// import * as axios from "axios";
import Users from './users'
import Preloader from "../common/preload/preload";
import {userAPI} from '../../api/api'

class UsersContainer extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.toggleIsFetching(true);
    
      userAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        // debugger;
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        
      });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    userAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
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
             follow={this.props.followAC}
             unfollow={this.props.unfollowAC}
             toggleFollowingProgress={this.props.toggleFollowingProgress} 
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
    followingInProgress: state.usersPage.followingInProgress

  }
}


export default connect(mapStateToProps,  {
    followAC,
    unfollowAC,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
    })(UsersContainer);

 
