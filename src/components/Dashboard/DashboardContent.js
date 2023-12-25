import React, { useState } from 'react'
import DatatablePage from './DatatablePage';
import Box from '@mui/material/Box';
import ToastifyServices from '../../Services/ToastifyServices';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn, setUsersData } from '../../Slice/DataFile';
import { v4 as uuidv4 } from 'uuid';
const DashboardContent = () => {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [modalOpen, setModalOpen] = useState(false)
    const UserRegister = useSelector(state => state.UserRegister.UsersData);
    const dispatch = useDispatch()
    const closeModal = () => {
        setModalOpen(false)
    }
    const CreateUserAccount = (e) => {
        e.preventDefault();
        if (!password || !mail || !name) {
            ToastifyServices.showError("Both fields are required!")
            return;
        }
        // Username validation
        const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
        if (!usernameRegex.test(name)) {
            ToastifyServices.showError("Please enter a valid username: 3-16 characters, alphanumeric characters, underscores, or hyphens.");
            return;
        }


        // 4. Email validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(mail)) {
            ToastifyServices.showError("Please enter a valid email address.")
            return;
        }
        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            ToastifyServices.showError("Please enter a valid password: at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }
        const newUser = {
            id: uuidv4(),
            userName: name,
            userEmail: mail,
            userPassword: password
        };
        dispatch(setUsersData([...UserRegister, newUser]));
        ToastifyServices.showSuccess('User Added Successfully')
        setModalOpen(false);
        setMail('')
        setPassword('')
        setName('')
    };





    return (
        <div>
            <h1 className='pb-5 d-flex justify-content-center'> REGISTERED USERS TABLE</h1>
            <DatatablePage />
            <button className='btn btn-primary' onClick={() => { setModalOpen(true) }}> Add New User</button>
            {
                modalOpen && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            zIndex: 9999,
                            transition: 'all 0.3s ease-in-out'
                        }}
                    >
                        <Box sx={{ display: 'flex' }}>
                            <form className='FormDiv ModalFOrm'>
                                <h1>Add User</h1>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label text-white">Name</label>
                                    <input placeholder='User Name' type="email" value={name} onChange={(e) => { setName(e.target.value) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                                    <input placeholder='example@gmail.com' type="email" value={mail} onChange={(e) => { setMail(e.target.value) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label text-white">Password</label>
                                    <input placeholder='Password' type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="d-flex ">
                                    <button onClick={CreateUserAccount} className="btn btn-dark me-3 w-100">Submit</button>
                                    <button onClick={closeModal} className="btn btn-dark w-100">Cancel</button>
                                </div>
                            </form>
                        </Box>
                    </div>
                )
            }

        </div>
    )
}

export default DashboardContent