import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'}
                       placeholder={'Login'}
                       component={'input'}
                />
            </div>
            <div>
                <Field name={'password'}
                       placeholder={'Password'}
                       type={'password'}
                       component={'input'}
                />
            </div>
            <div>
                <Field name={'rememberMe'}
                       type={'checkbox'}
                       component={'input'}
                /> Remember me
            </div>
            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) =>{
        console.log(formData)
    }
    return (<>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};