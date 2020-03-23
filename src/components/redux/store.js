import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello!", likesCounte: 15 },
        { id: 2, message: "how are you!", likesCounte: 20 },
        { id: 3, message: "Very vell!", likesCounte: 18 }
      ],
      newPostText: "it-lesson"
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Valera" }
      ],
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are your it-kamasutra?" },
        { id: 3, message: "Yo!!" }
      ],
      newMessageBody: '',
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state chenged");
  },

  subscribe(observer) {
    // pattern
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer (this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
}






export default store;
window.store = store;
