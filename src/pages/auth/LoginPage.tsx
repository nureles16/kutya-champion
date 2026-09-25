import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../app/providers/AuthProvider'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    const navigate = useNavigate()
    const { login } = useAuth()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault()

        setError('')

        if (!username.trim()) {
            setError('Введите логин.')
            return
        }

        if (!password) {
            setError('Введите пароль.')
            return
        }

        try {
            setLoading(true)

            await login(username, password)

            navigate('/')
        } catch (error: any) {
            if (error.response?.status === 401) {
                setError('Неверный логин или пароль.')
            } else if (error.response?.status === 403) {
                setError('У вас нет доступа.')
            } else {
                setError('Ошибка сервера.')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md space-y-4 rounded-xl border p-6"
            >
                <h1 className="text-2xl font-bold">
                    WhatsApp Dashboard
                </h1>

                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full rounded-md border px-3 py-2"
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full rounded-md border px-3 py-2"
                />

                {error && (
                    <p className="text-sm text-red-600">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-md bg-black px-4 py-2 text-white"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <div className="text-center text-sm text-muted-foreground">
                    Нет аккаунта?{' '}

                    <Link
                        to="/register"
                        className="font-medium text-foreground hover:underline"
                    >
                        Зарегистрироваться
                    </Link>
                </div>
            </form>
        </div>
    )
}
