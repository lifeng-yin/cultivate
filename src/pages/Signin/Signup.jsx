import { useState } from 'react';
import api from '../../api';

const SignUp = () => {
    const handleSignup = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="Signup">
            <form onSubmit={handleSignup}>
                <label for="name">Name</label>
                <input name="name" o></input>
            </form>
        </div>
    )
}