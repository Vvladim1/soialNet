import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./dialog/dialogItem";
import Message from "./mesage/message";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from 'redux-form';
import { Textarea } from "../common/formsControls/formsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";


const Dialogs = props => {
  // debugger;

  let dialogsElement = props.state.dialogs.map(data => (
    <DialogItem name={data.name} id={data.id} key={data.id} />
  ));
  let messagesElements = props.state.messages.map(datas => (
    <Message message={datas.message} key={datas.id} />
  ));

  let newMessageBody = props.state.newMessageBody;


  let addNewMessage = (values) => {
    props.onSendMessageClick(values.newMessageBody);
  };

  if(!props.isAuth) return <Redirect to={'/login'} />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElement}</div>
      <div>
        <div className={s.messages_items}>{messagesElements}</div>
        
        <AddMessageFormRedux onSubmit={addNewMessage} />

      </div>
    </div>
  );
};
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit}>
    <div>
      <Field 
        component={Textarea} 
        name='newMessageBody' 
        validate={[required, maxLength50, ]}
        placeholder="send yor message"
      />
    </div>
    <div>
      <button>add message</button>
    </div>
  </form>
  )
}

const AddMessageFormRedux  = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);


export default Dialogs;
