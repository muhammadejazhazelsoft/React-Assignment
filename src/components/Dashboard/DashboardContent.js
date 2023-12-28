import React, { useEffect, useState } from 'react'
import DatatablePage from './DatatablePage';
import ToastifyServices from '../../Services/ToastifyServices';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersData } from '../../redux/actions/index';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import HTTPServices from '../../Services/HTTPServices';
const DashboardContent = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [editingUserId, setEditingUserId] = useState(null);
    const [isEditing, setisEditing] = useState('')
    const UserRegister = useSelector(state => state.UsersData);
    const dispatch = useDispatch()
    const {register,handleSubmit,formState: { errors },getValues,reset,setValue} = useForm();
    const rows = UserRegister.map(user => {
        return {
        ...user,
        deleteButton: <button className='btn btn-danger w-50' onClick={() => handleDelete(user.id)}>Delete</button>,
        editButton: <button className='btn btn-primary w-50 ms-2' onClick={() => handleEdit(user.id)}>Edit</button>,
        };
    });

    const addUser = async (newUser) => {
        try {
            const response = await HTTPServices.AddUser(newUser); // Call AddUser from HTTPServices
            if (response.status === 201) {
                console.log('User added successfully:', response.data);
                dispatch(setUsersData([...UserRegister, newUser]));
                ToastifyServices.showSuccess('User Added Successfully')
                setModalOpen(false);
                reset();
            }
        } catch (error) {
            console.error('Error adding user:', error);
            ToastifyServices.showError('Failed to add user');
        }
    };
    const handleDelete = async (userId) => {
        const confirmed = window.confirm('Are you sure you want to delete this user?');

        if (confirmed) {
            const isDeleted = await HTTPServices.DeleteUser(userId)

            if (isDeleted) {
                const filterUsers = UserRegister.filter((user) => user.id !== userId);
                dispatch(setUsersData(filterUsers));
                ToastifyServices.showSuccess('User Deleted Successfully');
            } else {
                ToastifyServices.showError('Failed to delete user');
            }
        } else {
            ToastifyServices.showError('Delete action canceled');
        }
    };
    const onSubmit = async (data) => {
        if (isEditing) {
            try {
                const updateSuccessful = await HTTPServices.UpdateUser(editingUserId, {
                    userName: data.name,
                    userEmail: data.email,
                    userPassword: data.password,
                });

                if (updateSuccessful) {
                    const updatedUsers = UserRegister.map((user) => (
                        user.id === editingUserId ? { ...user, userName: data.name, userEmail: data.email, userPassword: data.password } : user
                    ));

                    dispatch(setUsersData(updatedUsers));
                    ToastifyServices.showSuccess('User Updated Successfully');
                    setModalOpen(false);
                    setisEditing(false);
                    setEditingUserId('');
                    reset();
                }
            } catch (error) {
                ToastifyServices.showError('Failed to update user');
                console.error('Error updating user:', error);
            }
        }
        else {
            const newUser = {
                id: uuidv4(),
                userName: data.name,
                userEmail: data.email,
                userPassword: data.password,
            };
            addUser(newUser)
        }

    };
    const fetchData = async () => {
        try {
            const response = await HTTPServices.GetUsers();
            if (response.status !== 200) {
                throw new Error('Failed to fetch');
            }
            const bodyData = response.data;
            dispatch(setUsersData(bodyData));

        } catch (error) {
            console.error('Error fetching data:', error);
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
        setEditingUserId(userId);

        setValue('name', foundUser.userName);
        setValue('email', foundUser.userEmail);
        setValue('password', foundUser.userPassword);
        setValue('confirmPassword', foundUser.confirmPassword);
    };


    useEffect(() => {
        fetchData();
    }, []);



    return (
        <div className='dashboard-content'>
            <h1 className='d-flex justify-content-center RegisterUserText'> REGISTERED USERS TABLE</h1>
            <button className='btn btn-primary addNewUser' onClick={() => { setModalOpen(true) }}> Add New User</button>
            <div className="Table-Content">
                <DatatablePage rows={rows} />
            </div>
            {
                modalOpen && (
                    <div className='ModalForm'
                    >
                        <div >
                            <form className='FormDiv ModalFOrm' onSubmit={handleSubmit(onSubmit)}>
                                <h1>Add User</h1>
                                <div className="mb-2">
                                    <label htmlFor="name" className="form-label text-white">Name</label>
                                    <input
                                        placeholder='User Name'
                                        type="text"
                                        {
                                        ...register('name', {
                                            required: 'Name is required',
                                            minLength: {
                                                value: 3,
                                                message: 'Name must be at least 3 characters long'
                                            }
                                        })
                                        }
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
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/i,
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
                                        {
                                        ...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be at least 8 characters long'
                                            }
                                        })
                                        }
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
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default DashboardContent