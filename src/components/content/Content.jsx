import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./profile/Profile";

const Content = props => {
  // debugger;
  return (
    <div>
      <Profile profile={props.profile} />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Content;
