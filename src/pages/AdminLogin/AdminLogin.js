import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validate = () => {
        if (!email || !password || password.length < 8) return false;
        return true;
    };
    const onLogin = async () => {
        const userDetails = { email, password };
        if (!validate()) console.log('Please Enter the field correct');
        else {
            const reqData = {
                method: 'post',
                url: `/auth/login`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: userDetails,
            };
            const response = await axios(reqData);
            localStorage.clear();
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
            navigate('/admin/dashboard');
        }
    };
    return (
        <div className='container '>
            <div className='af-container'>
                <div className='m-5  login-container title'>Admin Sign In</div>
                <div className='m-5  login-container'>
                    <label htmlFor='email'>Email : </label>
                    <input
                        type='email'
                        id='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='m-5  login-container'>
                    <label htmlFor='password'>Password : </label>
                    <input
                        type='password'
                        id='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='m-4  login-container'>
                    <button className='btn-2 primary' onClick={onLogin}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
