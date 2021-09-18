import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = () => {

    const { dispatch } = useContext(AuthContext);

    const history = useHistory();

    const handleLogin = (e) => {
        // history.push('/');

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'fede'
            }
        });
        
        history.replace(lastPath); //user can't come back
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