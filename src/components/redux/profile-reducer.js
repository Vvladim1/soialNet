import { userAPI, profileAPI } from "../../api/api"


const ADD_NEW_POST = "ADD-NEW-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  
    posts: [
      { id: 1, message: "Hello!", likesCounte: 15 },
      { id: 2, message: "how are you!", likesCounte: 20 },
      { id: 3, message: "Very vell!", likesCounte: 18 }
    ],
    profile: null,
    status: ''
  
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCounte: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
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

export const addPostActionCreator = (newPostText) => ({ type: ADD_NEW_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

// export const updateNewPostTextActionCreator = text => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newText: text
// });

export const getUserProfileThunk = (userId) => {//"thankA"
  return (dispatch) => {
    userAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data));
    });
  }
}

export const getStatusThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
      // debugger;
      dispatch(setStatus(response.data));
    });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
      debugger;
      if(response.data.resultCode === 0){
      dispatch(setStatus(status));
    }
    });
  }
}

export default profileReducer;
