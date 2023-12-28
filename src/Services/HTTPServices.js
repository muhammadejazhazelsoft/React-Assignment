import axios from 'axios';
const apiKey = process.env.API_ENDPOINT
console.log('this is env', apiKey)
const API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:3001';

async function AddUser(newUser) {
    return await axios.post(`${API_ENDPOINT}/userData`, newUser);
}

async function DeleteUser(userId) {
    return await axios.delete(`${API_ENDPOINT}/userData/${userId}`);

}
async function GetUsers() {
    return await axios.get(`${API_ENDPOINT}/userData`);
}

async function UpdateUser(userId, updatedUserData) {
    return await axios.put(`${API_ENDPOINT}/userData/${userId}`, updatedUserData);

}

export default {
    AddUser,
    DeleteUser,
    GetUsers,
    UpdateUser
};
