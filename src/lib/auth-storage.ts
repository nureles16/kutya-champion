const ACCESS_TOKEN_KEY = 'access_token'
const USER_ROLE_KEY = 'user_role'

export type UserRole = 'ADMIN' | 'COMPANY'

export const authStorage = {
    getToken(): string | null {
        return localStorage.getItem(ACCESS_TOKEN_KEY)
    },

    getRole(): UserRole | null {
        return localStorage.getItem(USER_ROLE_KEY) as UserRole | null
    },

    setAuth(token: string, role: UserRole): void {
        localStorage.setItem(ACCESS_TOKEN_KEY, token)
        localStorage.setItem(USER_ROLE_KEY, role)
    },

    clear(): void {
        localStorage.removeItem(ACCESS_TOKEN_KEY)
        localStorage.removeItem(USER_ROLE_KEY)
    },

    isAuthenticated(): boolean {
        return !!localStorage.getItem(ACCESS_TOKEN_KEY)
    },
}
