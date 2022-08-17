import React, { Fragment } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.css';
const Authentication = () => {
    return (<div className="auth-page">
        <SignInForm></SignInForm>
        <SignUpForm></SignUpForm>
    </div>);
}
export default Authentication;