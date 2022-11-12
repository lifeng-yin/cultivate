import { useState } from 'react';
import api from '../../api';
import './Authentication.scss'

const Login = () => {
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('e')
    }

    return (
        <div className="Login">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <input name="email" type="email" placeholder="Email" autoComplete='email' required></input>
                <input name="password" type="password" placeholder="Password" required></input>

                <button type="submit" className="signup-button">Login</button>

                <p> Don't have an account? <a href="/signup">Sign Up</a></p>
            </form>
        </div>
    )
}

export default Login;