import { Navigate } from 'react-router-dom'

import { useAuth } from '../providers/AuthProvider'
import type { UserRole } from '../../types/auth'

interface ProtectedRouteProps {
    children: React.ReactNode
    allowedRoles?: UserRole[]
}

export function ProtectedRoute({
                                   children,
                                   allowedRoles,
                               }: ProtectedRouteProps) {
    const { isAuthenticated, role } = useAuth()

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                replace
            />
        )
    }

    if (!role) {
        return (
            <Navigate
                to="/login"
                replace
            />
        )
    }

    if (
        allowedRoles &&
        !allowedRoles.includes(role)
    ) {
        return (
            <Navigate
                to="/unauthorized"
                replace
            />
        )
    }

    return children
}
