import { useAuth } from '../../app/providers/AuthProvider'

interface HeaderProps {
    onMenuClick?: () => void
}

export function Header({
                           onMenuClick,
                       }: HeaderProps) {
    const { role } = useAuth()

    return (
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
            <button
                type="button"
                onClick={onMenuClick}
                className="rounded-md border px-3 py-2 text-sm md:hidden"
            >
                Menu
            </button>

            <div className="hidden md:block" />

            <div className="flex items-center gap-3">
                <div className="text-right">
                    <div className="text-sm font-medium">
                        {role}
                    </div>

                    <div className="text-xs text-slate-500">
                        Account
                    </div>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-medium text-white">
                    {role === 'ADMIN' ? 'A' : 'C'}
                </div>
            </div>
        </header>
    )
}
