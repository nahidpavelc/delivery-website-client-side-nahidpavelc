import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/google.png';
import './Login.css';

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
            <body>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div class="card border-0 shadow rounded-3 my-5">
                                <div class="card-body p-4 p-sm-5">
                                    <h5 class="card-title text-center mb-5 fw-light fs-5">Please Login</h5>
                                    <form>
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Password</label>
                                        </div>

                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                            <label class="form-check-label" for="rememberPasswordCheck">
                                                Remember password
                                            </label>
                                        </div>
                                        <div class="d-grid">
                                            <button class="btn btn-success btn-login text-uppercase fw-bold" type="submit button">Please Login</button>
                                        </div>
                                        <hr class="my-4" />
                                        <div class="d-grid mb-2">
                                            <button onClick={handleGoogleLogin} type="button" class="btn btn-success btn-login text-uppercase fw-bold">
                                                <img style={{ width: "25px" }} src={logo} alt="" /> Google Login
                                            </button>
                                        </div>
                                        {/* <div class="d-grid">
                                            <button class="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                                                <i class="fab fa-facebook-f me-2"></i> Sign in with Facebook
                                            </button>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>


        </div>
    );
};

export default Login;