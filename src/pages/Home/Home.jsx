import React, { useEffect } from 'react';
import './Home.scss';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("user-info")){
            navigate('/login')
        }
    }, [])
    return (
        <div className='home'>
            <div className="container">
            Home
            </div>
        </div>
    );
}

export default Home;
