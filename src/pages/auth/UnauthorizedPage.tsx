import { Link } from 'react-router-dom'

export function UnauthorizedPage() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold">
                    403
                </h1>

                <p className="mt-2 text-slate-600">
                    У вас нет прав для выполнения этой операции.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-block rounded-md bg-slate-900 px-4 py-2 text-white"
                >
                    Вернуться
                </Link>
            </div>
        </div>
    )
}
