import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { authApi } from '../../api/auth.api'

export function RegisterPage() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault()

        setError('')
        setLoading(true)

        try {
            await authApi.register({
                name,
                phone: phone || undefined,
                email: email || undefined,
                password: password || undefined,
            })

            navigate('/login', {
                state: {
                    message:
                        'Регистрация успешна. Теперь войдите в систему.',
                },
            })
        } catch (error: any) {
            if (error.response?.status === 409) {
                setError('Компания с таким email уже существует.')
            } else if (error.response?.status === 400) {
                setError('Проверьте правильность введённых данных.')
            } else {
                setError('Не удалось зарегистрировать компанию.')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>
                        Создание аккаунта
                    </CardTitle>

                    <CardDescription>
                        Зарегистрируйте компанию для работы с WhatsApp
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div className="space-y-2">
                            <Label htmlFor="name">
                                Название компании
                            </Label>

                            <Input
                                id="name"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                placeholder="ООО Ромашка"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">
                                Телефон
                            </Label>

                            <Input
                                id="phone"
                                value={phone}
                                onChange={(event) =>
                                    setPhone(event.target.value)
                                }
                                placeholder="+996555123456"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">
                                Email
                            </Label>

                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                placeholder="info@romashka.kg"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">
                                Пароль
                            </Label>

                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                placeholder="••••••••"
                            />
                        </div>

                        {error && (
                            <div className="rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loading}
                        >
                            {loading
                                ? 'Регистрация...'
                                : 'Создать аккаунт'}
                        </Button>

                        <div className="text-center text-sm text-muted-foreground">
                            Уже есть аккаунт?{' '}

                            <Link
                                to="/login"
                                className="font-medium text-foreground hover:underline"
                            >
                                Войти
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
