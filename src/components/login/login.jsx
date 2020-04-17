import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/formsControls/formsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login} from '../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import s from '../common/formsControls/formsControls.module.css'

// const maxLength10 = maxLengthCreator(10);


const LoginForm = (props) => {
    // debugger;
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name='email' component={Input} validate={[required]}/>
            </div>
            <div>
            <Field type={'password'} placeholder={'Password'} name='password' component={Input} validate={[required]}/>
            </div>
            <div>
            <Field component={Input} type={'checkbox'} name='rememberMe' /> remember me
            </div>
            {props.error && <div  className={s.formSummeryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
        )
}

const LoginReduxForm  = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) return <Redirect to={'/content'}/>
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);