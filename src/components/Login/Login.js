import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = (props) => {
    const { handleGoogleSingIn } = useAuth();
    const location = useLocation();
    const history = useHistory()
    // console.log('came from', location.state?.from);
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () =>{
        handleGoogleSingIn()
        .then( result =>{
            history.push(redirect_uri);
        })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email"/>
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input  type="submit" value="Submit" />
                </form>
                <p>New to ema-john? <Link to="/register">Create Account</Link></p>
                <div>-----------or------------</div>
                <button onClick={handleGoogleLogin} className="btn btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;