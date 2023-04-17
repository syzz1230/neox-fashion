import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from './register.svg';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validate = () => {
        if (!name) return false;
        if (!email) return false;
        if (!password) return false;
        if (password.length < 8) return false;
        return true;
    };
    const onSignup = async (e) => {
        e.preventDefault();
        if (!validate()) {
            alert('Please Enter the all field Correct');
        } else {
            const userDetails = { name, email, password };
            const reqData = {
                method: 'post',
                url: `/auth/register`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: userDetails,
            };
            const response = await axios(reqData);
            navigate('/admin');
            console.log(response.data);
            navigate('/login');
        }
    };
    return (
        <section className='container register-box'>
            <div className='left-child'>
                <img src={image} alt='' width='400px' />
                <div className='m-1'>Already have an account ?</div>
                <div>
                    <Link to='/login'>
                        <button className='btn-2 signin'>Login</button>
                    </Link>
                    <Link to='/'>
                        <button className='btn-2 home'>Home</button>
                    </Link>
                </div>
            </div>
            <div className='right-child'>
                <div>
                    <div className='title'>Sign Up</div>
                    <div className='mt-3'>
                        <label htmlFor='name'>Name</label>
                        <br />
                        <input
                            type='text'
                            id='name'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='my-3'
                        />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor='email'>Email</label>
                        <br />
                        <input
                            type='email'
                            id='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='my-3'
                        />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor='password'>Password</label>
                        <br />
                        <input
                            type='password'
                            id='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='my-3'
                        />
                    </div>
                    <div className='mt-3'>
                        <button onClick={onSignup} className='btn-2 register'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
