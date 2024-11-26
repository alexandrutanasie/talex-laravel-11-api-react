import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8000/api/user', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data);
            } catch (error) {
                console.error(error);
                navigate('/');
            }
        };

        fetchUser();
    }, [navigate]);

    return user ? (
        <div className='container'>
            <div>
                <h1>About</h1>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default About;
