import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = props => {
  // debugger;
  let postsElements = props.posts.map(data => (
    <Post message={data.message} 
          likesCounte={data.likesCounte} 
          key={data.id} />
  ));

  let newPostEl = React.createRef();

  let addPost = () => {
    props.addPost()
  };

  let onPostChange = () => {
    let text = newPostEl.current.value;
    props.onPostChange(text);
  };

  return (
    <div className={s.myposts}>
      <h4>My posts</h4>
      <div className={s.addpost}>
        <div>
          <textarea
            ref={newPostEl}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;
