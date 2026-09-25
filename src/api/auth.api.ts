import { api } from './axios'

import type {
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    RegistrationResponse,
} from '../types/auth'

export const authApi = {
    adminLogin(data: LoginRequest) {
        return api.post<LoginResponse>(
            '/api/auth/admin/login',
            data,
        )
    },

    companyLogin(data: LoginRequest) {
        return api.post<LoginResponse>(
            '/api/auth/company/login',
            data,
        )
    },

    register(data: RegisterRequest) {
        return api.post<RegistrationResponse>(
            '/api/auth/register',
            data,
        )
    },
}
