import React, { useState } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ToastifyServices from '../../Services/ToastifyServices';
import { setLoggedIn } from '../../features/DataFile';
const Login = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const UserRegister = useSelector(state => state.UserRegister.UsersData);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (!password || !mail) {
            ToastifyServices.showError("Both fields are required!")
            return;
          }
        // 4. Email validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(mail)) {
            ToastifyServices.showError("Please enter a valid email address.")
            return;
        }

        const foundUser = UserRegister.find((user) => {
            return mail === user.userEmail && password === user.userPassword;
        });

        if (foundUser) {
            // Store user data in localStorage
            localStorage.setItem('userData', JSON.stringify(foundUser));
            dispatch(setLoggedIn(true))
            ToastifyServices.showSuccess('Successfully Login')
            navigate('/dashboard');
        } else {
            ToastifyServices.showError('Invalid credentials')

        }
    };


    return (
        <div>
            <div className="LoginContainer">
                <form className='FormDiv'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" value={mail} onChange={(e) => { setMail(e.target.value) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button onClick={onSubmitForm} class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login