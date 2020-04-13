import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    // debugger;
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name='login' component={'input'} />
            </div>
            <div>
            <Field placeholder={'Password'} name='password' component={'input'} />
            </div>
            <div>
            <Field component={'input'} type={'checkbox'} name='rememberMe' /> remember me
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