import axios from "axios"

export async function getAllUsers() {

    const response = await axios.get(`/api/restaurants`);
    return response.data;
}

export async function createUser(data) {
    const response = await axios.post(`/api/user`, {user: data});
    return response.data;
}