import axios from 'axios';
const apiKey = process.env.API_ENDPOINT
console.log('this is env', apiKey)
const API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:3001';

async function AddUser(newUser) {
    return await axios.post(`${API_ENDPOINT}/userData`, newUser);
}

async function DeleteUser(userId) {
    try {
        const response = await axios.delete(`${API_ENDPOINT}/userData/${userId}`);
        return response.status === 200;
    } catch (error) {
        console.error('Error deleting user:', error);
        return false;
    }
}
async function GetUsers() {
    return await axios.get(`${API_ENDPOINT}/userData`);
}

async function UpdateUser(userId, updatedUserData) {
    const response = await axios.put(`${API_ENDPOINT}/userData/${userId}`, updatedUserData);
    if (response.status === 200) {
        console.log('User updated successfully:', response.data);
        return true;
    } else {
        console.error('Failed to update user');
        return false;
    }
}

export default {
    AddUser,
    DeleteUser,
    GetUsers,
    UpdateUser
};
