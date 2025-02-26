import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { api } from '../common/http';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AdminAuth } from '../context/AdminAuth';

const Login = () => {
    // localStorage.removeItem('admin');
    const login = useContext(AdminAuth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const res = await fetch(`${api}/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            const result = await res.json();
    
            if (result.status === 1) {
                const admin = {
                    token: result.token
                };
    
                toast.success(result.message);
    
                // Store the admin object in localStorage
                localStorage.setItem('authtoken', JSON.stringify(admin));
    
                // Debugging: Log the stored data
                console.log("Stored in LocalStorage:", JSON.parse(localStorage.getItem('authtoken')));
    
                login.login(admin);
                navigate('/admin/dashboard');
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An error occurred during login.');
        }
    };
  return (
    <div className='container d-flex justify-content-center py-5 align-items-center login'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='card shoadow border-0 login-card'>
                <div className='card-body p-4'>
                    <h3 className='pb-3'><strong>Admin Login</strong></h3>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input 
                        {
                            ...register('email',{
                                required: "The email field is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })
                        }
                        type="text" 
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                        id='email' placeholder='Email'/>
                        {
                            errors.email && <div className='invalid-feedback'>{errors.email.message}</div>
                        }
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input 
                        {
                            ...register('password', { required: "Password field is required" })
                        }
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                        id='password' placeholder='Password'/>
                        {
                            errors.password && <div className='invalid-feedback'>{errors.password.message}</div>
                        }
                    </div>
                    <button className='btn btn-primary'>Login</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login