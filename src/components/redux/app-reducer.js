import { getAuthUserDataThunk } from "./auth-reducer";

const SET_INITIALIZED_SUCCES = 'SET_INITIALIZED_SUCCES';

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCES:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export const setInitializedSucces = () => ({ type: SET_INITIALIZED_SUCCES });

export const initializeApp = () => (dispatch) => {
       let promise = dispatch(getAuthUserDataThunk()); 
       Promise.all([promise]).then(() => {
        dispatch(setInitializedSucces());
       });
}


export default appReducer;
