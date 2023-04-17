import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from './login.svg';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validate = () => {
        if (!email) return false;
        if (!password) return false;
        if (password.length < 8) return false;
        return true;
    };
    const onLogin = async () => {
        if (!validate()) {
            alert('Please fill all the field correct');
        } else {
            const userDetails = { email, password };
            const reqData = {
                method: 'post',
                url: `/auth/login`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: userDetails,
            };
            const response = await axios(reqData);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
            navigate('/');
        }
    };

    return (
        <section className='container login-box'>
            <div className='left-child'>
                <div>
                    <div className='title mt-5'>Sign in</div>
                    <div className='mt-4'>
                        <label htmlFor='email'>Email</label> <br />
                        <input
                            type='email'
                            id='email'
                            value={email}
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            className='my-3'
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor='email'>Password</label> <br />
                        <input
                            type='password'
                            id='email'
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='my-3'
                        />
                    </div>
                    <div className='mt-3'>
                        <button className='btn-2 signin' onClick={onLogin}>
                            Sign In
                        </button>
                    </div>
                    <br />
                </div>
            </div>
            <div className='right-child'>
                <img src={image} alt='' width='400px' />
                <div className='m-1'>New to here ? Create Account</div>
                <div>
                    <Link to='/register'>
                        <button className='m-2 btn-2 register'>Register</button>
                    </Link>
                    <Link to='/'>
                        <button className='m-2 btn-2 home'>Home</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Login;
