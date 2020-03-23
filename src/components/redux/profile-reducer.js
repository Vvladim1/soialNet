const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  
    posts: [
      { id: 1, message: "Hello!", likesCounte: 15 },
      { id: 2, message: "how are you!", likesCounte: 20 },
      { id: 3, message: "Very vell!", likesCounte: 18 }
    ],
    newPostText: "it-lesson",
    profile: null
  
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCounte: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      }
      // let stateCopy = {...state};
      // stateCopy.posts = [...state.posts]
      // if (newPost.message != "") {
      //   stateCopy.posts.push(newPost);
      //   stateCopy.newPostText = "";
      // }
      // return stateCopy;
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer;
