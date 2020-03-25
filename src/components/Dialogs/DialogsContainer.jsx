import {
  updateNewMessageTextCreator,
  sendMessageCreator
} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { AuthRedirect } from "../../hoc/authRedirect";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: () => {
     dispatch(sendMessageCreator());
    },

    onNewMessageChange: (body) => {
      dispatch(updateNewMessageTextCreator(body));
    }
  }
}

let AuthRedirectComponent = AuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;


