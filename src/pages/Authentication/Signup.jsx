import { useState } from 'react';
import api from '../../api';
import './Authentication.scss'

const SignUp = () => {
    const handleSignup = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        console.log(formData.get('name'))
        await api.signup(formData.get('email'), formData.get('password'), formData.get('name'))
        
    }

    return (
        <div className="Signup">
            <form onSubmit={handleSignup}>
                <h1>Sign Up</h1>
                <input name="name" placeholder="Name" autoComplete='name' required></input>
                <input name="email" type="email" placeholder="Email" autoComplete='email' required></input>
                <input name="password" type="password" placeholder="Password" required></input>

                <button type="submit" className="signup-button">Sign Up</button>

                <p> Already registered? <a href="/login">Log in</a></p>
            </form>
        </div>
    )
}

export default SignUp;