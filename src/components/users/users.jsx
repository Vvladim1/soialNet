import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/userImg.jpg";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const Users = props => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map(p => (
        <span
          className={`${props.currentPage === p && styles.selectedPage} ${
            styles.cursor
          } `}
          onClick={e => {
            props.onPageChanged(p);
          }}
        >
          {p}
        </span>
      ))}
      {props.users.map(u => (
        <div key={u.id}>
          <div className={styles.wrapper}>
            <div>
              <NavLink to={/content/ + u.id}>
                <img alt='user-face'
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button disabled={props.followingInProgress.some(id => id === u.id)} 
                  onClick={() => {
                    // debugger;
                    props.toggleFollowingProgress(true, u.id);
                    axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          'API-KEY': 'ce4283be-0853-4f9a-a13a-373054a954a3'
                        }
                      }
                    )
                    .then(response => {
                      if(response.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    })
                  }}
                >
                  unfollowe
                </button>
              ) : (
                <button disabled={props.followingInProgress.some(id => id === u.id)} 
                  onClick={() => {

                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'ce4283be-0853-4f9a-a13a-373054a954a3'
                          }
                        }
                      )
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}
                >
                  followed
                </button>
              )}
            </div>
            <div>{u.name}</div>
            <div>{u.status}</div>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
