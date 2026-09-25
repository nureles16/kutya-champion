import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from 'react'

import { authApi } from '../../api/auth.api'
import { authStorage } from '../../lib/auth-storage'
import type { UserRole } from '../../types/auth'

interface AuthContextValue {
    isAuthenticated: boolean
    role: UserRole | null
    login: (username: string, password: string) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(
    undefined,
)

interface AuthProviderProps {
    children: ReactNode
}

export function AuthProvider({
                                 children,
                             }: AuthProviderProps) {
    const [role, setRole] = useState<UserRole | null>(
        authStorage.getRole(),
    )

    const [isAuthenticated, setIsAuthenticated] = useState(
        authStorage.isAuthenticated(),
    )

    const login = async (
        username: string,
        password: string,
    ) => {
        const response = await authApi.adminLogin({
            username,
            password,
        })

        const { token, role } = response.data

        authStorage.setAuth(token, role)

        setRole(role)
        setIsAuthenticated(true)
    }

    const logout = () => {
        authStorage.clear()

        setRole(null)
        setIsAuthenticated(false)
    }

    useEffect(() => {
        const handleLogout = () => {
            authStorage.clear()
            setRole(null)
            setIsAuthenticated(false)
        }

        window.addEventListener(
            'auth:logout',
            handleLogout,
        )

        return () => {
            window.removeEventListener(
                'auth:logout',
                handleLogout,
            )
        }
    }, [])

    const value = useMemo(
        () => ({
            isAuthenticated,
            role,
            login,
            logout,
        }),
        [isAuthenticated, role],
    )

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error(
            'useAuth must be used inside AuthProvider',
        )
    }

    return context
}
