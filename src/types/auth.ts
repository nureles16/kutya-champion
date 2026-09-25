export type UserRole = 'ADMIN' | 'COMPANY'

export interface LoginRequest {
    username: string
    password: string
}

export interface LoginResponse {
    token: string
    role: UserRole
}

export interface RegisterRequest {
    name: string
    phone?: string
    email?: string
    password?: string
}

export interface RegistrationResponse {
    id: number
    name: string
    email?: string
}
