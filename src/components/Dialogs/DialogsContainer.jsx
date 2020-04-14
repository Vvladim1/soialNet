import { sendMessageCreator } from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: (newMessageBody) => {
     dispatch(sendMessageCreator(newMessageBody));
    }
  }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
//========================================
// there is a problem in the cod after this line (does not work)
// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   WithAuthRedirect
// )(Dialogs);


