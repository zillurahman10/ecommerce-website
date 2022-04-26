import React, { useState } from 'react';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorElement, setElement] = useState("")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/login')
        return <p>Loading...</p>
    }
    if (error) {
        setElement(error?.message)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
                <div>
                    <h2>Please SignUp</h2>
                    <input className='inputs' type="text" name='name' required placeholder='Name' />
                    <br />
                    <input onBlur={handleEmail} className='inputs' type="email" name="email" id="" required placeholder='Email' />
                    <br />
                    <input className='inputs' onBlur={handlePassword} type="password" name="password" id="" required placeholder='Password' />
                    <br />
                    <input className='inputs' type="password" name="password" id="" placeholder='Confirm password' />
                    <br />
                    <div className='d-flex justify-content-center'>
                        <button className='submit w-50' type="submit" value="Login" >Sign Up</button>
                    </div>
                    {errorElement}
                </div>
            </form>
            <p className='text-center'>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;