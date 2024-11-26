import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/register', formData);
            alert('User registered successfully');
            navigate('/');
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='col-lg-6 offset-lg-3'>
                <label className='form-label'>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <label className='form-label'>Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label className='form-label'>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <hr />
                <button type="submit" className='btn btn-primary'>Register</button>
            </form>
        </div>
    );
};

export default Register;
