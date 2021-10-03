import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.github.com/',
});

export const usersAPI = {
    async getUsers() {
        let data = await instance.get(`users?per_page=30`)
        return data.data
    },
    async getUser(username) {
        let data = await instance.get(`users/${username}`)
        return data.data
    }
}

