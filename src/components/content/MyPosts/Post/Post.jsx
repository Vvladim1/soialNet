import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAul_QJonV108RRTLmYREMKl3NpvBHMqWCTq_vcEhFXgm5s9r&s"
        alt="face"
      />
      {props.message}
      <div>
        <span>Like </span>
        {props.likesCounte}
      </div>
    </div>
  );
};

export default Post;
