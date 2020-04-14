import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./dialog/dialogItem";
import Message from "./mesage/message";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from 'redux-form';


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

const AddMessageForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit}>
    <div>
      <Field 
        component='textarea' 
        name='newMessageBody'
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
