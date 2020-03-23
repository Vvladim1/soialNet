const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  
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

const dialogsReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
          return {
            ...state,
            newMessageBody: action.body
          };
        case SEND_MESSAGE:
          let body = state.newMessageBody;
          return {
            ...state,
            messages: [...state.messages, {id: 4, message: body}],
            newMessageBody: ''
          };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreator = body =>({
  type: UPDATE_NEW_MESSAGE_TEXT,
  body: body
});

export default dialogsReducer;