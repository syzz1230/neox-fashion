import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/images/UI/shop-icon.png';
import { BsSearch, BsCart3 } from 'react-icons/bs';
import { CiLogin } from 'react-icons/ci';

const Navbar = ({ cartSize }) => {
    const [user, setUser] = useState(localStorage.getItem('name'));
    const signOut = () => {
        alert('Successful sign out');
        localStorage.clear();
        setUser('');
    };
    return (
        <nav>
            <div className='container d-flex'>
                <div className='logo my-2'>
                    <Link to='/'>
                        <img src={logo} alt='neox-fashion-logo' />
                    </Link>
                </div>
                <div className='main-nav d-flex justify-space-between align-center my-2'>
                    <ul className='no-bullet logo-ul'>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <li className='no-style'>NeoX-Fashion </li>
                        </Link>
                    </ul>
                    <ul className='no-bullet link-ul'>
                        <li className='d-inline'>
                            <input type='text' placeholder=' Search for product' id='search-box' />
                            <button className='btn mx-2'>
                                <BsSearch />
                            </button>
                        </li>
                        <li className='d-inline mx-5 '>
                            <Link to='/cart' style={{ textDecoration: 'none', color: 'white' }}>
                                <BsCart3 />
                                Cart <span className='text-orange'>{cartSize}</span>
                            </Link>
                        </li>
                        {!user && (
                            <li className='d-inline'>
                                <Link to='/login'>
                                    <button className='btn'>
                                        Login
                                        <CiLogin />
                                    </button>
                                </Link>
                            </li>
                        )}
                        {user && (
                            <span>
                                Hi, <b className='text-orange'>{user} </b>
                                <button className='btn' onClick={signOut}>
                                    {' '}
                                    <b>Sign Out</b>
                                </button>
                            </span>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
