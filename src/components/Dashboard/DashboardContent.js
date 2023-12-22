import React, { useState } from 'react'
import DatatablePage from './DatatablePage';
import Box from '@mui/material/Box';
import ToastifyServices from '../../Services/ToastifyServices';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersData } from '../../features/DataFile';
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
        // 4. Email validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(mail)) {
            ToastifyServices.showError("Please enter a valid email address.")
            return;
        }
        const id = (Math.random() * 11).toFixed(2);
        const newUser = {
            id: id,
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
                                <div className="d-flex justify-content-center">
                                    <button onClick={CreateUserAccount} className="btn btn-dark me-3">Submit</button>
                                    <button onClick={closeModal} className="btn btn-dark">Cancel</button>
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