import axios from 'axios'

import { authStorage } from '../lib/auth-storage'

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use((config) => {
    const token = authStorage.getToken()

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

api.interceptors.response.use(
    (response) => response,

    (error) => {
        if (error.response?.status === 401) {
            authStorage.clear()

            window.dispatchEvent(new Event('auth:logout'))
        }

        return Promise.reject(error)
    },
)
