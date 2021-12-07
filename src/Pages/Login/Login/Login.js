import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/google.png';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const history = useHistory();

    //Important for Private Route
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false));
    }


    // console.log('came from', location.state?.from);

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} type="button" class="btn btn-outline-dark">
                <img style={{ width: "25px" }} src={logo} alt="" /> Google Login
            </button>
        </div>
    );
};

export default Login;