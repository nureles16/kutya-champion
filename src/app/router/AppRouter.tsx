import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'

import LoginPage from '../../pages/auth/LoginPage'
import { UnauthorizedPage } from '../../pages/auth/UnauthorizedPage'

import { AdminDashboardPage } from '../../pages/admin/AdminDashboardPage'
import { PlaceholderPage } from '../../pages/admin/PlaceholderPage'

import { ClientDashboardPage } from '../../pages/client/ClientDashboardPage'
import { ProtectedRoute } from './ProtectedRoute'
import { AppLayout } from '../../components/layout/AppLayout'
import { HomeRedirect } from './HomeRedirect'
import { RegisterPage } from '../../pages/auth/RegisterPage'

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public */}
                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/unauthorized"
                    element={<UnauthorizedPage />}
                />

                {/* ADMIN */}
                <Route
                    element={
                        <ProtectedRoute allowedRoles={['ADMIN']}>
                            <AppLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route
                        path="/admin/dashboard"
                        element={<AdminDashboardPage />}
                    />

                    <Route
                        path="/admin/messages"
                        element={
                            <PlaceholderPage title="Messages" />
                        }
                    />

                    <Route
                        path="/admin/analytics"
                        element={
                            <PlaceholderPage title="Analytics" />
                        }
                    />

                    <Route
                        path="/admin/registrations"
                        element={
                            <PlaceholderPage title="Registrations" />
                        }
                    />

                    <Route
                        path="/admin/system"
                        element={
                            <PlaceholderPage title="System" />
                        }
                    />

                    <Route
                        path="/admin/api-console"
                        element={
                            <PlaceholderPage title="API Console" />
                        }
                    />
                </Route>

                {/* CLIENT */}
                <Route
                    element={
                        <ProtectedRoute allowedRoles={['CLIENT']}>
                            <AppLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route
                        path="/client/dashboard"
                        element={<ClientDashboardPage />}
                    />

                    <Route
                        path="/client/whatsapp"
                        element={
                            <PlaceholderPage title="WhatsApp" />
                        }
                    />

                    <Route
                        path="/client/messages"
                        element={
                            <PlaceholderPage title="Messages" />
                        }
                    />

                    <Route
                        path="/client/logs"
                        element={
                            <PlaceholderPage title="Logs" />
                        }
                    />

                    <Route
                        path="/client/bot"
                        element={
                            <PlaceholderPage title="Bot" />
                        }
                    />
                </Route>

                {/* Root */}
                <Route
                    path="/"
                    element={<HomeRedirect />}
                />

                <Route
                    path="/register"
                    element={<RegisterPage />}
                />
            </Routes>
        </BrowserRouter>
    )
}
