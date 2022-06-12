import React, { useEffect, useState } from 'react';
import "./Header.scss";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate();
    function logOut(){
        localStorage.clear();
        navigate('/login')
    }


    return (
        <header className='header'>
            <div className='container'>
                <ul className='header__list'>
                
                {
                    localStorage.getItem('user-info') ? 
                    <>
                            <li className='header__item'><Link className='header__link' to={'/'}>Home</Link></li>
                            <li className='header__item'><Link className='header__link' to={'/createuser'}>Create User</Link></li>
                        </>
                        :
                        <>
                            <li className='header__item'><Link className='header__link' to={'/login'}>Login</Link></li>
                            <li className='header__item'><Link className='header__link' to={'/register'}>Register</Link></li>
                        </>
                }

            {localStorage.getItem('user-info') ? 
            <li className='header__item'>
                <div title={user && user.name}>
                    <button className='header__btn' onClick={logOut}>Logout</button>
                </div>
            </li>
                : null
            }

                </ul>


            </div>
        </header>
    );
}

export default Header;
