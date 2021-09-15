import React from 'react';
import { useHistory } from 'react-router-dom'

const LoginScreen = () => {

    const history = useHistory();

    const handleLogin = (e) => {
        // history.push('/');
        history.replace('/'); //user can't come back
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    );
};

export default LoginScreen;