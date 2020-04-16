import { authAPI } from '../../api/api'

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
//   isFetching: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
        // isAuth: true
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {
    userId,
    email,
    login,
    isAuth
} });

export const getAuthUserDataThunk = () => (dispatch) => {
  authAPI.me().then(response => {
        let {id, email, login} = response.data.data;
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(id, email, login, true));
        }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
         .then(response => {
        if(response.data.resultCode === 0){
            dispatch(getAuthUserDataThunk());
        }
        });
}

export const logout = () => (dispatch) => {
  authAPI.logout()
         .then(response => {
        if(response.data.resultCode === 0){
          dispatch(setAuthUserData(null, null, null, false));
        }
        });
}

export default authReducer;
