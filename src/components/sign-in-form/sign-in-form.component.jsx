import React from "react";
import FormInput from "../form-input/form-input.component";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInUserAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import './sign-in-form.syles.css';
const defaultField = {
    email: '',
    password: ''
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultField);
    const [alertText, setAlertText] = useState('');
    const {email, password} = formFields;
    const googlePopup = async () => {
        const {user} = await signInWithGooglePopup();
        //const userDocRef = await createUserDocumentFromAuth(user);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
        setAlertText('');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInUserAuthWithEmailAndPassword(email, password);
            console.log(user);
            setAlertText('Signed In!');
        }
        catch(error) {
            switch (error.code) {
                case "auth/wrong-password":
                    setAlertText("Incorrect password. Try again!");
                    break;
                case "auth/user-not-found":
                    setAlertText("User does not exist. Try again!");
                    break;
                default:
                    console.log("An error occurred, ", error.message);
            }
        }
    }

    return (
        <div className="sign-in">
            <h1>ALREADY HAVE AN ACCOUNT?</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" required type="text" onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password}/>
                <button type="submit">SIGN IN</button>
                <label>{alertText}</label>
                <div className="or-container">
                    <div className="line">
                    </div>
                    <p className="or">or</p>
                    <div className="line"></div>
                </div>
                <button type='button' onClick={googlePopup} className="google-button">Sign in with Google</button>
            </form>
        </div>
    )
}
export default SignInForm;