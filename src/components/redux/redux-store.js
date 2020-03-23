import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from './profile-reducer';
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let redusers = combineReducers({
    
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: userReducer,
    auth: authReducer
});
let store = createStore(redusers);

window.store = store;

export default store;