import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:8000/api/login', loginData);
            localStorage.setItem('token', response.data.token);            
            setSuccess('Login successful. You will be redirected immediately');
            await sleep(2000);
            navigate('/about');
        } catch (error) {
            console.error(error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='col-lg-6 offset-lg-3'>
                {error && <div className="alert alert-danger">{error}</div>} 
                {success && <div className="alert alert-success">{success}</div>} 
                <label className='form-label'>Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                />
                <label className='form-label'>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />
                <hr />
                <button type="submit" className='btn btn-primary'>Login</button>
            </form>
        </div>
    );
};

export default Login;
