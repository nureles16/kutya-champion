import { Navigate } from 'react-router-dom'

import { useAuth } from '../providers/AuthProvider'

export function HomeRedirect() {
    const { isAuthenticated, role } = useAuth()

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                replace
            />
        )
    }

    if (role === 'ADMIN') {
        return (
            <Navigate
                to="/admin/dashboard"
                replace
            />
        )
    }

    if (role === 'CLIENT') {
        return (
            <Navigate
                to="/client/dashboard"
                replace
            />
        )
    }

    return (
        <Navigate
            to="/login"
            replace
        />
    )
}
