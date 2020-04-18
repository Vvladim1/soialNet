import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from './profile-reducer';
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare  from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let redusers = combineReducers({
    
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
let store = createStore(redusers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;