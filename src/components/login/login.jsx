import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/formsControls/formsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

// const maxLength10 = maxLengthCreator(10);


const LoginForm = (props) => {
    // debugger;
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name='login' component={Input} validate={[required]}/>
            </div>
            <div>
            <Field placeholder={'Password'} name='password' component={Input} validate={[required]}/>
            </div>
            <div>
            <Field component={Input} type={'checkbox'} name='rememberMe' /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
        )
}

const LoginReduxForm  = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;