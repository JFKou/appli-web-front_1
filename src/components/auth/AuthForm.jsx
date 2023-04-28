import React, {useState} from 'react';
import Login from '../login/Login';
import SignUp from '../signup/SignUp';
import '../auth/authform.css';

function AuthForm() {
    const [mode, setMode] = useState('signIn');

    const switchModeHandler = () => {
        setMode(mode === 'signIn' ? 'signUp' : 'signIn');
    };

    return (
        <div className="body">
            <div className="container">
                {mode === 'signIn' && <Login switchToSignUp={switchModeHandler} />}
                {mode === 'signUp' &&  <SignUp switchToLogin={switchModeHandler} />}
            </div>
        </div>
    )
}

export default AuthForm;
