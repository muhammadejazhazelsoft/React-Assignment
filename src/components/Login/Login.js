import React, { useEffect, useState } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ToastifyServices from '../../Services/ToastifyServices';
import { setIsLoggedIn } from '../../redux/actions/index';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // const UserRegister = useSelector(state => state.UsersData);
    const [UserRegister, setUserRegister] = useState([])
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/userData');
            if (response.status !== 200) {
                throw new Error('Failed to fetch');
            }
            const bodyData = response.data;
            setUserRegister(bodyData);
            // dispatch(setUsersData(bodyData));

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        const foundUser = UserRegister.find((user) => user.userEmail.toLowerCase() === data.email.toLowerCase() && data.password === user.userPassword);
        if (foundUser) {
            localStorage.setItem('userData', JSON.stringify(foundUser));
            dispatch(setIsLoggedIn(true));
            ToastifyServices.showSuccess('Successfully Login');
            navigate('/dashboard');
        } else {
            ToastifyServices.showError("Invalid credentials");
            // setValue('password', foundUser.userPassword);
        }
    };
    return (
        <div>
            <div className="LoginContainer">
                <form className='FormDiv' onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login</h1>
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label text-white">Email address</label>
                        <input
                            placeholder='example@gmail.com'
                            type="text"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            className="form-control"
                            id="email"
                        />
                        {errors.email && <p className='errorText'>{errors.email.message}</p>}
                        <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label text-white">Password</label>
                        <input
                            placeholder='Password'
                            type="password"
                            {...register('password', { required: 'Password is required' })}
                            className="form-control"
                            id="password"
                        />
                        {errors.password && <p className='errorText'>{errors.password.message}</p>}
                    </div>
                    <button type='submit' class="btn btn-dark w-100">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login