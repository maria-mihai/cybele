import React from "react";
import { useState } from "react";
import { createUserAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import './sign-up-form.styles.css';
import FormInput from "../form-input/form-input.component";
const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    repeatPassword: ''
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const {displayName, email, password, repeatPassword} = formFields;
    const [alertText, setAlertText] = useState('');

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
        setAlertText('');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== repeatPassword) {
            setAlertText('Passwords do not match!');
            return;
        }
        try {
            const {user} = await createUserAuthWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            setFormFields(defaultFormField);
            setAlertText('');
        }
        catch(error) {
            console.log("Error encountered when creating user", error.message)
            if (error.code === 'auth/email-already-in-use') 
                setAlertText('Email already in use!');
            if(error.code === 'auth/weak-password')
                setAlertText('Password is too short. Use at least 6 characters!');
        }
    }
    return (
        <div className="sign-up">
            <h1>NEW HERE?</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label="Email" required type="text" onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password}/>
                
                <FormInput label="Repeat password" required type="password" onChange={handleChange} name="repeatPassword" value={repeatPassword}/>
                
                <button type="submit">SIGN UP</button>
                <label id="form-alert">{alertText}</label>
            </form>
        </div>
    )
}

export default SignUpForm;