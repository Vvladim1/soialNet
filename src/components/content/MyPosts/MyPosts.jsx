import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator,  } from "../../../utils/validators/validators";
import { Textarea } from "../../common/formsControls/formsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field 
                 name='newPostText' 
                 component={Textarea} 
                 validate={[required, maxLength10, ]}
                 placeholder='Post message' />
        </div>
        <div>
          <button>Add post</button>

        </div>
      </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: 'addNewPostForm'})(AddNewPostForm);

const MyPosts = props => {
  // debugger;
  let postsElements = props.posts.map(data => (
    <Post message={data.message} 
          likesCounte={data.likesCounte} 
          key={data.id} />
  ));

  let newPostEl = React.createRef();

  // let addPost = () => {
  //   props.addPost()
  // };



  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.myposts}>
      <h4>My posts</h4>
      <div className={s.addpost}>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      {postsElements}
    </div>
  );
}



export default MyPosts;
