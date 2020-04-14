
import React from "react";
import { reduxForm, Field } from 'redux-form';

const DialogsForm = props => {
    // debugger;
    return (
      <form onSubmit={props.handleSubmit}>
              <div>
                <Field name='textarea'
                onChange={props.onNewMessageChange}
                value={props.newMessageBody}
                placeholder={"send yor message"} 
                component={'textarea'}
              />
              </div>
              <button>add message</button>
            </form>
    )
  }

  const DialogsReduxForm  = reduxForm({form: 'Dialog'})(DialogsForm);

  export default DialogsReduxForm;