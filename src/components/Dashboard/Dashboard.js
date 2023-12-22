import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DatatablePage from './DatatablePage';
import Box from '@mui/material/Box';
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import { setUsersData } from '../../features/DataFile';
import ToastifyServices from '../../Services/ToastifyServices';
const Dashboard = () => {
    const UsersData = [
        {
            id: 1,
            userName: "ejaz",
            userEmail: 'ejaz.cs44@gmail.com',
            userPassword: 'ejazejaz'
        },
        {
            id: 2,
            userName: "usman",
            userEmail: 'usman.cs44@gmail.com',
            userPassword: 'ejazejaz'
        },
        {
            id: 3,
            userName: "faizan",
            userEmail: 'faizan.cs44@gmail.com',
            userPassword: 'ejazejaz'
        },

    ]
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [modalOpen, setModalOpen] = useState(false)
    const [forDummyTest, setforDummyTest] = useState(UsersData)
    const UserRegister = useSelector(state => state.UserRegister.UsersData);
    const LoggedIn = useSelector(state => state.UserRegister.LoggedIn);
    console.log('this is logined', LoggedIn)
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
        //    const id= UserRegister[UserRegister.length-1].id +1
        const id = (Math.random() * 11).toFixed(2);
        const newUser = {
            id: id,
            userName: name,
            userEmail: mail,
            userPassword: password
        };
        setforDummyTest([...forDummyTest, newUser])
        dispatch(setUsersData([...UserRegister, newUser])); // Pass newUser in an array
        setModalOpen(false);
        setMail('')
        setPassword('')
        setName('')
    };


    const handleResetButtonClick = () => {
        dispatch(setUsersData(UsersData));

    };
    const handleBackgroundClick = () => {
        setModalOpen(false)
    }

    useEffect(() => {
        // const user = JSON.parse(localStorage.getItem('userData'));
        if (!LoggedIn) {
            navigate('/');
        }

    }, [LoggedIn])
    return (
        <div className='LandingPage'>
            <div className="SideBar">
                <Sidebar />
            </div>
            <div className="table">
                <DatatablePage />
                <button className='btn btn-primary' onClick={() => { setModalOpen(true) }}> Add New User</button>
            </div>
            <button onClick={handleResetButtonClick}>remove</button>
            {
                modalOpen && (
                    <div
                        // onClick={handleBackgroundClick}
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
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Name</label>
                                    <input type="email" value={name} onChange={(e) => { setName(e.target.value) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" value={mail} onChange={(e) => { setMail(e.target.value) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} class="form-control" id="exampleInputPassword1" />
                                </div>
                                <button onClick={CreateUserAccount} class="btn btn-primary">Submit</button>
                            </form>
                        </Box>
                    </div>
                )
            }
        </div>
    )
}

export default Dashboard