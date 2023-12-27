import React, { useState } from 'react'
import DatatablePage from './DatatablePage';
import Box from '@mui/material/Box';
import ToastifyServices from '../../Services/ToastifyServices';
import { useDispatch, useSelector } from 'react-redux';
// import { setIsLoggedIn, setUsersData } from '../../Slice/DataFile';
import {  setUsersData } from '../../redux/actions/index';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
const DashboardContent = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [editingUserId, setEditingUserId] = useState(null); 
    const [isEditing, setisEditing] = useState('')
    const UserRegister = useSelector(state => state.UsersData);
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
        setValue
    } = useForm();

    const onSubmit = (data) => {
        if (isEditing) {
            console.log('this is edit portion')
            const updatedUsers = UserRegister.map((user) => {
                if (user.id === editingUserId) {
                    return {
                        ...user,
                        userName: data.name,
                        userEmail: data.email,
                        userPassword: data.password,
                    };
                }
                return user;
            });

            dispatch(setUsersData(updatedUsers));
            ToastifyServices.showSuccess('User Updated Successfully');
            setModalOpen(false);
            setisEditing(false)
            setEditingUserId('');
            reset()
        }
        else {

            const newUser = {
                id: uuidv4(),
                userName: data.name,
                userEmail: data.email,
                userPassword: data.password,
            };
            dispatch(setUsersData([...UserRegister, newUser]));
            ToastifyServices.showSuccess('User Added Successfully')
            setModalOpen(false);

            reset();
        }

    };
    const closeModal = () => {
        setModalOpen(false)
        setisEditing(false);
        reset()
    }

    const handleEdit = (userId) => {
        setisEditing(true);
        setModalOpen(true);
        const foundUser = UserRegister.find((user) => user.id === userId);
        console.log('this is user', foundUser);
        setEditingUserId(userId);

        setValue('name', foundUser.userName);
        setValue('email', foundUser.userEmail);
        setValue('password', foundUser.userPassword);
        setValue('confirmPassword', foundUser.confirmPassword);
    };


    return (
        <div className='dashboard-content'>
            <h1 className='d-flex justify-content-center RegisterUserText'> REGISTERED USERS TABLE</h1>

            <button className='btn btn-primary addNewUser' onClick={() => { setModalOpen(true) }}> Add New User</button>
            <div className="Table-Content">

                <DatatablePage handleEdit={handleEdit} />
            </div>
            {
                modalOpen && (
                    <div className='ModalForm'
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
                            <form className='FormDiv ModalFOrm' onSubmit={handleSubmit(onSubmit)}>
                                <h1>Add User</h1>
                                <div className="mb-2">
                                    <label htmlFor="name" className="form-label text-white">Name</label>
                                    <input
                                        placeholder='User Name'
                                        type="text"
                                        {...register('name', { required: 'Name is required' })}
                                        className="form-control"
                                        id="name"
                                    />
                                    {errors.name && <p className='errorText'>{errors.name.message}</p>}
                                </div>
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
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
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
                                <div className="mb-2">
                                    <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
                                    <input
                                        placeholder='Confirm Password'
                                        type="password"
                                        {...register('confirmPassword', {
                                            required: 'Confirm Password is required',
                                            validate: (value) =>
                                                value === getValues('password') || 'Passwords do not match',
                                        })}
                                        className="form-control"
                                        id="confirmPassword"
                                    />
                                    {errors.confirmPassword && <p className='errorText'>{errors.confirmPassword.message}</p>}
                                </div>
                                <div className="d-flex">
                                    {isEditing ? (
                                        <button type='submit' className="btn btn-dark me-3 w-100">
                                            Update
                                        </button>
                                    ) : (
                                        <button type='submit' className="btn btn-dark me-3 w-100">
                                            Submit
                                        </button>
                                    )}
                                    <button type="button" onClick={closeModal} className="btn btn-dark w-100">
                                        Cancel
                                    </button>
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